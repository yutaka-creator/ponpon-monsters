import {read,write} from './save-store.js?v=10000';
export const KEY='ponpon-catcher.adventure.v1';
const clean=a=>[...new Set((Array.isArray(a)?a:[]).filter(n=>Number.isInteger(n)&&n>=1&&n<=10))].sort((a,b)=>a-b);
export function loadRecords(){try{const r=JSON.parse(read(KEY));return {cleared:clean(r?.cleared),secrets:clean(r?.secrets)};}catch{return {cleared:[],secrets:[]};}}
export function recordAdventure(s){const r=loadRecords(),id=s.stage.id;if(s.won)r.cleared=clean([...r.cleared,id]);if(s.secret)r.secrets=clean([...r.secrets,id]);write(KEY,JSON.stringify(r));return r;}
export function rewardIds(r){return [['advgift0',r.cleared.length>=3],['advgift1',r.cleared.length>=5],['advgift2',r.cleared.length>=8],['advgift3',r.secrets.length>=10]].filter(a=>a[1]).map(a=>a[0]);}
