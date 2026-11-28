import assert from 'node:assert/strict';
import {create,step} from '../js/adventure-physics.js?v=1139';
const signatures=new Set();for(let id=1;id<=50;id++){const s=create(3,id);signatures.add(JSON.stringify(s.platforms));for(let i=0;i<3;i++)assert(s.platforms[i+1].x-s.platforms[i].x-s.platforms[i].w<=120);for(let i=0;i<100;i++)step(s,.01,{right:true,jump:i===10});assert(Number.isFinite(s.x)&&Number.isFinite(s.y));}assert.equal(signatures.size,50);const s=create(3,16),p=s.extraPlatforms[0],y=p.y;step(s,.01);assert.notEqual(p.y,y);assert.equal(create(3,36).extraPlatforms[0].kind,'crumble');
