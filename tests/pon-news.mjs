import assert from 'node:assert/strict';
import {edition,publish,markRead,articles} from '../js/pon-news-model.js';
const day='2026-11-28';let s=publish({},day);assert.equal(s.days[0].ids.length,3);assert.equal(new Set(s.days[0].ids).size,3);assert.deepEqual(publish(s,day),s);assert.notDeepEqual(edition(day),edition('2026-11-29'));const id=s.days[0].ids[0];s=markRead(s,day,id);assert.deepEqual(markRead(s,day,id),s);assert.equal(publish(s,'2026-11-29').days.length,2);assert.equal(articles.length,8);console.log('news tests passed');
