Port of GitHub's Markdown Sanitizer for [marked][]
==================================================
[![npm version badge][]][npm pacakge]

[marked-sanitizer-github][] provides a sanitizer to sanitize HTML elements in Markdown documents.
The implementation was ported from [html-pipeline](html-pipeline/lib/html/pipeline/sanitization_filter.rb).

[marked][] provides sanitization by default. But it does not allow any HTML elements and escapes
all of them in a parsing Markdown document. By using [marked-sanitizer-github][], some safe
HTML elements are available.

When a sanitizer detects broken HTML elements (e.g. not closing element), it escapes all elements
after that.

## Installation

```
$ npm install --save marked-sanitizer-github
```

## Usage

It exports one class `SanitizeState` because the sanitization is stateful. You can get a sanitizer
for marked parser by calling `getSanitizer()` method. It returns a function object to sanitize.

```javascript
const marked = require('marked');
const SanitizeState = require('marked-sanitizer-github').default;

const md = `some document`;

const state = new SanitizeState();

// Convert a markdown document to HTML with sanitization
const html = marked(md, {
    sanitize: true,
    sanitizer: state.getSanitizer(),
});

console.log(html);
```

`SanitizeState` class also provides `reset()` method, `isBroken()` method and `isInUse()` method.

`reset()` method resets the sanitization state. If you use the `SanitizeState` object multiple times,
you must call the method before parsing a markdown document.

`isBroken()` method returns whether the state is broken. A broken state means that Some HTML elements in
a sanitized document were broken (e.g. tag mismatch, closing tag does not appear, ...).

You can have a callback to know the reason why the document is broken as follows:

```javascript
state.onDetectedBroken = (reason, tag) => {
    console.error(`Broken HTML around '${tag}' tag: ${reason}`);
};
```

`isInUse()` method returns whether the state object has ongoing state or is ready for parsing a new
document. `true` means the internal state is in use (not ready for parsing a new document).
Returning `true` means it requires to call `reset()` method before parsing a new document.

## Sanitized elements

- **Allowed elements**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`, `h8`, `br`, `b`, `i`, `strong`, `em`, `a`, `pre`, `code`, `img`, `tt`, `div`, `ins`, `del`, `sup`, `sub`, `p`, `ol`, `ul`, `table`, `thead`, `tbody`, `tfoot`, `blockquote`, `dl`, `dt`, `dd`, `kbd`, `q`, `samp`, `var`, `hr`, `ruby`, `rt`, `rp`, `li`, `tr`, `td`, `th`, `s`, `strike`, `summary` and `details`
- **Allowed attributes**: Only following attributes are allowed for allowed elements.
  - **a**: `href`
  - **img**: `src` and `longdesc`
  - **div**: `itemscope` and `itemtype`
  - **blockquote**: `cite`
  - **del**: `cite`
  - **ins**: `cite`
  - **q**: `cite`
  - **ALL**: `abbr`, `accept`, `accept-charset`, `accesskey`, `action`, `align`, `alt`, `axis`, `border`, `cellpadding`, `cellspacing`, `char`, `charoff`, `charset`, `checked`, `clear`, `cols`, `colspan`, `color`, `compact`, `coords`, `datetime`, `dir`, `disabled`, `enctype`, `for`, `frame`, `headers`, `height`, `hreflang`, `hspace`, `ismap`, `label`, `lang`, `maxlength`, `media`, `method`, `multiple`, `name`, `nohref`, `noshade`, `nowrap`, `open`, `prompt`, `readonly`, `rel`, `rev`, `rows`, `rowspan`, `rules`, `scope`, `selected`, `shape`, `size`, `span`, `start`, `summary`, `tabindex`, `target`, `title`, `type`, `usemap`, `valign`, `value`, `vspace`, `width` and `itemprop`
- **Allowed protocols in attributes**: Only following protocols are allowed as values of allowed attributes
  - **a**:
    - **href**: `http`, `https`, `mailto`, `github-windows` and `github-mac`
  - **blockquote**:
    - **cite**: `http` and `https`
  - **del**:
    - **cite**: `http` and `https`
  - **ins**:
    - **cite**: `http` and `https`
  - **q**:
    - **cite**: `http` and `https`
  - **img**:
    - **src**: `http` and `https`
    - **longdesc**: `http` and `https`
- `li` must be nested in `ul` and `ol`
- Table items (`tr`, `td` and `th`) and table headers (`thead`, `tbody` and `tfoot`) must be nested in `table`

## License

[MIT License](LICENSE)

[marked]: https://github.com/markedjs/marked
[marked-sanitizer-github]: https://github.com/rhysd/marked-sanitizer-github
[npm version badge]: https://badge.fury.io/js/marked-sanitizer-github.svg
[npm pacakge]: https://www.npmjs.com/package/marked-sanitizer-github
