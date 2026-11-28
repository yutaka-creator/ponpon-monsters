import assert from 'node:assert/strict';
import {questMark,greeting,closestResident,distance} from '../js/town-chat.js?v=114910';
import {cleanEvents,advance,requests} from '../js/town-events.js?v=114910';
import {residents} from '../js/town-data.js?v=114910';
for(const q of requests){let s=cleanEvents();assert.equal(questMark(q.resident,s,[]),'！');s=advance(s,q.resident,[]).next;assert.equal(questMark(q.resident,s,[]),'…');assert.equal(questMark(q.resident,s,[q.item]),'！');s=advance(s,q.resident,[q.item]).next;assert.equal(questMark(q.resident,s,[q.item]),'');assert.equal(new Set(['morning','day','evening','night'].map(p=>greeting(q.resident,p))).size,4);}
assert.equal(closestResident(3,4,residents).id,4);assert.equal(closestResident(0,0,residents),undefined);assert.equal(distance(3,4,residents[0]),1);console.log('town chat OK');
