import assert from 'node:assert/strict';
import { add, divide } from './calc.js';

assert.equal(add(2, 3), 5);
assert.equal(divide(6, 3), 2);
assert.throws(() => divide(1, 0), RangeError);
console.log('ok');
