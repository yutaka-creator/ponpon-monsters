import assert from 'node:assert/strict';
import {draftBonus} from '../js/race-draft.js?v=114924';
import {createRace,stepRace} from '../js/race-physics.js?v=114924';
const s=createRace(),p=s.cars[0],r=s.cars[1];p.speed=20;p.distance=100;p.lane=0;r.distance=110;r.lane=0;assert.equal(draftBonus(p,[p,r]),5);r.lane=3;assert.equal(draftBonus(p,[p,r]),0);r.lane=0;r.finish=1;assert.equal(draftBonus(p,[p,r]),0);r.finish=null;stepRace(s,.02);assert(p.draft>0);assert(s.cars.slice(1).every(c=>c.draft===0));console.log('race draft OK');
