import assert from 'node:assert/strict';
import {comeback} from '../js/race-comeback.js?v=114924';
import {createRace,stepRace} from '../js/race-physics.js?v=114924';
assert.equal(comeback(0,1,0),0);assert.equal(comeback(8,8,0),0);assert(comeback(90,8,.8)>comeback(90,8,.2));assert(comeback(900,8,1)<=9);assert(comeback(90,8,.2)>comeback(90,3,.2));
const s=createRace();s.cars[0].distance=100;s.cars.slice(1).forEach(c=>c.distance=200);stepRace(s,.02);assert(s.cars[0].comeback>0);assert(s.cars.slice(1).every(c=>c.comeback===0));console.log('race comeback OK');
