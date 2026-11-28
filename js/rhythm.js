import {gameClock} from "./pause-clock.js?v=11440";
const {performance,requestAnimationFrame,cancelAnimationFrame}=gameClock("game");
// Three timed beats; all timings are editable here.
export const settings={interval:850,perfect:145,good:280,lead:1000};
export function gripPercent(scores){return scores.length===3&&scores.every(s=>s===100)?150:scores.reduce((a,b)=>a+b,0)/3;}
export function createRhythm(onFinish){
 const panel=document.querySelector('#rhythm'), marker=document.querySelector('#beat-marker'), result=document.querySelector('#beat-result'), slots=[...document.querySelectorAll('.beat-slot')];
 const meter=document.querySelector("#grip-meter"),value=document.querySelector("#grip-value");
 function display(){const n=gripPercent(scores);meter.value=n;value.textContent=`${Math.round(n)}%`;panel.classList.toggle("gold-grip",n===150);}
 let active=false, index=0, start=0, scores=[], raf=0, audio;
 function tone(freq){try{audio ||= new (window.AudioContext||window.webkitAudioContext)();audio.resume().catch(()=>{});const o=audio.createOscillator(),g=audio.createGain();o.frequency.value=freq;g.gain.setValueAtTime(.07,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.13);o.connect(g).connect(audio.destination);o.start();o.stop(audio.currentTime+.14);}catch{}}
 function record(score){if(!active)return; scores.push(score);display();const label=score===100?'PERFECT':score===70?'GOOD':'MISS';slots[index].textContent=label;slots[index].dataset.score=score;result.textContent=label;tone(score===100?880:score===70?660:220);index++;if(index===3){active=false;cancelAnimationFrame(raf);const combo=scores.every(s=>s===100);result.textContent=combo?'ALL PERFECT！ 掴む力150%':`握力 ${Math.round(scores.reduce((a,b)=>a+b,0)/3)}%`;onFinish({scores:[...scores],combo,power:combo?1.5:scores.reduce((a,b)=>a+b,0)/300});}}
 function tick(now){if(!active)return;let target=start+index*settings.interval;while(active&&now>target+settings.good){record(30);target=start+index*settings.interval;}if(!active)return;marker.style.left=`${Math.max(0,Math.min(100,50+(now-target)/settings.interval*100))}%`;raf=requestAnimationFrame(tick);}
 return {start(){active=true;index=0;scores=[];display();start=performance.now()+settings.lead;slots.forEach(s=>{s.textContent='—';delete s.dataset.score;});panel.hidden=false;result.textContent='中央に重なったら押してね！';tone(440);raf=requestAnimationFrame(tick);},hit(){if(!active)return;const now=performance.now(),target=start+index*settings.interval; if(now<target-settings.interval/2)return;const d=Math.abs(now-target);record(d<=settings.perfect?100:d<=settings.good?70:30);},hide(){panel.hidden=true;}};
}
