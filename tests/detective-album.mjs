import assert from 'node:assert/strict';
import {cases,albumEntries} from '../js/detective-model.js';
const empty=albumEntries(()=>false);assert.equal(empty.length,30);assert(empty.every(x=>!x.unlocked&&!('ending' in x)&&!('title' in x)));const one=albumEntries(id=>id===cases[0].id);assert.equal(one.filter(x=>x.unlocked).length,1);assert.equal(one[0].title,cases[0].title);const all=albumEntries(()=>true);assert(all.every(x=>x.unlocked&&x.ending&&x.epilogue));console.log('album passed');
