import assert from 'node:assert/strict';
import {create,step,displayedFlippers} from '../js/pinball-physics.js?v=11440';
for(let table=0;table<10;table++){
 let s=create(table);Object.assign(s,{ready:false,x:100,y:402,vx:0,vy:900});step(s,{},.04);assert(s.vy<0,`flipper ${table}`);
 s=create(table);Object.assign(s,{ready:false,x:290,y:220,vx:-900,vy:0});step(s,{},.04);assert(s.x>=290||s.vx>0,`rail ${table}`);
}
let s=create();step(s,{left:true},1/240);let a=displayedFlippers(s,{left:true})[0];assert(a[3]>395);for(let i=0;i<15;i++)step(s,{left:true},1/240);assert(displayedFlippers(s,{left:true})[0][3]<395);
console.log('high speed collision and animated flipper checks passed');
