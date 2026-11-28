export const MAX_WAVE=10;
export const BOSSES={3:{name:'巨大カレー大王',hp:18,photo:4,color:'#ffb35b',pattern:'spread',score:500},6:{name:'暴走resource',hp:28,photo:6,color:'#8deaff',pattern:'aim',score:800},8:{name:'宇宙かずじぃ',hp:36,photo:8,color:'#e4bd6d',pattern:'wall',score:1000},10:{name:'巨大こぺ',hp:48,photo:9,color:'#a8ed8a',pattern:'mixed',score:1500}};
export function bossFor(w){const b=BOSSES[w];return b?{...b,x:160,y:65,max:b.hp,boss:true,phase:0,volley:0}:null;}
export function bossMove(e,dt){e.phase+=dt;e.x=160+105*Math.sin(e.phase*(e.pattern==='aim'?1.25:.85));e.y=65+12*Math.sin(e.phase*.7);}
export function bossShots(e,target){e.volley++;let p=e.pattern;if(p==='mixed')p=['spread','aim','wall'][e.volley%3];const aim=Math.max(-100,Math.min(100,(target-e.x)*.55));const velocities=p==='spread'?[-95,0,95]:p==='aim'?[aim-28,aim+28]:[-120,-60,0,60,120];return velocities.map(vx=>({x:e.x,y:e.y+30,vx,speed:p==='aim'?175:135}));}
