import test from 'ava';
import { escape } from 'he';
import SanitizeState from '../index';

test('not closing tags', t => {
    const state = new SanitizeState();
    state.sanitize('<div>');
    state.sanitize('<span>');
    t.is(state.sanitize('</div>'), escape('</div>'));
    t.is(state.sanitize('<div>'), escape('<div>'));
    t.is(state.sanitize('</div>'), escape('</div>'));
    t.true(state.isBroken());
});

test('broken open/close pair', t => {
    const state = new SanitizeState();
    state.sanitize('<div>');
    t.is(state.sanitize('</span>'), escape('</span>'));
    t.true(state.isBroken());
});

test('broken open tag', t => {
    const state = new SanitizeState();
    t.is(state.sanitize('<div'), escape('<div'));
    t.true(state.isBroken());
});

test('broken close tag', t => {
    const state = new SanitizeState();
    state.sanitize('<div>');
    t.is(state.sanitize('</div'), escape('</div'));
    t.true(state.isBroken());
});
