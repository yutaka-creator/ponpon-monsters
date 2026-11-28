import assert from 'node:assert/strict';
import {create,hit,feverMultiplier,step} from '../js/pinball-physics.js?v=114911';
import {slotHit,tickSlot} from '../js/pinball-slot.js?v=114911';
const s=create();s.ready=false;assert.equal(feverMultiplier(s),1);s.fever=10;assert.equal(feverMultiplier(s),2);for(let i=0;i<5;i++)slotHit(s.slot);tickSlot(s.slot,s,1.5,()=>0);assert.equal(feverMultiplier(s),3);assert.equal(s.extra.length,2);const before=s.score;hit(s,0);assert.equal(s.score-before,300);tickSlot(s.slot,s,30);assert.equal(feverMultiplier(s),2);s.fever=0;assert.equal(feverMultiplier(s),1);s.slot.jackpotTime=10;s.ready=true;step(s,{},.01);assert.equal(s.slot.jackpotTime,0);
