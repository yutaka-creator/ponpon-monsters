import assert from 'node:assert/strict';
import {STAGES} from '../js/adventure-stages.js?v=11460';
import {create,step} from '../js/adventure-physics.js?v=11460';
assert.equal(new Set(STAGES.map(s=>s.id)).size,50);
for(let i=11;i<=50;i++){const s=create(3,i);assert(s.extraPlatforms.length===4);assert(s.enemies.length>=6);for(let j=0;j<3;j++)assert(s.platforms[j+1].x-s.platforms[j].x-s.platforms[j].w<=120);step(s,.01,{jump:true});assert(Number.isFinite(s.y));}
const m=new Map();globalThis.localStorage={getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,v)};globalThis.document={getElementById:()=>null,dispatchEvent(){}};const {recordAdventure,loadRecords}=await import('../js/adventure-records.js?v=11460');for(let id=1;id<=50;id++)recordAdventure({stage:{id},won:true,secret:true});assert.equal(loadRecords().cleared.length,50);assert.equal(loadRecords().secrets.length,50);
