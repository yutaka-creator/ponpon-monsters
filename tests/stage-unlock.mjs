import assert from 'node:assert/strict';
import {unlockedStage,stageAllowed,stageLabel} from '../js/stage-unlock.js?v=114910';
assert.equal(unlockedStage([],50),1);assert.equal(unlockedStage([1,2],50),3);assert.equal(unlockedStage([10],50),11);assert.equal(unlockedStage([50],50),50);assert.equal(unlockedStage([0,99,'4'],50),1);assert.equal(unlockedStage([],50,20),20);assert(!stageAllowed(4,3,50));assert(stageAllowed(4,3,50,true));assert(!stageAllowed(51,3,50,true));assert(stageLabel(4,'STAGE',[],3).includes('🔒'));assert(stageLabel(2,'STAGE',[2],3).includes('✓'));
console.log('stage unlock passed');
