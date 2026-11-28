import {voices} from './character-voices.js?v=11440';
export const gatherings=[
 {label:'一緒にごはん',icon:'🍚',kind:'eat',furniture:['f3','f11','s4'],intro:'一緒に食べよう。'},
 {label:'一緒にテレビ',icon:'📺',kind:'sway',furniture:['f10'],intro:'この番組を見よう。'},
 {label:'お茶会',icon:'☕',kind:'eat',furniture:['s0','f3'],intro:'お茶にしよう。'},
 {label:'のんびりおしゃべり',icon:'💬',kind:'chat',furniture:[],intro:'少し話そう。'}];
const replies={0:'お茶菓子は特売ですわ。',1:'未来でもこんな時間があるよ。',4:'カレーも持ってきたぞ。',6:'休憩時間を延長します。',7:'寝ながら参加していい？',8:'こういう時間がええのう。',9:'集合写真も撮りたいもん。',21:'……ここにいる。',34:'五分だけ目を閉じるね。',40:'少し離れて座るね。',41:'共同休憩を開始します。',45:'おやつは公平に分けるぞ。'};
export function chooseGathering(state,actor,rng=Math.random){
 const others=state.actors.filter(a=>a.id!==actor.id&&voices[a.id]);if(!others.length||!voices[actor.id])return null;
 const options=gatherings.filter(g=>!g.furniture.length||state.decor.some(f=>g.furniture.includes(f.id)));const g=options[Math.floor(rng()*options.length)];
 const pool=[...others],members=[actor];while(pool.length&&members.length<3){members.push(pool.splice(Math.floor(rng()*pool.length),1)[0]);}
 const target=state.decor.find(f=>g.furniture.includes(f.id));const x=Math.max(23,Math.min(77,target?.x??actor.x)),y=Math.max(52,Math.min(80,(target?.y??actor.y)+5));
 return {...g,target,members,positions:members.map((_,i)=>({x:x+(i-(members.length-1)/2)*15,y:y+(i%2)*8})),lines:members.map((a,i)=>i===0?(a.id===21?'……一緒に。':g.intro+' '+voices[a.id][6]):(replies[a.id]||voices[a.id][7]))};
}
