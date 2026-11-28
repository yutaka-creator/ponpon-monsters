import assert from 'node:assert/strict';import {pinballLine} from '../js/pinball-talk.js?v=114910';import {createRace,stepRace} from '../js/race-physics.js?v=114910';
for(const e of ['start','combo','fever','miss','best'])assert.equal(new Set(Array.from({length:10},(_,i)=>pinballLine(i,e))).size,10);
const a=createRace(),b=createRace();for(let i=0;i<100;i++){stepRace(a,.02);stepRace(b,.02,{accel:true});}assert.equal(a.cars[0].speed,b.cars[0].speed);console.log('talk and auto acceleration OK');
