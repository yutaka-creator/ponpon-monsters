import assert from 'node:assert/strict';
import {exhibits} from '../js/museum-data.js?v=114910';
import {giftRecords,addGift} from '../js/souvenir-records.js?v=114910';
assert.equal(exhibits.length,100);assert.equal(new Set(exhibits.map(e=>e.description)).size,100);
const r=giftRecords({gifts:['どんぐり'],album:[{gift:'どんぐり'}]});assert.equal(r['どんぐり'].count,1);assert.equal(r['どんぐり'].first,null);addGift(r,'どんぐり',123);assert.equal(r['どんぐり'].count,2);assert.equal(r['どんぐり'].first,null);addGift(r,'巨大キノコ',456);assert.equal(giftRecords({records:r})['巨大キノコ'].first,456);assert.equal(giftRecords({records:r})['どんぐり'].count,2);
