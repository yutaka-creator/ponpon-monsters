import m0 from './monologues/0.js';
import m1 from './monologues/1.js';
import m2 from './monologues/2.js';
import m3 from './monologues/3.js';
import m4 from './monologues/4.js';
import m5 from './monologues/5.js';
import m6 from './monologues/6.js';
import m7 from './monologues/7.js';
import m8 from './monologues/8.js';
import m9 from './monologues/9.js';
import m10 from './monologues/10.js';
import m11 from './monologues/11.js';
import m12 from './monologues/12.js';
import m13 from './monologues/13.js';
import m14 from './monologues/14.js';
import m15 from './monologues/15.js';
import m16 from './monologues/16.js';
import m17 from './monologues/17.js';
import m18 from './monologues/18.js';
import m19 from './monologues/19.js';
import m20 from './monologues/20.js';
import m21 from './monologues/21.js';
import m22 from './monologues/22.js';
const data=[m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22];
const recent=new Map();
const dreams=['むにゃ…特売ですわ…','むにゃ…昨日に戻るよ…','むにゃ…虹が出た…','むにゃ…世界一周…','むにゃ…甘口じゃ…','むにゃ…脈ありやで…','むにゃ…会議は延期…','むにゃ…あと五分…','むにゃ…昔はなぁ…','むにゃ…負けないもん…'];
export function monologueEntries(id){return Object.values(data[id]||{}).flat();}
export function monologue(id,{sleep=false,furniture=false,now=new Date()}={}){const d=data[id];if(!d)return '';const h=now.getHours(),time=h>=5&&h<11?'朝':h>=11&&h<18?'昼':'夜';const r=Math.random();let pool=sleep&&r<.35?[dreams[id]||'むにゃ…'] : furniture&&r<.25&&d.furniture?d.furniture:r<.04?d.rare:[...d.daily,...d.surreal,...(d.philosophy||[]),...d.hobby,...(d.friends||[]),...(d.time||[]).filter(x=>x.startsWith(time))];const old=recent.get(id)||[];let choices=pool.filter(x=>!old.includes(x));if(!choices.length)choices=monologueEntries(id).filter(x=>!old.includes(x));const line=choices[Math.floor(Math.random()*choices.length)];recent.set(id,[...old,line].slice(-20));return line;}
export const reactions=['今の、聞かなかったことにするね。','なるほど…たぶん。','それ、明日も言うの？','ちょっと考えておくね。','ふむ。お茶にしよう。'];
