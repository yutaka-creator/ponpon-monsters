import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {courses,clearOfCup} from '../js/fairway-courses.js?v=114924';
assert.equal(courses.length,36);
for(const c of courses){assert(!clearOfCup(c,c.x,-c.length,1));assert(clearOfCup(c,c.x+10,-c.length,1));for(const o of c.obstacles)assert(clearOfCup(c,o.x,o.z,o.r));}
const src=readFileSync('js/fairway.js','utf8');assert(src.includes('if(!card.hidden){card.hidden=true;return;}scorecard();card.hidden=false;'));
assert(readFileSync('js/fairway-scenery.js','utf8').includes('clearOfCup(course,x,z,1)'));
console.log('36 course clearance and scorecard wiring OK');
