import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const h=readFileSync('index.html','utf8');assert(h.includes('assets/brand/icon.svg'));assert(h.includes('about.html'));assert(h.includes('css/brand.css?v=114910'));for(const n of [180,192,512,1024]){const b=readFileSync(`assets/brand/icon-${n}.png`);assert.equal(b.readUInt32BE(16),n);assert.equal(b.readUInt32BE(20),n);}assert(readFileSync('about.html','utf8').includes('確認中'));assert(readFileSync('BRAND-GUIDE.md','utf8').includes('未承認'));console.log('brand passed');
