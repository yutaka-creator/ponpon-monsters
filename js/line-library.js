import {voiceFor} from './character-voices.js?v=114911';
import {originals} from './original-monsters.js?v=114911';
import {explorers} from './exploration-data.js?v=114911';
import {read,write} from './save-store.js?v=114911';
import {profiles} from './profiles.js?v=114911';
import d0 from './lines/0.js?v=114911';
import d1 from './lines/1.js?v=114911';
import d2 from './lines/2.js?v=114911';
import d3 from './lines/3.js?v=114911';
import d4 from './lines/4.js?v=114911';
import d5 from './lines/5.js?v=114911';
import d6 from './lines/6.js?v=114911';
import d7 from './lines/7.js?v=114911';
import d8 from './lines/8.js?v=114911';
import d9 from './lines/9.js?v=114911';
import x0 from "./lines/expanded/0.js?v=114911";
import x1 from "./lines/expanded/1.js?v=114911";
import x2 from "./lines/expanded/2.js?v=114911";
import x3 from "./lines/expanded/3.js?v=114911";
import x4 from "./lines/expanded/4.js?v=114911";
import x5 from "./lines/expanded/5.js?v=114911";
import x6 from "./lines/expanded/6.js?v=114911";
import x7 from "./lines/expanded/7.js?v=114911";
import x8 from "./lines/expanded/8.js?v=114911";
import x9 from "./lines/expanded/9.js?v=114911";
const data=[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9],key='ponpon-catcher.lines.v1',last=new Map();
export function context(now=new Date()){const h=now.getHours(),m=now.getMonth()+1;return {time:h>=5&&h<11?'朝':h>=11&&h<16?'昼':h>=16&&h<19?'夕方':'夜',season:m>=3&&m<=5?'春':m>=6&&m<=8?'夏':m>=9&&m<=11?'秋':'冬'};}
const expanded=[x0,x1,x2,x3,x4,x5,x6,x7,x8,x9];
function flatten(id,d,prefix=""){return Object.entries(d).flatMap(([k,v])=>Array.isArray(v)?v.flat(Infinity).map((line,i)=>({key:`${id}:${prefix}${k}:${i}`,line,kind:k})):Object.entries(v).flatMap(([t,arr])=>arr.map((line,i)=>({key:`${id}:${prefix}${k}:${t}:${i}`,line,kind:k,tag:t}))));}
export function entries(id){if(!data[id])return [];return [...flatten(id,data[id]),...flatten(id,expanded[id],'x:')];}
function seen(){try{return new Set(JSON.parse(read(key)||'[]'));}catch{return new Set();}}
export function lineFor(id,{level=1,furniture=false,chat=false,solo=false,scene=null}={}){if(!data[id]||Math.random()<.65){const fresh=voiceFor(id,{time:context().time,scene:scene||(chat?"chat":furniture?"furniture":solo?"solo":"daily")});if(fresh&&fresh!==last.get(id)){last.set(id,fresh);return fresh;}}if(!data[id]){const e=explorers[id-16];const pool=[...(originals[id-29]?.lines||[]),...(e?.lines||[]),profiles[id]?.[2],...(special[id-10]||[])].filter(Boolean);const choices=pool.filter(x=>x!==last.get(id));const line=(choices.length?choices:pool)[Math.floor(Math.random()*(choices.length||pool.length))]||'';last.set(id,line);return line;}const c=context(),r=Math.random(),all=entries(id);let pool=all.filter(e=>e.kind==='daily'||e.kind==='time'&&e.tag===c.time||e.kind==='season'&&e.tag===c.season||e.kind==='bond'&&(e.tag?Number(e.tag)===level:Math.floor(Number(e.key.split(':').at(-1))/3)===level-1));const kind=scene||(r<.005?'ultra':r<.055?'rare':chat?'chat':furniture&&r<.4?'furniture':solo&&r<.3?'solo':null);if(kind)pool=all.filter(e=>e.kind===kind);let choices=pool.filter(e=>e.line!==last.get(id));if(!choices.length)choices=all.filter(e=>e.kind==='daily'&&e.line!==last.get(id));const e=choices[Math.floor(Math.random()*choices.length)];if(!e)return profiles[id]?.[2]||'';last.set(id,e.line);const s=seen();if(!s.has(e.key)){s.add(e.key);try{write(key,JSON.stringify([...s]));}catch{}}return e.line;}
const special=[['金箔のお茶はもったいなくて飲めん。','昔話に金利はつかんぞ。'],['雪だるまと間違えられたよ。','今日は白地図から始めよう。'],['自撮りに全身が入らない！','鏡をもう一枚買わなきゃ。'],['写真に写る練習中だよ。','透明でも運命は見えるよ。'],['百年分の充電器を忘れた。','昔の未来から来たよ。'],['わしの伝説はまだ序章じゃ。','表彰状は自分で書いたのじゃ。'],['キノコの傘は閉じられんのじゃ。','森の会議は雨天決行じゃ。'],['議事録は万年筆で作成します。','そろばんの充電は不要です。'],['宇宙でも保湿は大事！','銀河サイズの鏡が欲しい。'],['解凍の予定は未定じゃ。','冷たい視線には慣れておる。'],['二百年後の昨日に忘れ物した。','時代の乗り換えを間違えた。'],['ここにいる気がする。','返事がないのも返事。'],['世界一周より一打ずつだね。','地球儀にカップを描いたよ。']];
export function initLibrary(){const select=document.querySelector('#line-monster'),list=document.querySelector('#line-list'),progress=document.querySelector('#line-progress');profiles.slice(0,10).forEach((p,i)=>select.add(new Option(p[0],i)));function render(){const s=seen(),all=entries(Number(select.value));progress.textContent=`全体 ${data.flatMap((_,i)=>entries(i)).filter(e=>s.has(e.key)).length} / ${data.flatMap((_,i)=>entries(i)).length} ・ この仲間 ${all.filter(e=>s.has(e.key)).length} / ${all.length}`;list.replaceChildren();for(const e of all.filter(e=>s.has(e.key))){const p=document.createElement('p');p.textContent=e.line;list.append(p);}}select.onchange=render;document.querySelector('#line-book').addEventListener('toggle',render);render();}
export function updateSeason(){const c=context(),scene=document.querySelector('#room-scene');scene.dataset.time=c.time;document.querySelector('#room-season').textContent=`${c.season}・${c.time} ${({春:'🌸',夏:'🎆',秋:'🍁',冬:'❄️'})[c.season]}`;}
