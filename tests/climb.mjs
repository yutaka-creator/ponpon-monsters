import assert from 'node:assert/strict';import {MAX_STAGE,stageData,newRun,step} from '../js/climb-model.js?v=114910';assert.equal(MAX_STAGE,50);for(let n=1;n<=MAX_STAGE;n++){const s=newRun(n),d=stageData(n);for(let f=0;f<4;f++){s.x=d.ladders[f];for(let i=0;i<50;i++){s.pots=[];step(s,{up:true},.02);}assert.equal(s.floor,f+1);}s.x=290;for(let j=0;j<150;j++){s.pots=[];step(s,{jump:j%45===0},.02);}assert(s.done);}const s=newRun(1);step(s,{jump:true},.02);assert(s.y<365);console.log('climb passed');

assert.equal(newRun(1,8).hp,5);assert.equal(newRun(1,4).guard,1);assert.equal(newRun(5).boss,3);
