import assert from 'node:assert/strict';
import {characterSettings} from '../js/character-settings.js?v=114911';
import {profiles} from '../js/profiles.js?v=114911';
assert.equal(characterSettings.length,profiles.length);assert.equal(profiles.length,50);
for(const c of characterSettings)for(const k of ['pronoun','values','dislikes','habit','campaign'])assert(c[k].trim());
for(const k of ['values','habit','campaign'])assert.equal(new Set(characterSettings.map(c=>c[k])).size,50);
console.log('50 character settings passed');
