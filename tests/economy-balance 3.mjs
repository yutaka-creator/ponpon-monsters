import assert from 'node:assert/strict';
import {raceCoins,invaderCoins,adventureCoins} from '../js/economy-balance.js?v=114911';
assert.deepEqual([1,2,3,4,8].map(raceCoins),[30,25,25,15,15]);
assert.equal(raceCoins(0),0);assert.equal(invaderCoins(0,false),0);assert.equal(invaderCoins(4000,false),10);assert.equal(invaderCoins(999999,true),90);assert.equal(adventureCoins(12,true),42);assert.equal(adventureCoins(12,false),12);assert.equal(adventureCoins(-1,false),0);
console.log('economy balance passed');
