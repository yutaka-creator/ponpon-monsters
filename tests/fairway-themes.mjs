import assert from 'node:assert/strict';
import {courses} from '../js/fairway-courses.js?v=114924';
import {themeFor,surfaceColor} from '../js/fairway-themes.js?v=114924';
assert.equal(courses.length,36);
for(const id of [13,32])assert.equal(courses[id-1].ice,true);
for(const id of [12,16,25,31,35])assert.equal(courses[id-1].gravity,11);
for(const id of [7,13,12,11]){const c=courses[id-1];assert.ok(c.hint.includes(themeFor(id).label));assert.notEqual(surfaceColor(c,'fairway',0),surfaceColor(c,'fairway',6));assert.equal(surfaceColor(c,'water',0),0x55a9d4);}
assert.equal(themeFor(1),null);assert.equal(courses[0].gravity,18);console.log('themes OK');
