import assert from 'node:assert/strict';
import {meterValue,POWER_SPEED} from '../js/fairway-assist.js?v=1112';
assert.equal(POWER_SPEED,1.25);
for(const [d,m] of [['easy',.72],['normal',1],['hard',1.15]])for(const [lie,p,i] of [['fairway',50,55],['green',35,40],['rough',50,55]]){
 const duration=100000/(p*m*POWER_SPEED);
 assert(Math.abs(meterValue(1,duration/2,lie,d)-50)<1e-8);
 assert(Math.abs(meterValue(1,duration,lie,d)-100)<1e-8);
 assert.equal(meterValue(1,duration+100,lie,d),100);
 assert.equal(meterValue(1,-100,lie,d),0);
 assert(Math.abs(meterValue(2,50000/(i*m),lie,d)-50)<1e-8);
}
console.log('power speed +25%, impact unchanged');
