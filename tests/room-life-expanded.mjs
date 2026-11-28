import assert from 'node:assert/strict';
import {chooseLifeActivity} from '../js/room-activities.js?v=114911';
import {appendMemory} from '../js/room-memories.js?v=114911';
const a={id:4},b={id:3};const s={actors:[a,b],decor:[{id:'f3'}]};
const samples=Array.from({length:100},(_,i)=>chooseLifeActivity(s,a,12,()=>i/100));assert(samples.some(x=>x.label==='一緒にごはん'&&x.other===b));assert(!Array.from({length:100},(_,i)=>chooseLifeActivity({...s,actors:[a]},a,12,()=>i/100)).some(x=>x.pair));assert.equal(appendMemory(Array(30).fill({}),{text:'new'}) .length,30);assert.equal(appendMemory([],{text:'new'})[0].text,'new');console.log('expanded life OK');
