import assert from 'node:assert/strict';
import {courses} from '../js/fairway-courses.js?v=1112';
import {meterValue,impactResult} from '../js/fairway-assist.js?v=1112';
for(const d of ['easy','normal','hard'])assert.equal(courses.filter(c=>c.difficulty===d).length,12);
assert.equal(new Set(courses.map(c=>c.id)).size,36);
assert(meterValue(1,1000,'fairway','easy')<meterValue(1,1000,'fairway','hard'));
assert.equal(impactResult(63,'fairway',{},'easy').label,'PERFECT');assert.equal(impactResult(63,'fairway',{},'hard').label,'GOOD');
