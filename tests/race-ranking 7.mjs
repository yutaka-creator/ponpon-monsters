import assert from 'node:assert/strict';import {createRace,stepRace,rank,lap,standings} from '../js/race-physics.js?v=114911';
for(const level of ['easy','normal','hard'])for(let c=0;c<10;c++){const s=createRace(3,c,level);for(let i=0;i<20000&&!s.done;i++)stepRace(s,.02,{});assert(s.done);assert(rank(s)>1);assert.equal(lap(s),3);assert.equal(new Set(standings(s)).size,8);}
const s=createRace();s.cars[0].distance=s.course.length;assert.equal(lap(s),2);s.cars[0].finish=10;s.cars[1].finish=9;s.cars[2].finish=11;assert.equal(rank(s),2);console.log('ranking OK');
