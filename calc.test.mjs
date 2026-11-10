import assert from 'node:assert/strict';
import { add, max } from './calc.js';

assert.equal(add(2, 3), 5);
assert.equal(max(2, 3), 3);
assert.equal(max(3, 2), 3);
console.log('ok');
