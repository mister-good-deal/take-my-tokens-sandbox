import assert from 'node:assert/strict';
import { add, square } from './calc.js';

assert.equal(add(2, 3), 5);
assert.equal(square(3), 9);
assert.equal(square(-4), 16);
console.log('ok');
