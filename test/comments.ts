import test from 'ava';
import { escape } from 'he';
import SanitizeState from '..';

const TEST_CASES = {
    comment: [['<!-- this is comment -->', true]],
    comments: [['<!-- this -->', true], ['<!-- is -->', true], ['<!-- comment -->', true]],
    'comment in element': [
        ['<div>', false],
        ['<!-- comment -->', true],
        ['</div>', false],
        ['<style>', false],
        ['<!-- comment -->', true],
        ['</style>', false],
    ],
} as { [desc: string]: [string, boolean][] };

for (const desc of Object.keys(TEST_CASES)) {
    const testcase = TEST_CASES[desc];
    test(desc, t => {
        const state = new SanitizeState();
        for (const [tag, removed] of testcase) {
            const have = state.sanitize(tag);
            if (removed) {
                t.is('', have);
            } else {
                t.true(have === tag || have === escape(tag));
            }
        }
        t.false(state.isBroken());
        t.false(state.isInUse());
    });
}
