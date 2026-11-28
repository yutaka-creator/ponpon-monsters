import assert from 'node:assert/strict';
import {create,step} from '../js/tower-physics.js?v=114910';
const s=create();for(let i=0;i<5;i++){s.x=s.paddle;s.y=s.paddleY+20;s.vy=-100;step(s,.1);}assert.equal(s.combo,5);assert.equal(s.perfects,5);assert.equal(s.maxCombo,5);s.shield=true;s.y=s.camera-40;step(s,.01);assert.equal(s.combo,0);assert.equal(s.maxCombo,5);assert.equal(s.over,false);
