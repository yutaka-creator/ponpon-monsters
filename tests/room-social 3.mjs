import assert from 'node:assert/strict';
import {chooseGathering,gatherings} from '../js/room-social.js?v=11401';
const actors=Array.from({length:50},(_,id)=>({id,x:50,y:60}));
assert.equal(chooseGathering({actors:[actors[0]],decor:[]},actors[0]),null);
for(const a of actors){for(const g of gatherings){const decor=g.furniture.map(id=>({id,x:95,y:90}));const s={actors,decor};const before=JSON.stringify(s);const v=chooseGathering(s,a,()=>0);assert.equal(v.members.length,3);assert.equal(new Set(v.members.map(x=>x.id)).size,3);assert(v.lines.every(Boolean));assert(v.positions.every(p=>p.x>=8&&p.x<=92&&p.y>=45&&p.y<=88));assert.equal(JSON.stringify(s),before);}}
assert.equal(chooseGathering({actors:actors.slice(0,2),decor:[]},actors[0],()=>0).members.length,2);
console.log('room social OK');
