export const keys=['ponpon-catcher.collection.v1','ponpon-catcher.bond.v1','ponpon-catcher.room.v1','ponpon-catcher.shop.v1','ponpon-catcher.lines.v1','ponpon-catcher.pairs.v1','ponpon-catcher.travel.v1'];
let owner='';
export function setOwner(id){owner=id||'';}
const path=k=>owner?`${k}.user.${owner}`:k;
export function read(k){return localStorage.getItem(path(k));}
export function write(k,v){localStorage.setItem(path(k),v);document.dispatchEvent(new Event('ponpon:save'));}
export function snapshot(guest=false){return Object.fromEntries(keys.map(k=>[k,JSON.parse((guest?localStorage.getItem(k):read(k))||'null')]));}
export function restore(data){for(const k of keys){if(data[k]==null)localStorage.removeItem(path(k));else localStorage.setItem(path(k),JSON.stringify(data[k]));}}
