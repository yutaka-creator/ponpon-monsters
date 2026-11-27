import assert from 'node:assert/strict';
import {steps,nextIndex} from '../js/tutorial-data.js?v=10000';
import {readFileSync} from 'node:fs';
assert.equal(steps.length,4);assert.equal(nextIndex(0,-1),0);assert.equal(nextIndex(3,1),3);assert.equal(nextIndex(1,1),2);const html=readFileSync('index.html','utf8');for(const s of steps)assert(html.includes(`data-go="${s.target}"`));console.log('tutorial data passed');
