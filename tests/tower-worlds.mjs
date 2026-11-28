import assert from 'node:assert/strict';
import {worldAt,WORLDS,paintWorld,WORLD_HEIGHTS,nextWorldHeight} from '../js/tower-worlds.js?v=114924';
for(let i=0;i<WORLDS.length;i++){assert.equal(worldAt(WORLD_HEIGHTS[i]),WORLDS[i]);if(i+1<WORLDS.length){assert.equal(worldAt(WORLD_HEIGHTS[i+1]-1),WORLDS[i]);assert.equal(nextWorldHeight(WORLD_HEIGHTS[i]),WORLD_HEIGHTS[i+1]);}}assert.equal(worldAt(9999),WORLDS.at(-1));assert.equal(nextWorldHeight(3000),null);assert.equal(worldAt(-1),WORLDS[0]);
const g=new Proxy({createLinearGradient:()=>({addColorStop(){}})},{get:(o,k)=>o[k]??(()=>{})});for(const w of WORLDS)paintWorld(g,320,520,123,w);assert.equal(g.globalAlpha,1);console.log('tower worlds OK');
