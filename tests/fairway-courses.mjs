import assert from 'node:assert/strict';
import {courses} from '../js/fairway-courses.js?v=114911';
import {setCourse,CUP,lie,ground,wind,tick} from '../js/fairway-physics.js?v=114911';
assert.equal(courses.length,36);assert.equal(courses.slice(0,18).reduce((s,c)=>s+c.par,0),71);
for(const [i,c] of courses.entries()){setCourse(i);assert.equal(CUP.z,-c.length);assert.equal(CUP.x,c.x);assert.equal(lie(CUP.x,CUP.z),'green');assert.equal(wind.x,c.wx);assert.ok(Number.isFinite(ground(0,0)));}
setCourse(4);assert.equal(lie(0,-30),'water');assert.equal(tick({x:0,z:-30,y:0,vx:0,vy:0,vz:0,air:false},.01),'out');console.log('36 courses OK');
