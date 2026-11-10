import assert from 'node:assert/strict';
import { add, modulo } from './calc.js';

assert.equal(add(2, 3), 5);
assert.equal(modulo(7, 3), 1);
console.log('ok');
