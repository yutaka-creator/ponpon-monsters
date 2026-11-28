import assert from 'node:assert/strict';
import {dailyEvents,dailyEvent,attend,cleanDaily} from '../js/town-daily.js?v=11401';
import {cleanEvents} from '../js/town-events.js?v=11401';
assert.equal(new Set(Array.from({length:6},(_,i)=>dailyEvent(new Date(2026,10,28+i))[0])).size,6);
assert.equal(dailyEvent(new Date(2026,10,28,0))[0],dailyEvent(new Date(2026,10,28,23))[0]);
assert.deepEqual(attend(['curry'],'curry'),['curry']);
assert.deepEqual(cleanDaily(['bad','hunt','hunt']),['hunt']);
assert.deepEqual(cleanEvents({memories:['park'],daily:['stars']}).daily,['stars']);
assert.deepEqual(cleanEvents({memories:['park']}).daily,[]);
