import assert from 'node:assert/strict';
import {exhibits} from '../js/fairway-museum.js?v=114924';
const a=exhibits({best:{1:3},cups:{'easy:3':2}});assert.equal(a.cups.length,9);assert.equal(a.clubs.length,6);assert.equal(a.courses.length,36);assert.equal(a.goals.length,50);assert.equal(a.cups.filter(x=>x.done).length,1);assert.equal(a.clubs.filter(x=>x.done).length,2);assert.equal(a.courses.filter(x=>x.done).length,1);console.log('museum OK');
