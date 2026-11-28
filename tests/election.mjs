import assert from 'node:assert/strict';
import {candidates} from '../js/election.js?v=11460';
import {profiles,displayOrder} from '../js/profiles.js?v=11460';
assert.equal(candidates.length,50);assert.equal(new Set(candidates.map(c=>c.pledge)).size,50);for(const id of displayOrder){assert.equal(candidates[id].id,id);assert(profiles[id]);for(const k of ['pledge','speech','reaction'])assert(candidates[id][k].trim());}console.log('50 candidates passed');
