export const keys=['ponpon-catcher.collection.v1','ponpon-catcher.bond.v1','ponpon-catcher.room.v1','ponpon-catcher.shop.v1','ponpon-catcher.lines.v1','ponpon-catcher.pairs.v1','ponpon-catcher.travel.v1'];
let owner='';
export function setOwner(id){owner=id||'';}
const path=k=>owner?`${k}.user.${owner}`:k;
const backupPath=()=>path('ponpon-catcher.backup.v1');
const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
export function validate(data){if(!object(data)||!keys.some(k=>Object.hasOwn(data,k)))throw Error('記録の形式が正しくありません。');for(const [i,k] of keys.entries()){const v=data[k];if(v==null)continue;if([0,1,4].includes(i)?!Array.isArray(v):!object(v))throw Error('記録の形式が正しくありません。');}return data;}
export function read(k){return localStorage.getItem(path(k));}
export function write(k,v){JSON.parse(v);localStorage.setItem(path(k),v);document.dispatchEvent(new Event('ponpon:save'));}
export function snapshot(guest=false){return Object.fromEntries(keys.map(k=>[k,JSON.parse((guest?localStorage.getItem(k):read(k))||'null')]));}
export function backup(){localStorage.setItem(backupPath(),JSON.stringify(snapshot()));}
export function hasBackup(){return !!localStorage.getItem(backupPath());}
export function restore(data){validate(data);const previous=snapshot();backup();try{for(const k of keys){if(!Object.hasOwn(data,k))continue;if(data[k]==null)localStorage.removeItem(path(k));else localStorage.setItem(path(k),JSON.stringify(data[k]));}}catch(e){for(const k of keys){try{if(previous[k]==null)localStorage.removeItem(path(k));else localStorage.setItem(path(k),JSON.stringify(previous[k]));}catch{}}throw e;}}
export function recover(){const raw=localStorage.getItem(backupPath());if(!raw)throw Error('バックアップがありません。');restore(JSON.parse(raw));}
