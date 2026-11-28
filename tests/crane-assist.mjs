import assert from 'node:assert/strict';
import {captureRadius,slipRadius,holdRadius,slipDelay} from '../js/crane-assist.js?v=114924';
for(const p of [.216,.3,.7,1,1.5,2]){
 for(const b of [30,70,100]){
 assert(captureRadius(b,p)>.45+.42*b/100+.15*Math.max(0,p-1));
 assert(slipRadius(b,b,p)>.32+.47*b/100+.15*Math.max(0,p-1));
 }
 assert(holdRadius(p)>1.05+.45*p);assert(slipDelay(p)>1.1+1.4*p);
}
assert(captureRadius(100,1)>captureRadius(30,1));
assert(slipRadius(100,100,1)>captureRadius(100,1));
