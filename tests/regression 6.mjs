import assert from 'node:assert/strict';
const store=new Map();globalThis.localStorage={getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)};globalThis.document={getElementById:()=>null,dispatchEvent(){}};
const {awardGolf,golfRecords}=await import('../js/shop.js?v=1112');
assert.equal(awardGolf(0,4).coins,30);assert.equal(awardGolf(0,4).coins,0);assert.equal(awardGolf(0,1).coins,50);assert.equal(awardGolf(0,1).coins,0);assert.equal(awardGolf(0,10).coins,20);assert.equal(awardGolf(0,10).coins,0);assert.equal(golfRecords()[0],1);assert.equal(awardGolf(-1,1).coins,0);for(let i=1;i<30;i++)assert.equal(awardGolf(i,3).coins,30);assert.equal(Object.keys(golfRecords()).length,30);
const {entries,lineFor}=await import('../js/line-library.js?v=1112');for(let i=0;i<10;i++){const e=entries(i);assert.equal(e.length,600);assert.equal(new Set(e.map(x=>x.key)).size,600);let prev;for(let j=0;j<100;j++){const next=lineFor(i);assert.ok(next);assert.notEqual(next,prev);prev=next;}}for(let i=10;i<23;i++)assert.ok(lineFor(i));
const {courses3d}=await import('../js/golf3d-data.js?v=1112');assert.equal(courses3d.length,30);for(const c of courses3d){for(const p of [c.start,c.hole])assert.ok(p.every(Number.isFinite));assert.ok(Array.isArray(c.walls));}
console.log('golf rewards, dialogue, course data passed');
