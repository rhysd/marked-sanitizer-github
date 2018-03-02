import marked = require('marked');
import here from 'heredocument';
import SanitizeState from '../index';
import test from 'ava';

const TESTCASES_OK = {
    'small input without tag': {
        input: here`
            Title
            =====

            - hello
              - world
        `,
        output: here`
            <h1 id="title">Title</h1>
            <ul>
            <li>hello<ul>
            <li>world</li>
            </ul>
            </li>
            </ul>
        `,
    },
} as {
    [desc: string]: {
        input: string;
        output: string;
    };
};

for (const desc of Object.keys(TESTCASES_OK)) {
    const testcase = TESTCASES_OK[desc];
    test(`sanitizes ${desc}`, t => {
        const state = new SanitizeState();
        const have = marked(testcase.input, {
            sanitize: true,
            sanitizer: state.getSanitizer(),
        });
        const want = testcase.output;
        t.is(want, have);
        t.true(!state.isInUse());
    });
}
