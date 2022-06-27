import sinon from 'sinon';

import $debounce from '../src/debounce';

const delay = (wait) => new Promise((resolve) => {
  setTimeout(resolve, wait);
});

QUnit.module('$debounce');

QUnit.test('should call immediately', function shouldCallImmediately(assert) {
  assert.expect(1);
  const cb = sinon.fake();
  const debouncedCb = $debounce(cb, 3000, true);

  debouncedCb();

  assert.true(cb.called);
});

QUnit.test('should call after given time', async function shouldCallAfterGivenTime(assert) {
  assert.expect(2);

  const done = assert.async();
  const cb = sinon.fake();
  const debouncedCb = $debounce(cb, 500);

  debouncedCb();

  assert.false(cb.called);

  await delay(500);

  assert.true(cb.called);
  done();
});

QUnit.test('should throw error if executor is not a function', function shouldThrowError(assert) {
  assert.expect(1);
  assert.throws(() => $debounce());
});

QUnit.test('should call once in the given interval', async function shouldCallOnce(assert) {
  assert.expect(1);

  const done = assert.async();
  const cb = sinon.fake();
  const debouncedCb = $debounce(cb, 500);

  debouncedCb();
  debouncedCb();
  debouncedCb();

  await delay(5000);

  assert.true(cb.calledOnce);
  done();
});
