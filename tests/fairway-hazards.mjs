import assert from 'node:assert/strict';
import {courses} from '../js/fairway-courses.js?v=11440';
import {setCourse,lie,ground,tick} from '../js/fairway-physics.js?v=11440';
for(const c of courses){setCourse(c.id-1);assert.equal(lie(0,0),'fairway');assert.equal(lie(c.x,-c.length),'green');for(const w of c.hazards){assert.equal(lie(w.x,w.z),'water');assert.equal(tick({x:w.x,z:w.z,y:ground(w.x,w.z)+.38,vx:0,vy:0,vz:0,air:false},.01),'out');}}
setCourse(8);const b={x:0,z:-44.7,y:ground(0,-48)+2,vx:0,vy:0,vz:-10,air:true};tick(b,.02);assert.ok(b.vz>0);console.log('hazards OK');
