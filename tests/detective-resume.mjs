import assert from 'node:assert/strict';
import {cases,nextUnsolvedCase} from '../js/detective-model.js';
assert.equal(nextUnsolvedCase(()=>false),cases[0]);
assert.equal(nextUnsolvedCase(id=>id===cases[0].id),cases[1]);
assert.equal(nextUnsolvedCase(id=>id!==cases[12].id),cases[12]);
assert.equal(nextUnsolvedCase(()=>true),null);
