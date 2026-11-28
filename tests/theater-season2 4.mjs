import assert from 'node:assert/strict';
import {episodes} from '../js/episodes.js';
import {season2} from '../js/episodes-season2.js';
assert.equal(episodes.length,63);assert.equal(season2.length,20);assert.deepEqual(episodes.slice(43),season2);assert.equal(episodes[0].title,'時代のすれ違い');assert.equal(episodes[42].title,'昔の未来');
assert.equal(new Set(episodes.map(e=>e.title)).size,63);
for(const e of season2){assert.equal(e.lines.length,4);assert.ok(e.lines.every(s=>s.trim()));assert.equal(e.ids.length,2);assert.ok(e.ids.every(i=>Number.isInteger(i)&&i>=0&&i<50));assert.ok(['日常','シュール','ほっこり'].includes(e.category));}
for(let i=29;i<50;i++)assert.ok(season2.some(e=>e.ids.includes(i)),`missing ${i}`);
