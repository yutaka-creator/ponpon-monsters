import {read,write} from './save-store.js?v=11401';
export const KEY='ponpon-catcher.room-memories.v1';
export function appendMemory(entries,entry){return [entry,...entries].slice(0,30);}
export function memories(){try{const v=JSON.parse(read(KEY)||'{}');return Array.isArray(v.entries)?v.entries.filter(e=>e&&typeof e.text==='string'&&Number.isFinite(e.at)).slice(0,30):[];}catch{return [];}}
export function renderMemories(){const list=document.querySelector('#room-memories-list');if(!list)return;list.replaceChildren();const entries=memories();if(!entries.length)list.textContent='まだ思い出はありません。';for(const e of entries){const p=document.createElement('p');p.textContent=new Date(e.at).toLocaleString('ja-JP')+'　'+e.text;list.append(p);}}
export function remember(text,at=Date.now()){const entries=memories();if(entries[0]&&at-entries[0].at<60000)return false;try{write(KEY,JSON.stringify({entries:appendMemory(entries,{text,at})}));renderMemories();return true;}catch{return false;}}
