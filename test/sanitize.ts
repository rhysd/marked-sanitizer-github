import test from 'ava';
import { escape } from 'he';
import SanitizeState from '../index';

const SANITIZE_OK: {
    [desc: string]: {
        elem: string | [string, { [name: string]: string }];
        escaped: boolean;
    }[];
} = {
    'allowed elements and attributes only': [
        { elem: 'div', escaped: false },
        { elem: ['a', { name: 'hello' }], escaped: false },
        { elem: ['a', { href: 'https://example.com' }], escaped: false },
    ],
};

for (const desc of Object.keys(SANITIZE_OK)) {
    const tags = SANITIZE_OK[desc];
    test(desc, t => {
        const state = new SanitizeState();
        for (const { elem, escaped } of tags) {
            let input;
            if (typeof elem === 'string') {
                input = `<${elem}>`;
            } else {
                const attrs = Object.keys(elem[1])
                    .map(key => `${key}="${elem[1][key]}"`)
                    .join(' ');
                input = `<${elem[0]} ${attrs}>`;
            }
            let want = input;
            if (escaped) {
                want = escape(want);
            }
            const have = state.sanitize(input);
            t.is(want, have);
        }
        for (const { elem, escaped } of tags.reverse()) {
            const input = `</${typeof elem === 'string' ? elem : elem[0]}>`;
            let want = input;
            if (escaped) {
                want = escape(want);
            }
            const have = state.sanitize(input);
            t.is(want, have);
        }
    });
}
