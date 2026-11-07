import assert from 'node:assert/strict';
import { add, multiply } from './calc.js';

assert.equal(add(2, 3), 5);
assert.equal(multiply(2, 3), 6);
console.log('ok');
