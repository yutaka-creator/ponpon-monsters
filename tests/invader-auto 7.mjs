import assert from 'node:assert/strict';
import {create,step} from '../js/invader-physics.js?v=114911';
import {shoot,collect,baseShot} from '../js/invader-items.js?v=114911';
let s=create();step(s,.01,{});assert.equal(s.shots.length,0);step(s,.01,{autoFire:true});assert.equal(s.shots.length,1);s=create();step(s,.01,{fire:true});assert.equal(s.shots.length,1);assert.equal(baseShot(3),null);s.wave=4;s.shots=[];shoot(s);assert.equal(s.shots.length,3);s.wave=7;s.shots=[];shoot(s);assert.equal(s.shots[0].kind,'laser');collect(s,'giant');s.shots=[];shoot(s);assert.equal(s.shots[0].kind,'giant');
