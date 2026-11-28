import assert from 'node:assert/strict';
const store=new Map();globalThis.localStorage={getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)};globalThis.document={dispatchEvent(){}};
const s=await import('../js/save-store.js?v=11401');const k=s.keys[0];s.write(k,'[1]');s.restore({[k]:[2]});assert.deepEqual(s.snapshot()[k],[2]);s.recover();assert.deepEqual(s.snapshot()[k],[1]);assert.throws(()=>s.restore({[k]:{}}));s.setOwner('test');assert.equal(s.read(k),null);s.write(k,'[3]');s.setOwner('');assert.equal(s.read(k),'[1]');console.log('save tests passed');
