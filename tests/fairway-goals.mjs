import assert from 'node:assert/strict';
import {golfGoals} from '../js/fairway-goals.js?v=11460';
import {achievements} from '../js/fairway-rewards.js?v=11460';
const g=golfGoals({});assert.equal(g.length,50);assert.equal(new Set(g.map(x=>x.id)).size,50);assert.ok(g.every(x=>!x.done));const best=Object.fromEntries(Array.from({length:36},(_,i)=>[i+1,1]));assert.ok(achievements({best}).golf_complete_hard);assert.equal(golfGoals({best}).filter(x=>x.done).length,37);console.log('golf goals passed');
