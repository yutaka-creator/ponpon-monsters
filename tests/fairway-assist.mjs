import assert from 'node:assert/strict';
import {meterValue,impactResult,aimStep} from '../js/fairway-assist.js?v=11401';
import {shoot,tick,ground} from '../js/fairway-physics.js?v=11401';
assert.equal(meterValue(1,2000,'fairway'),100);assert.equal(meterValue(2,1250,'green'),50);assert.equal(impactResult(60,'green').offset,0);assert.equal(impactResult(72,'fairway').label,'GOOD');assert.equal(impactResult(80,'fairway').label,'MISS');assert.equal(aimStep('green'),1);
let b={x:0,z:-77,y:ground(0,-77)+.38,vx:0,vy:0,vz:0,air:false};shoot(b,0,65);let r;for(let i=0;i<3000;i++){r=tick(b,1/300);if(r!=='moving')break;}assert.equal(r,'hole');console.log('fairway assist OK');
