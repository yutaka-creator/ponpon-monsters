export const DURATION=10000;
export function startRound(now){return {start:now,count:0,rare:0,score:0};}
export function remaining(round,now){return Math.max(0,DURATION-Math.max(0,now-round.start));}
export function scoop(round,now,random=Math.random){if(!remaining(round,now))return null;const rare=random()<.05;round.count++;round.rare+=Number(rare);round.score+=rare?3:1;return {rare,id:Math.min(9,Math.floor(random()*10))};}
