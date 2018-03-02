import marked = require('marked');
import SanitizeState from '../index';

const TESTCASES_OK = {
    'small input without tag': {
        input: `
            Title
            =====

            - hello
              - world
        `,
        output: 'foo',
    },
} as {
    [desc: string]: {
        input: string;
        output: string;
    };
};

describe('sanitizer with marked', () => {
    for (const desc of Object.keys(TESTCASES_OK)) {
        const testcase = TESTCASES_OK[desc];
        it(`sanitizes ${desc}`, () => {
            const state = new SanitizeState();
            const have = marked(testcase.input, {
                sanitize: true,
                sanitizer: state.getSanitizer(),
            });
            const want = testcase.output;
            expect(have).toBe(want);
        });
    }
});
