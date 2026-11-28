import assert from 'node:assert/strict';
import {createSlot,slotHit,tickSlot,slotResult} from '../js/pinball-slot.js?v=11440';
const slot=createSlot(),s={score:0,fever:0,extra:[],ready:false,over:false};for(let i=0;i<5;i++)slotHit(slot);assert.equal(slot.left,1.5);assert(!tickSlot(slot,s,1,()=>0));assert(tickSlot(slot,s,.5,()=>0));assert.equal(s.score,10000);assert.equal(s.fever,30);assert.equal(s.extra.length,2);assert(!tickSlot(slot,s,1));assert.equal(slotResult(['🍒','🍒','7']).points,300);assert.equal(slotResult(['🌈','🌈','🌈']).multi,true);
