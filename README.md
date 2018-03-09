Port of GitHub's Markdown Sanitizer for [marked][]
==================================================
[![npm version badge][]][marked-sanitizer-github]

[marked-sanitizer-github][] provides a sanitizer to sanitize HTML elements in Markdown documents.
The implementation was ported from [html-pipeline](html-pipeline/lib/html/pipeline/sanitization_filter.rb).

[marked][] provides sanitization by default. But it does not allow any HTML elements and escapes
all of them in a parsing Markdown document. By using [marked-sanitizer-github][], some safe
HTML elements are available.

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

`SanitizeState` class also provides `reset()` method and `isInUse()` method.

`reset()` method resets the sanitization state. If you use the `SanitizeState` object multiple times,
you must call the method before parsing a markdown document.

`isInUse()` method returns whether the state object has ongoing state or is ready for parsing a new
document. `true` means the internal state is in use (not ready for parsing a new document).
Returning `true` means it requires to call `reset()` method before parsing a new document.

## License

[MIT License](LICENSE)

[marked]: https://github.com/markedjs/marked
[marked-sanitizer-github]: https://github.com/rhysd/marked-sanitizer-github
[npm version badge]: https://badge.fury.io/js/marked-sanitizer-github.svg
