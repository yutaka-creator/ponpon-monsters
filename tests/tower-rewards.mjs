import assert from 'node:assert/strict';
const store=new Map();globalThis.localStorage={getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,v)};globalThis.document={getElementById:()=>null,dispatchEvent(){}};
const {awardTower}=await import('../js/shop.js?v=1112');const {profiles,displayNumber}=await import('../js/profiles.js?v=1112');
assert.equal(awardTower(99,2).coins,10);assert.equal(awardTower(100,0).coins,30);assert.equal(awardTower(100,0).coins,0);assert.equal(awardTower(500,100).coins,260);assert.equal(awardTower(500,0).coins,0);assert.equal(awardTower(-1,3).coins,0);assert.equal(profiles[25][0],'宇宙ピンポンこぺ');assert.equal(displayNumber(25),'026');console.log('tower rewards passed');
