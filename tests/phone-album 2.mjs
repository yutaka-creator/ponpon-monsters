import assert from 'node:assert/strict';
import {ownedPhotos,filterPhotos} from '../js/phone-album-model.js?v=114910';
const p=ownedPhotos([1,0,3,-1],[['A'],['B'],['C'],['D']]);assert.deepEqual(p.map(x=>x.id),[0,2]);assert.equal(filterPhotos(p,[2],true)[0].name,'C');assert.equal(filterPhotos(p,[],false).length,2);console.log('phone album passed');
