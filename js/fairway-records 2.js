import {read,write} from './save-store.js';
export const KEY='ponpon-catcher.fairway.v1';
export function loadRecords(){try{const v=JSON.parse(read(KEY)||'{}');return {best:v.best||{},aces:v.aces||{},roundBest:v.roundBest||null,roundBest18:v.roundBest18||null};}catch{return {best:{},aces:{},roundBest:null,roundBest18:null};}}
export function recordHole(id,strokes){const r=loadRecords();if(!Number.isInteger(id)||id<1||id>18||!Number.isSafeInteger(strokes)||strokes<1)return r;r.best[id]=Math.min(r.best[id]||Infinity,strokes);if(strokes===1)r.aces[id]=(r.aces[id]||0)+1;write(KEY,JSON.stringify(r));return r;}
export function recordRound(scores){if(![9,18].includes(scores.length)||!scores.every(s=>Number.isInteger(s)&&s>0))return null;const total=scores.reduce((a,b)=>a+b,0),r=loadRecords();const key=scores.length===18?"roundBest18":"roundBest";r[key]=Math.min(r[key]||Infinity,total);write(KEY,JSON.stringify(r));return total;}
