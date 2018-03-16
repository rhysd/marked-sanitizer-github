import SanitizeState from '..';

function listOfElementsText(elements: string | string[] | Set<string>) {
    const elems = typeof elements === 'string' ? [elements] : elements instanceof Set ? [...elements] : elements;
    if (elems.length === 0) {
        throw new Error('Empty list');
    }
    if (elems.length === 1) {
        return `\`${elems[0]}\``;
    }
    return (
        elems
            .slice(0, -1)
            .map(e => `\`${e}\``)
            .join(', ') +
        ' and ' +
        `\`${elems[elems.length - 1]}\``
    );
}

const state = new SanitizeState();
const cfg = state.config;
const wl = cfg.whitelist;
let output = `## Sanitized elements

`;

output += `- **Allowed elements**: ${listOfElementsText(wl.ELEMENTS)}\n`;
output += `- **Allowed attributes**: Only following attributes are allowed for allowed elements.\n`;
for (let tag of Object.keys(wl.ATTRIBUTES)) {
    const attrs = listOfElementsText(wl.ATTRIBUTES[tag]);
    if (tag === '*') {
        tag = 'ALL';
    }
    output += `  - **${tag}**: ${attrs}\n`;
}
output += `- **Allowed protocols in attributes**: Only following protocols are allowed as values of allowed attributes\n`;
for (const tag of Object.keys(wl.PROTOCOLS)) {
    output += `  - **${tag}**:\n`;
    for (const attr of Object.keys(wl.PROTOCOLS[tag])) {
        output += `    - **${attr}**: ${listOfElementsText(wl.PROTOCOLS[tag][attr])}\n`;
    }
}
output += `- ${listOfElementsText(cfg.LIST_ITEM)} must be nested in ${listOfElementsText(cfg.LIST)}\n`;
output += `- Table items (${listOfElementsText(cfg.TABLE_ITEMS)}) and table headers (${listOfElementsText(
    cfg.TABLE_SECTIONS,
)}) must be nested in ${listOfElementsText(cfg.TABLE)}`;

process.stdout.write(output + '\n');
