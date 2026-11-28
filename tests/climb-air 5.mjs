import assert from 'node:assert/strict';import {newRun,step,stageData} from '../js/climb-model.js?v=11460';
for(let n=1;n<=50;n++){let s=newRun(n);s.x=stageData(n).ladders[0];step(s,{jump:true},.02);assert(s.y<365);step(s,{up:true},.02);assert(s.climbing);assert.equal(s.vy,0);for(let i=0;i<50;i++)step(s,{},.02);assert.equal(s.floor,1);assert.equal(s.y,295);}
let s=newRun(1);step(s,{jump:true},.02);step(s,{up:true},.02);assert(!s.climbing);
