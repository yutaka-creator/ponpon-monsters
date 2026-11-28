import assert from 'node:assert/strict';
import {specialFor,shotAbility} from '../js/fairway-special.js?v=1112';
assert.equal(new Set(Array.from({length:10},(_,i)=>specialFor(i).name)).size,10);
assert.equal(shotAbility({wind:.25},3,true).wind,0);
assert.equal(shotAbility({speed:1.2},4,false).speed,1.2);
assert.equal(shotAbility({speed:1.2},4,true).speed,1.5);
assert.equal(shotAbility({},7,true).bounce,0);
