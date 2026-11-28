import assert from 'node:assert/strict';
import {createSlot,slotHit,tickSlot} from '../js/pinball-slot.js?v=114911';
const a=createSlot(),s={score:0,fever:0,extra:[],ready:false,over:false};for(let i=0;i<5;i++)slotHit(a);tickSlot(a,s,.6,()=>0);assert.equal(a.locked,1);tickSlot(a,s,.5,()=>0);assert.equal(a.locked,2);tickSlot(a,s,.5,()=>0);assert.equal(a.jackpots,1);assert.equal(a.show,4);assert.equal(s.score,10000);tickSlot(a,s,1);assert.equal(a.show,3);assert.equal(s.score,10000);
