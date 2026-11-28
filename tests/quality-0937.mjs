import assert from 'node:assert/strict';
import {createRace,stepRace} from '../js/race-physics.js?v=114910';
import {courses} from '../js/fairway-courses.js?v=114910';
import {setCourse,ground} from '../js/fairway-physics.js?v=114910';
const s=createRace();for(let i=0;i<100;i++)stepRace(s,.02,{});assert(s.cars[0].distance>0);const speed=s.cars[0].speed;stepRace(s,.05,{brake:true});assert(s.cars[0].speed<speed);assert.equal(new Set(courses.slice(0,18).map(c=>c.sky)).size,18);for(let i=0;i<18;i++){setCourse(i);assert(Number.isFinite(ground(0,-20)));}console.log('quality OK');
