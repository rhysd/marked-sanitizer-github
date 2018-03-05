import { Parser as HTMLParser } from 'htmlparser2';
import { escape as escapeHTML } from 'he';

interface ElemAttrs {
    [name: string]: string | undefined;
}

// Tuple of (tagName, didEscape)
type TagHistory = [string, boolean];
type HTMLElem = { name: string; attrs: ElemAttrs };

export default class SanitizeState {
    private tagStack: TagHistory[] = [];
    private parsed: HTMLElem | undefined;
    private readonly parser: HTMLParser;

    constructor() {
        this.parser = new HTMLParser({
            onopentag: (name, attrs) => {
                this.parsed = { name, attrs };
            },
        });
    }

    reset() {
        this.tagStack = [];
    }

    isInUse() {
        return this.tagStack.length !== 0;
    }

    getSanitizer() {
        return this.sanitize.bind(this);
    }

    sanitize(tag: string) {
        if (tag.startsWith('</')) {
            return this.sanitizeCloseTag(tag);
        } else {
            return this.sanitizeOpenTag(tag);
        }
    }

    private sanitizeCloseTag(tag: string) {
        if (this.tagStack.length === 0) {
            return escapeHTML(tag);
        }

        const [name, escaped] = this.tagStack[0];
        if (tag !== `</${name}>`) {
            // Open/Close tag mismatch
            // TODO: Should raise a warning message for debugging as optional.
            return escapeHTML(tag);
        }

        this.tagStack.shift();

        if (escaped) {
            return escapeHTML(tag);
        }

        return tag;
    }

    private sanitizeOpenTag(tag: string) {
        const isEmptyTag = tag.endsWith('/>');

        const elem = this.parseOpenTag(tag);
        if (elem === undefined) {
            // Failed to parse HTML tag
            // TODO: Should raise a warning message for debugging as optional.
            return escapeHTML(tag);
        }

        const escaped = shouldEscape(elem);
        if (!isEmptyTag) {
            this.tagStack.push([elem.name, escaped]);
        }
        if (escaped) {
            return escapeHTML(tag);
        }
        return tag;
    }

    private parseOpenTag(tag: string) {
        this.parser.write(tag);
        this.parser.end();
        const parsed = this.parsed;
        this.parsed = undefined;
        return parsed;
    }
}

export function shouldEscape(_: HTMLElem) {
    // TODO: Implement sanitization logic ported from GitHub's HTML pipeline logic
    return true;
}
