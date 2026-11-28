import assert from 'node:assert/strict';
import {routines,personalActivity,periodAt} from '../js/room-personality.js?v=11401';
import {items} from '../js/furniture.js?v=11401';
assert.equal(routines.length,50);assert.equal(new Set(routines.map(r=>r.label)).size,50);
for(let id=0;id<50;id++){const r=routines[id],actor={id};for(const f of r.furniture)assert(items.some(x=>x.id===f),f);const decor=[{id:r.furniture[0],x:40,y:60}];for(let h=0;h<24;h++){assert.equal(personalActivity({decor},actor,h,()=>0).target,decor[0]);assert.equal(personalActivity({decor:[]},actor,h,()=>0).target,undefined);assert.equal(personalActivity({decor},actor,h,()=>.99),null);assert.equal(!!personalActivity({decor},actor,h,()=>.6),periodAt(h)===r.period);}}
console.log('50 personality routines OK');
