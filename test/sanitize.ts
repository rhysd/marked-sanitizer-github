import test, { GenericTestContext, Context } from 'ava';
import { escape } from 'he';
import SanitizeState from '../index';

interface ElemTest {
    elem: string | [string, { [name: string]: string }];
    escaped: boolean;
    children?: ElemTest | ElemTest[];
}

const SANITIZE_OK: {
    [desc: string]: ElemTest[];
} = {
    'allowed elements and attributes only (sequential)': [
        { elem: 'div', escaped: false },
        { elem: ['a', { name: 'hello' }], escaped: false },
        { elem: ['a', { href: 'https://example.com' }], escaped: false },
        { elem: ['a', { href: 'foo/bar.html' }], escaped: false },
    ],

    'allowed elements and attributes only (nested)': [
        {
            elem: 'div',
            escaped: false,
            children: {
                elem: ['a', { name: 'hello' }],
                escaped: false,
                children: { elem: ['a', { href: 'https://example.com' }], escaped: false },
            },
        },
    ],

    'sanitized elements only (sequential)': [
        { elem: 'style', escaped: true },
        { elem: ['script', { src: 'https://example.com/foo.js' }], escaped: true },
        { elem: ['a', { onclick: 'console.log("hey")' }], escaped: true },
    ],
};

function test_escape_element(t: GenericTestContext<Context<any>>, state: SanitizeState, testcase: ElemTest): void {
    const { elem, escaped } = testcase;

    {
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

    if (testcase.children !== undefined) {
        const children = Array.isArray(testcase.children) ? testcase.children : [testcase.children];
        for (const child of children) {
            test_escape_element(t, state, child);
        }
    }

    {
        const input = `</${typeof elem === 'string' ? elem : elem[0]}>`;
        let want = input;
        if (escaped) {
            want = escape(want);
        }
        const have = state.sanitize(input);
        t.is(want, have);
    }
}

for (const desc of Object.keys(SANITIZE_OK)) {
    const tags = SANITIZE_OK[desc];
    test(desc, t => {
        const state = new SanitizeState();
        for (const tag of tags) {
            test_escape_element(t, state, tag);
        }
        t.false(state.isInUse());
    });
}
