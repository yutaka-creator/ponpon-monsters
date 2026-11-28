import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
const html=readFileSync('index.html','utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length);const tabs=[...html.matchAll(/data-tab="([^"]+)"/g)].map(m=>m[1]);for(const t of tabs)assert(ids.includes(t),t);for(const m of html.matchAll(/data-go="([^"]+)"/g))assert(m[1]==="welcome"||tabs.includes(m[1]),m[1]);for(const dir of ['js','tests'])for(const f of readdirSync(dir,{recursive:true})){if(!/\.(js|mjs)$/.test(f))continue;const p=resolve(dir,f);for(const m of readFileSync(p,'utf8').matchAll(/['"](\.{1,2}\/[^'"\s]+\.js)\?v=(\d+)['"]/g)){assert.equal(m[2],'1112',p);assert(existsSync(resolve(dirname(p),m[1])),m[1]);}}
console.log('release audit passed');
