import { URL } from 'url';
import { isAbsolute } from 'path';
import { Parser as HTMLParser } from 'htmlparser2';
import { escape as escapeHTML } from 'he';
import voidElements = require('html-void-elements');

const VOID_ELEMENTS = new Set(voidElements);
const RE_EXTRACT_TAG_NAME = /<\/([^>]+)>/;

interface ElemAttrs {
    [name: string]: string | undefined;
}

interface HTMLElem {
    name: string;
    attrs: ElemAttrs;
}

enum HowToSanitize {
    Escape,
    Remove,
    DoNothing,
    EscapeWithoutPush,
}

// Tuple of (tagName, didEscape)
type SanitizeHistory = [string, HowToSanitize];

export class SanitizeWhitelist {
    ELEMENTS = new Set([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'h7',
        'h8',
        'br',
        'b',
        'i',
        'strong',
        'em',
        'a',
        'pre',
        'code',
        'img',
        'tt',
        'div',
        'ins',
        'del',
        'sup',
        'sub',
        'p',
        'ol',
        'ul',
        'table',
        'thead',
        'tbody',
        'tfoot',
        'blockquote',
        'dl',
        'dt',
        'dd',
        'kbd',
        'q',
        'samp',
        'var',
        'hr',
        'ruby',
        'rt',
        'rp',
        'li',
        'tr',
        'td',
        'th',
        's',
        'strike',
        'summary',
        'details',
    ]);
    REMOVE_CONTENTS = ['script'];
    ATTRIBUTES = {
        a: ['href'],
        img: ['src', 'longdesc'],
        div: ['itemscope', 'itemtype'],
        blockquote: ['cite'],
        del: ['cite'],
        ins: ['cite'],
        q: ['cite'],
        '*': new Set([
            'abbr',
            'accept',
            'accept-charset',
            'accesskey',
            'action',
            'align',
            'alt',
            'axis',
            'border',
            'cellpadding',
            'cellspacing',
            'char',
            'charoff',
            'charset',
            'checked',
            'clear',
            'cols',
            'colspan',
            'color',
            'compact',
            'coords',
            'datetime',
            'dir',
            'disabled',
            'enctype',
            'for',
            'frame',
            'headers',
            'height',
            'hreflang',
            'hspace',
            'ismap',
            'label',
            'lang',
            'maxlength',
            'media',
            'method',
            'multiple',
            'name',
            'nohref',
            'noshade',
            'nowrap',
            'open',
            'prompt',
            'readonly',
            'rel',
            'rev',
            'rows',
            'rowspan',
            'rules',
            'scope',
            'selected',
            'shape',
            'size',
            'span',
            'start',
            'summary',
            'tabindex',
            'target',
            'title',
            'type',
            'usemap',
            'valign',
            'value',
            'vspace',
            'width',
            'itemprop',
        ]),
    };
    // Note: Relative path also should be allowed
    PROTOCOLS = {
        a: {
            href: ['http', 'https', 'mailto', 'github-windows', 'github-mac'],
        },
        blockquote: {
            cite: ['http', 'https'],
        },
        del: {
            cite: ['http', 'https'],
        },
        ins: {
            cite: ['http', 'https'],
        },
        q: {
            cite: ['http', 'https'],
        },
        img: {
            src: ['http', 'https'],
            longdesc: ['http', 'https'],
        },
    } as { [name: string]: { [attr: string]: string[] } };
}

export class SanitizeConfig {
    LIST = ['ul', 'ol'];
    LIST_ITEM = 'li';
    TABLE_ITEMS = ['tr', 'td', 'th'];
    TABLE = 'table';
    TABLE_SECTIONS = ['thead', 'tbody', 'tfoot'];
    whitelist = new SanitizeWhitelist();
}

export default class SanitizeState {
    public config = new SanitizeConfig();
    public onDetectedBroken: ((message: string, tag: string) => void) | null = null;
    private broken: boolean = false;
    private tagStack: SanitizeHistory[] = [];
    private parsed: HTMLElem | null | undefined;
    private readonly parser = new HTMLParser({
        onopentag: (name, attrs) => {
            this.parsed = { name, attrs };
        },
        oncomment: () => {
            this.parsed = null;
        },
        // Note: CDATA (cdatastart) is not handled
        // Note: onerror is not handled because no error occurs while only parsing an opening tag
    });

    reset() {
        this.tagStack = [];
        this.broken = false;
    }

    isInUse() {
        return this.broken || this.tagStack.length !== 0;
    }

    isBroken() {
        return this.broken;
    }

    getSanitizer() {
        return this.sanitize.bind(this);
    }

    sanitize(tag: string) {
        if (this.broken) {
            return escapeHTML(tag);
        }
        if (tag.startsWith('</')) {
            return this.sanitizeCloseTag(tag);
        } else {
            return this.sanitizeOpenTag(tag);
        }
    }

    private itsBroken(msg: string, tag: string) {
        if (this.broken) {
            // Already broken
            return;
        }
        this.broken = true;
        if (this.onDetectedBroken !== null) {
            this.onDetectedBroken(msg, tag);
        }
    }

    private sanitizeCloseTag(tag: string) {
        const matched = tag.match(RE_EXTRACT_TAG_NAME);
        if (matched === null) {
            this.itsBroken(`Closing HTML tag is broken: '${tag}'`, tag);
            return escapeHTML(tag);
        }
        const tagName = matched[1].toLowerCase();
        if (VOID_ELEMENTS.has(tagName)) {
            return '';
        }
        if (!this.config.whitelist.ELEMENTS.has(tagName)) {
            // If tag name is not allowed, it is always escaped
            return escapeHTML(tag);
        }

        // Note: This check must be done after above void element check because tag history
        // stack is empty when a void element is at toplevel and with a closing tag.
        if (this.tagStack.length === 0) {
            this.itsBroken('Extra closing HTML tags in the document', tag);
            return escapeHTML(tag);
        }

        // Check top
        const [name, how] = this.tagStack[this.tagStack.length - 1];
        if (tagName !== name) {
            this.itsBroken(`Open/Closing HTML tag mismatch: </${name}> v.s. ${tag}`, tag);
            return escapeHTML(tag);
        }

        // Pop
        this.tagStack.pop();

        switch (how) {
            case HowToSanitize.Remove:
                return '';
            case HowToSanitize.Escape:
                return escapeHTML(tag);
            case HowToSanitize.DoNothing:
                return tag;
            case HowToSanitize.EscapeWithoutPush:
                throw new Error('NEVER REACH HERE');
        }
    }

    private sanitizeOpenTag(tag: string) {
        const elem = this.parseOpenTag(tag);
        switch (elem) {
            case null:
                // null means comment
                return '';
            case undefined:
                this.itsBroken(`Failed to parse open HTML tag: '${tag}'`, tag);
                return escapeHTML(tag);
            default:
                break;
        }

        const how = this.howToSanitize(elem);
        if (how !== HowToSanitize.EscapeWithoutPush && !tag.endsWith('/>') && !VOID_ELEMENTS.has(elem.name)) {
            // Note: If it's not an empty element, push history stack
            // Note: If the element is void element, we don't push it to tag hisotry stack.
            // On sanitizeCloseTag(), closing tags for void elements are simply skipped and they
            // never appear in converted HTML document.
            this.tagStack.push([elem.name, how]);
        }

        switch (how) {
            case HowToSanitize.Remove:
                return '';
            case HowToSanitize.Escape:
            case HowToSanitize.EscapeWithoutPush:
                return escapeHTML(tag);
            case HowToSanitize.DoNothing:
                return tag;
        }
    }

    private parseOpenTag(tag: string) {
        this.parser.reset();
        this.parser.write(tag);
        this.parser.end();
        const parsed = this.parsed;
        this.parsed = undefined;
        return parsed;
    }

    private howToSanitize(elem: HTMLElem): HowToSanitize {
        // Top-level <li> elements are removed because they can break out of
        // containing markup.
        if (
            elem.name === this.config.LIST_ITEM &&
            this.tagStack.every(([name, _]) => this.config.LIST.indexOf(name) === -1)
        ) {
            return HowToSanitize.Remove;
        }

        // Table child elements that are not contained by a <table> are removed.
        if (
            (this.config.TABLE_SECTIONS.indexOf(elem.name) !== -1 ||
                this.config.TABLE_ITEMS.indexOf(elem.name) !== -1) &&
            this.tagStack.every(([name, _]) => this.config.TABLE !== name)
        ) {
            return HowToSanitize.Remove;
        }

        const wl = this.config.whitelist;

        // Check allowed (non escaped) elements
        if (!wl.ELEMENTS.has(elem.name)) {
            return HowToSanitize.EscapeWithoutPush;
        }

        // TODO: Check elements should be removed (not escaped, but just removed)
        // It's hard to remove content of the element with current markedjs implementation.

        const allowedAttrs: string[] | undefined = (wl.ATTRIBUTES as any)[elem.name];
        for (const attr of Object.keys(elem.attrs)) {
            // Check allowed attributes
            if (allowedAttrs !== undefined && allowedAttrs.indexOf(attr) === -1 && !wl.ATTRIBUTES['*'].has(attr)) {
                return HowToSanitize.Escape;
            }

            // Check allowed protocols (e.g. 'href' of <a/>)
            if (elem.name in wl.PROTOCOLS && attr in wl.PROTOCOLS[elem.name]) {
                const value = elem.attrs[attr]!;

                try {
                    const u = new URL(value);
                    const protocol = u.protocol.slice(0, -1); // Omit last ':'
                    const allowedProtocols = wl.PROTOCOLS[elem.name][attr];
                    if (allowedProtocols.every(p => p !== protocol)) {
                        return HowToSanitize.Escape;
                    }
                } catch (_) {
                    // Not a URL
                    if (isAbsolute(value)) {
                        return HowToSanitize.Escape;
                    }
                }
            }
        }

        return HowToSanitize.DoNothing;
    }
}
