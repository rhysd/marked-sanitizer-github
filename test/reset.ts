import test from 'ava';
import SanitizeState from '../index';

test('reset() does nothing when it is not in use', t => {
    const state = new SanitizeState();
    t.false(state.isInUse());
    state.reset();
    t.false(state.isInUse());
    state.sanitize('<div>');
    state.sanitize('</div>');
    t.false(state.isInUse());
});

test('reset() resets state of sanitization when it is in use', t => {
    const state = new SanitizeState();
    state.sanitize('<div>');
    t.true(state.isInUse());
    state.reset();
    t.false(state.isInUse());
    state.sanitize('<div>');
    state.sanitize('</div>');
    t.false(state.isInUse());
});
