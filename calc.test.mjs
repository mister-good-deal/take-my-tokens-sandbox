import assert from 'node:assert/strict';
import { add, subtract } from './calc.js';

assert.equal(add(2, 3), 5);
assert.equal(subtract(5, 3), 2);
console.log('ok');
