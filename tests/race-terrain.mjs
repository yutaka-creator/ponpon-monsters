import assert from 'node:assert/strict';
import {COURSES,trackPoint} from '../js/race-courses.js?v=114910';
import {elevation,slope} from '../js/race-terrain.js?v=114910';
for(const c of COURSES){assert(Math.abs(elevation(0,c)-elevation(c.length,c))<1e-8);let min=Infinity,max=-Infinity;for(let i=0;i<720;i++){const d=c.length*i/720,p=trackPoint(d,0,c);assert(Number.isFinite(p.pitch));assert.equal(p.y,elevation(d,c));assert(Math.abs(slope(d,c))<1);min=Math.min(min,p.y);max=Math.max(max,p.y);}assert(max-min>1);}
console.log('terrain passed');
