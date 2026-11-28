import assert from 'node:assert/strict';
import {rackets,racketFor} from '../js/tower-rackets.js?v=11460';
assert.equal(new Set(rackets.map(r=>r.id)).size,6);
for(const r of rackets){assert.equal(racketFor(r.id,r.height),r);if(r.height)assert.equal(racketFor(r.id,r.height-1).id,'classic');}
assert.equal(racketFor('invalid',9999).id,'classic');
console.log('racket unlock tests passed');
