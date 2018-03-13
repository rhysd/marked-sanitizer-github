import test from 'ava';
import SanitizeState from '../index';

test('reset() does nothing when it is not in use', t => {
    const state = new SanitizeState();
    t.false(state.isInUse());
    state.reset();
    t.false(state.isInUse());
    state.sanitize('<strong>');
    state.sanitize('</strong>');
    t.false(state.isInUse());
});

test('reset() resets state of sanitization when it is in use', t => {
    const state = new SanitizeState();
    state.sanitize('<strong>');
    t.true(state.isInUse());
    state.reset();
    t.false(state.isInUse());
    state.sanitize('<strong>');
    state.sanitize('</strong>');
    t.false(state.isInUse());
});

test('reset() resets broken state of sanitization', t => {
    const state = new SanitizeState();
    state.sanitize('<strong>');
    state.sanitize('</pre>');
    t.true(state.isInUse());
    t.true(state.isBroken());
    state.reset();
    t.false(state.isInUse());
    state.sanitize('<strong>');
    state.sanitize('</strong>');
    t.false(state.isInUse());
});
