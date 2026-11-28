import assert from 'node:assert/strict';import {catchCard} from '../js/crane-celebration.js?v=114911';
const base={name:'地球',quote:'回ってるよ',number:'003',count:1};
assert.equal(catchCard({...base,first:true}).tier,'new');assert.equal(catchCard({...base,rare:true,first:true}).tier,'rare');assert.match(catchCard({...base,rare:true,first:true}).label,/NEW/);assert.equal(catchCard({...base,count:2}).tier,'repeat');assert.match(catchCard(base).detail,/003/);assert.equal(catchCard(base).quote,'「回ってるよ」');
