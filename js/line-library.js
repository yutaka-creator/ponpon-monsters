import {explorers} from './exploration-data.js';
import {read,write} from './save-store.js';
import {profiles} from './profiles.js';
import d0 from './lines/0.js';
import d1 from './lines/1.js';
import d2 from './lines/2.js';
import d3 from './lines/3.js';
import d4 from './lines/4.js';
import d5 from './lines/5.js';
import d6 from './lines/6.js';
import d7 from './lines/7.js';
import d8 from './lines/8.js';
import d9 from './lines/9.js';
const data=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9],key='ponpon-catcher.lines.v1',last=new Map();
export function context(now=new Date()){const h=now.getHours(),m=now.getMonth()+1;return {time:h>=5&&h<11?'朝':h>=11&&h<16?'昼':h>=16&&h<19?'夕方':'夜',season:m>=3&&m<=5?'春':m>=6&&m<=8?'夏':m>=9&&m<=11?'秋':'冬'};}
function entries(id){const d=data[id];return Object.entries(d).flatMap(([k,v])=>Array.isArray(v)?v.flat(Infinity).map((line,i)=>({key:`${id}:${k}:${i}`,line,kind:k})):Object.entries(v).flatMap(([t,arr])=>arr.map((line,i)=>({key:`${id}:${k}:${t}:${i}`,line,kind:k,tag:t}))));}
function seen(){try{return new Set(JSON.parse(read(key)||'[]'));}catch{return new Set();}}
export function lineFor(id,{level=1,furniture=false,chat=false,solo=false}={}){if(!data[id]){const e=explorers[id-16];return e?e.lines[Math.floor(Math.random()*e.lines.length)]:profiles[id]?.[2]||'';}const c=context(),r=Math.random(),all=entries(id);let pool=all.filter(e=>e.kind==='daily'||e.kind==='time'&&e.tag===c.time||e.kind==='season'&&e.tag===c.season||e.kind==='bond'&&Math.floor(Number(e.key.split(':').at(-1))/3)===level-1);const kind=r<.005?'ultra':r<.055?'rare':chat?'chat':furniture&&r<.4?'furniture':solo?'solo':null;if(kind)pool=all.filter(e=>e.kind===kind);let choices=pool.filter(e=>e.line!==last.get(id));if(!choices.length)choices=all.filter(e=>e.kind==='daily'&&e.line!==last.get(id));const e=choices[Math.floor(Math.random()*choices.length)];last.set(id,e.line);const s=seen();if(!s.has(e.key)){s.add(e.key);try{write(key,JSON.stringify([...s]));}catch{}}return e.line;}
export function initLibrary(){const select=document.querySelector('#line-monster'),list=document.querySelector('#line-list'),progress=document.querySelector('#line-progress');profiles.slice(0,10).forEach((p,i)=>select.add(new Option(p[0],i)));function render(){const s=seen(),all=entries(Number(select.value));progress.textContent=`全体 ${data.flatMap((_,i)=>entries(i)).filter(e=>s.has(e.key)).length} / 1000 ・ この仲間 ${all.filter(e=>s.has(e.key)).length} / 100`;list.replaceChildren();for(const e of all.filter(e=>s.has(e.key))){const p=document.createElement('p');p.textContent=e.line;list.append(p);}}select.onchange=render;document.querySelector('#line-book').addEventListener('toggle',render);render();}
export function updateSeason(){const c=context(),scene=document.querySelector('#room-scene');scene.dataset.time=c.time;document.querySelector('#room-season').textContent=`${c.season}・${c.time} ${({春:'🌸',夏:'🎆',秋:'🍁',冬:'❄️'})[c.season]}`;}
