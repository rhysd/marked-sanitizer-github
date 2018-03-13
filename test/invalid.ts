import test from 'ava';
import sinon = require('sinon');
import { escape } from 'he';
import SanitizeState from '../index';

test('not closing tags', t => {
    const state = new SanitizeState();
    const spy = sinon.spy();
    state.onDetectedBroken = spy;
    state.sanitize('<strong>');
    state.sanitize('<pre>');
    t.is(state.sanitize('</strong>'), escape('</strong>'));
    t.is(state.sanitize('<strong>'), escape('<strong>'));
    t.is(state.sanitize('</strong>'), escape('</strong>'));
    t.true(state.isBroken());

    t.true(spy.calledOnce);
    const args = spy.getCall(0).args;
    t.true(args[0].includes('Open/Closing HTML tag mismatch'));
    t.is(args[1], '</strong>');
});

test('broken open/close pair', t => {
    const state = new SanitizeState();
    const spy = sinon.spy();
    state.onDetectedBroken = spy;
    state.sanitize('<strong>');
    t.is(state.sanitize('</pre>'), escape('</pre>'));
    t.true(state.isBroken());

    t.true(spy.calledOnce);
    const args = spy.getCall(0).args;
    t.true(args[0].includes('Open/Closing HTML tag mismatch'));
    t.is(args[1], '</pre>');
});

test('broken open tag', t => {
    const state = new SanitizeState();
    const spy = sinon.spy();
    state.onDetectedBroken = spy;
    t.is(state.sanitize('<strong'), escape('<strong'));
    t.true(state.isBroken());

    t.true(spy.calledOnce);
    const args = spy.getCall(0).args;
    t.true(args[0].includes('Failed to parse'));
    t.is(args[1], '<strong');
});

test('broken close tag', t => {
    const state = new SanitizeState();
    const spy = sinon.spy();
    state.onDetectedBroken = spy;
    state.sanitize('<strong>');
    t.is(state.sanitize('</strong'), escape('</strong'));
    t.true(state.isBroken());

    t.true(spy.calledOnce);
    const args = spy.getCall(0).args;
    t.true(args[0].includes('Closing HTML tag is broken'));
    t.is(args[1], '</strong');
});

test('extra close tag', t => {
    const state = new SanitizeState();
    const spy = sinon.spy();
    state.onDetectedBroken = spy;
    state.sanitize('<strong>');
    state.sanitize('</strong>');
    t.is(state.sanitize('</strong>'), escape('</strong>'));
    t.true(state.isBroken());

    t.true(spy.calledOnce);
    const args = spy.getCall(0).args;
    t.true(args[0].includes('Extra closing HTML tags'));
    t.is(args[1], '</strong>');
});

test('all input after broken is escaped', t => {
    const state = new SanitizeState();
    const spy = sinon.spy();
    state.onDetectedBroken = spy;
    state.sanitize('<strong>');
    t.is(state.sanitize('</pre>'), escape('</pre>'));
    t.true(state.isBroken());

    // Even correct input is escaped
    t.is(state.sanitize('<strong>'), escape('<strong>'));
    t.is(state.sanitize('</strong>'), escape('</strong>'));

    // Do not broken twice
    t.is(state.sanitize('<strong>'), escape('<strong>'));
    t.is(state.sanitize('</pre>'), escape('</pre>'));

    // Report only first broken reason
    t.true(spy.calledOnce);
});
