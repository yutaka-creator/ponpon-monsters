import assert from 'node:assert/strict';
import {recommendClub,clubShot} from '../js/fairway-clubs.js?v=1112';
import {shoot,ground} from '../js/fairway-physics.js?v=1112';
assert.equal(recommendClub(82,'fairway'),'driver');assert.equal(recommendClub(30,'fairway'),'iron');assert.equal(recommendClub(12,'sand'),'wedge');assert.equal(recommendClub(5,'green'),'putter');assert.ok(clubShot('wedge','sand').speed>clubShot('wedge','rough').speed);let b={x:0,z:0,y:ground(0,0)+.38};shoot(b,0,100,'putter');assert.equal(b.air,false);assert.equal(b.vy,0);shoot(b,0,100,'driver');assert.equal(b.air,true);assert.equal(b.vz,-28);console.log('clubs OK');
