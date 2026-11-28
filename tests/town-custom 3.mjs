import assert from 'node:assert/strict';
import {cleanLayout,editLayout} from '../js/town-custom.js?v=11401';
import {townPath} from '../js/town-path.js?v=11401';
import {buildings,treasures} from '../js/town-data.js?v=11401';
assert.deepEqual(cleanLayout({'1,1':'tree','0,6':'flower','-1,0':'road','7,4':'bench','8,4':'bad'}),{'7,4':'bench'});
assert.deepEqual(editLayout({},5,4,'erase'),{'5,4':'erase'});
for(const b of buildings)assert(townPath(7,4,b.x,b.y,[],b));for(const t of treasures)assert(townPath(7,4,t.x,t.y,[]));
