export const keys=['ponpon-catcher.collection.v1','ponpon-catcher.bond.v1','ponpon-catcher.room.v1','ponpon-catcher.shop.v1','ponpon-catcher.lines.v1','ponpon-catcher.pairs.v1','ponpon-catcher.travel.v1','ponpon-catcher.fairway.v1','ponpon-catcher.theater.v1','ponpon-catcher.tower.v1','ponpon-catcher.race.v1','ponpon-catcher.invader.v1','ponpon-catcher.adventure.v1','ponpon-catcher.town.v1','ponpon-catcher.escape.v1','ponpon-catcher.climb.v1','ponpon-catcher.pinball.v1','ponpon-catcher.room-memories.v1'];
let owner='';
const pending=new Map();
export function pendingCount(){return pending.size;}
export function flushPending(){for(const [k,v] of pending){try{localStorage.setItem(k,v);pending.delete(k);}catch{}}return pending.size===0;}

export function setOwner(id){owner=id||'';}
const path=k=>owner?`${k}.user.${owner}`:k;
const backupPath=()=>path('ponpon-catcher.backup.v1');
const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
export function validate(data){if(!object(data)||!keys.some(k=>Object.hasOwn(data,k)))throw Error('記録の形式が正しくありません。');for(const [i,k] of keys.entries()){const v=data[k];if(!Object.hasOwn(data,k)||v===null)continue;if([0,1,4].includes(i)?!Array.isArray(v):!object(v))throw Error('記録の形式が正しくありません。');}return data;}
export function read(k){return pending.get(path(k))??localStorage.getItem(path(k));}
export function write(k,v){JSON.parse(v);const target=path(k);pending.set(target,v);try{localStorage.setItem(target,v);pending.delete(target);}catch(e){document.dispatchEvent(new Event("ponpon:save-error"));throw e;}document.dispatchEvent(new Event('ponpon:save'));}
export function snapshot(guest=false){return Object.fromEntries(keys.map(k=>[k,JSON.parse((guest?localStorage.getItem(k):read(k))||'null')]));}
export function backup(){localStorage.setItem(backupPath(),JSON.stringify(snapshot()));}
export function hasBackup(){return !!localStorage.getItem(backupPath());}
export function restore(data){validate(data);if(!flushPending())throw Error("未保存の記録があります。空き容量を確認してください。");const previous=snapshot();backup();try{for(const k of keys){if(!Object.hasOwn(data,k))continue;if(data[k]==null)localStorage.removeItem(path(k));else localStorage.setItem(path(k),JSON.stringify(data[k]));}}catch(e){for(const k of keys){try{if(previous[k]==null)localStorage.removeItem(path(k));else localStorage.setItem(path(k),JSON.stringify(previous[k]));}catch{}}throw e;}}
export function recover(){const raw=localStorage.getItem(backupPath());if(!raw)throw Error('バックアップがありません。');restore(JSON.parse(raw));}
