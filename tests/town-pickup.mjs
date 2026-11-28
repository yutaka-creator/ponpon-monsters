import assert from 'node:assert/strict';
import {treasureAt} from '../js/town-pickup.js?v=11440';
import {treasures,residents} from '../js/town-data.js?v=11440';
import {townPath} from '../js/town-path.js?v=11440';
let found=[];for(const t of treasures){assert.equal(treasureAt(t.x,t.y,found).id,t.id);assert.equal(treasureAt(t.x,t.y,[t.id]),undefined);let x=7,y=4;for(const [dx,dy] of townPath(x,y,t.x,t.y,residents)){x+=dx;y+=dy;}assert.equal(treasureAt(x,y,[]).id,t.id);found.push(t.id);}assert.equal(treasureAt(7,4,found),undefined);console.log('town pickup OK');
