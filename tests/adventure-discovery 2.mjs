import assert from 'node:assert/strict';
import {effects,explorationCue} from '../js/adventure-effects.js?v=114910';
const f=effects();assert.equal(explorationCue(f,{x:599}),null);assert.match(explorationCue(f,{x:600}),/景色/);assert.equal(explorationCue(f,{x:100}),null);assert.match(explorationCue(f,{x:1200}),/半分/);assert.match(explorationCue(f,{x:1800}),/あと少し/);assert.equal(explorationCue(f,{x:2400}),null);assert.equal(f.distance,2400);assert.equal(f.discoveries.length,3);assert.equal(effects().discoveries.length,0);
