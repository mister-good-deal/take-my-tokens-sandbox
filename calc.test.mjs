import assert from 'node:assert/strict';
import { abs, add } from './calc.js';

assert.equal(add(2, 3), 5);
assert.equal(abs(-4), 4);
assert.equal(abs(4), 4);
assert.equal(abs(0), 0);
console.log('ok');
