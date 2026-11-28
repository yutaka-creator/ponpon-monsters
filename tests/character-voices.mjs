import assert from 'node:assert/strict';
import {voices,voiceFor} from '../js/character-voices.js?v=114924';
assert.equal(voices.length,50);
for(let id=0;id<50;id++){assert.equal(voices[id].length,8);assert.equal(new Set(voices[id]).size,8);let prev;for(let i=0;i<100;i++){const s=voiceFor(id,{time:['朝','昼','夕方','夜'][i%4],scene:['daily','solo','chat','furniture','bond'][i%5]});assert.ok(s);assert.notEqual(s,prev);prev=s;}}
