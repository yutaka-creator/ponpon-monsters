import assert from 'node:assert/strict';
import {powerFor,POWERS} from '../js/fairway-powers.js';
import {shoot,tick,ground} from '../js/fairway-physics.js';
import {impactResult,aimStep} from '../js/fairway-assist.js';
const ball=()=>({x:0,z:0,y:ground(0,0)+.38});
assert.equal(Object.keys(POWERS).length,12);
let a=ball(),b=ball();shoot(a,0,100,'driver',4);shoot(b,0,100,'driver');assert.ok(a.vz<b.vz);shoot(a,0,100,'driver',2);assert.ok(a.vy>b.vy);shoot(a,0,100,'driver',3);tick(a,.01);tick(b,.01);assert.ok(a.vx<b.vx);assert.equal(impactResult(63,'fairway',powerFor(0)).label,'PERFECT');assert.ok(impactResult(80,'fairway',powerFor(1)).offset<impactResult(80,'fairway').offset);assert.equal(aimStep('fairway',powerFor(6)),1.5);assert.ok(impactResult(80,'green',powerFor(9)).offset<impactResult(80,'green').offset);console.log('powers OK');
