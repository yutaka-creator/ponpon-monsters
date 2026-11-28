import {pairs} from './pair-data.js?v=1139';
import {profiles} from './profiles.js?v=1139';
import {read,write} from './save-store.js?v=1139';
import {getCounts} from './collection.js?v=1139';
const key='ponpon-catcher.pairs.v1';
const id=p=>p.ids.join('-');
function records(){try{return JSON.parse(read(key))||{}}catch{return {}}}
const name=i=>profiles[i][0];
function lines(p,level){return p.lines.map((s,i)=>name(p.ids[i%2])+'「'+s+'」').join('\n')+(level>=3?'\n'+name(p.ids[0])+'「また一緒に過ごそうね。」\n'+name(p.ids[1])+'「うん、ここが落ち着くね。」':'');}
export function pairChat(a,b){const p=pairs.find(p=>p.ids.includes(a)&&p.ids.includes(b)&&a!==b);if(!p)return '';const r=records(),k=id(p);r[k]=Math.min(15,(Number(r[k])||0)+1);try{write(key,JSON.stringify(r))}catch{}renderPairs();return lines(p,r[k]>=10?3:1);}
export function renderPairs(){const list=document.getElementById('pair-list');if(!list)return;const r=records(),counts=getCounts();document.getElementById('pair-progress').textContent=`発見 ${pairs.filter(p=>r[id(p)]>0).length} / 45 組`;list.replaceChildren();for(const p of pairs){const n=Number(r[id(p)])||0,owned=p.ids.every(i=>counts[i]);const d=document.createElement('details'),s=document.createElement('summary');s.textContent=p.ids.map(name).join(' × ')+' — '+(n?p.title+' / 仲良し度 Lv.'+(n>=10?3:n>=5?2:1):owned?'会話未発見':'未獲得');d.append(s);const text=document.createElement('p');text.style.whiteSpace='pre-wrap';text.textContent=n?lines(p,n>=10?3:1):'2体を部屋に置いて会話を楽しもう。';d.append(text);if(n){const progress=document.createElement('small');progress.textContent=`会話 ${n} 回 / 特別エピソード 10 回`;d.append(progress);}list.append(d);}}
