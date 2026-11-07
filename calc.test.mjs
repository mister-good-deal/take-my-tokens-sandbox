import assert from 'node:assert/strict';
import { add, min } from './calc.js';

assert.equal(add(2, 3), 5);
assert.equal(min(2, 3), 2);
assert.equal(min(3, 2), 2);
console.log('ok');
