import {createSlot,slotHit,tickSlot} from './pinball-slot.js?v=114924';
import {powerFor} from './pinball-powers.js?v=114924';
import {tableFor} from './pinball-tables.js?v=114924';
export const bumpers=[{x:100,y:115,r:24},{x:205,y:115,r:24},{x:150,y:185,r:26}];
export const rails=[[12,320,70,395],[278,320,230,395],[12,65,55,15],[55,15,250,15],[250,15,300,65],[278,85,278,350],[55,230,85,280],[235,230,205,280]];
export function create(table=0,hero=3){const p=powerFor(hero);return {hero:p.id,revive:!!p.revive,warp:!!p.warp,slow:0,table:tableFor(table).id,x:292,y:420,vx:0,vy:0,balls:p.balls,score:0,ready:true,over:false,charge:0,combo:0,comboTime:0,fever:0,gauge:0,lit:[],extra:[],slot:createSlot()};}
export function launch(s){if(!s.ready||s.over)return;s.ready=false;s.slow=powerFor(s.hero).slow?3:0;s.vy=-650-250*s.charge;s.vx=0;s.charge=0;}
export function flippers(input){return [[70,395,70+67*Math.cos(input.left?-.65:.35),395+67*Math.sin(input.left?-.65:.35),input.left],[230,395,230-67*Math.cos(input.right?-.65:.35),395+67*Math.sin(input.right?-.65:.35),input.right]];}
function segment(s,a,kick=false,radius=12.5){let [x,y,X,Y]=a,dx=X-x,dy=Y-y,t=Math.max(0,Math.min(1,((s.x-x)*dx+(s.y-y)*dy)/(dx*dx+dy*dy))),nx=s.x-x-t*dx,ny=s.y-y-t*dy,d=Math.hypot(nx,ny);if(d>=radius)return;if(d<1e-8){const len=Math.hypot(dx,dy);nx=-dy/len;ny=dx/len;if(s.vx*nx+s.vy*ny>0){nx=-nx;ny=-ny;}d=0;}else{nx/=d;ny/=d;}s.x+=nx*(radius-d+.01);s.y+=ny*(radius-d+.01);let v=s.vx*nx+s.vy*ny;if(v<0){s.vx-=1.8*v*nx;s.vy-=1.8*v*ny;}if(kick&&ny<.4&&v<0){s.vy=-Math.max(650,Math.abs(s.vy));s.vx+=nx*130;}}
function motionSlice(s,input,dt,arms){if(s.over)return;if(s.ready){if(input.launch)s.charge=Math.min(1,s.charge+dt);return;}if(s.slow>0){s.slow=Math.max(0,s.slow-dt);dt*=.65;}s.vy+=440*dt;s.x+=s.vx*dt;s.y+=s.vy*dt;if(s.x<12){s.x=12;s.vx=Math.abs(s.vx)*.85;}if(s.x>308){s.x=308;s.vx=-Math.abs(s.vx)*.85;}if(s.x>278&&s.vy<0&&s.y<85){s.x=265;s.vx=-180;s.vy=-Math.abs(s.vy)*.55;}if(s.y<25){s.y=25;s.vy=Math.abs(s.vy)*.65;s.vx=-160;}for(const a of tableFor(s.table).rails)segment(s,a);for(const b of tableFor(s.table).bumpers){let dx=s.x-b.x,dy=s.y-b.y,d=Math.hypot(dx,dy);if(d<b.r+9){let nx=d>1e-8?dx/d:0,ny=d>1e-8?dy/d:-1;s.x=b.x+nx*(b.r+9);s.y=b.y+ny*(b.r+9);if(s.vx*nx+s.vy*ny<0||d<1e-8){s.vx=nx*340;s.vy=ny*340;hit(s,tableFor(s.table).bumpers.indexOf(b));}}}for(const a of arms)segment(s,a,a[4],15.5);let speed=Math.hypot(s.vx,s.vy);if(speed>950){s.vx*=950/speed;s.vy*=950/speed;}if(Math.hypot(s.vx,s.vy)<45){s.stuck=(s.stuck||0)+dt;if(s.stuck>1.2){s.vx=s.x<160?100:-100;s.vy=-180;s.stuck=0;}}else s.stuck=0;if(s.secondary)return;if(s.y>455&&s.warp){s.warp=false;Object.assign(s,{x:150,y:80,vx:80,vy:100});return;}if(s.y>490){if(s.extra.length){Object.assign(s,s.extra.shift());s.secondary=false;return;}if(s.revive){s.revive=false;}else s.balls--;s.over=s.balls===0;s.ready=!s.over;Object.assign(s,{x:292,y:420,vx:0,vy:0,charge:0});}}

// Bound displacement to 2 px per substep; sweep the flipper angle as well.
function motion(s,input,dt,arms){
 if(s.ready||s.over){motionSlice(s,input,dt,arms);return;}
 const count=Math.max(1,Math.ceil(dt*(Math.hypot(s.vx,s.vy)+440*dt)/2),Math.ceil(dt*240));
 for(let i=0;i<count;i++){motionSlice(s,input,dt/count,arms);if(s.ready||s.over)break;}
}
function animatedArms(s,input,dt){
 const prev=s.armAngles||[.35,.35],target=[input.left?-.65:.35,input.right?-.65:.35];
 const next=prev.map((a,i)=>a+Math.max(-dt*22,Math.min(dt*22,target[i]-a)));s.armAngles=next;
 return next.map((a,i)=>[i?230:70,395,(i?230:70)+(i?-1:1)*67*Math.cos(a),395+67*Math.sin(a),!!(i?input.right:input.left)]);
}
export function displayedFlippers(s,input){return s.armAngles?s.armAngles.map((a,i)=>[i?230:70,395,(i?230:70)+(i?-1:1)*67*Math.cos(a),395+67*Math.sin(a),!!(i?input.right:input.left)]):flippers({});}

export function feverMultiplier(s){return s.fever>0?(s.slot.jackpotTime>0?3:2):1;}
export function hit(s,index){slotHit(s.slot);s.combo=s.comboTime>0?s.combo+1:1;s.comboTime=s.hero===6?4:2;s.score+=Math.round(100*powerFor(s.hero).points*Math.min(5,s.combo)*feverMultiplier(s));if(!s.lit.includes(index))s.lit.push(index);if(s.lit.length===tableFor(s.table).bumpers.length){s.score+=500;s.lit=[];s.gauge=Math.min(10,s.gauge+2);}if(!s.fever){s.gauge++;if(s.gauge>=10){s.gauge=0;s.fever=s.hero===9?25:15;while(s.extra.length<2)s.extra.push({x:150,y:285,vx:s.extra.length?150:-150,vy:-350});}}}
export function step(s,input,dt){tickSlot(s.slot,s,dt);if(s.over)return;s.comboTime=Math.max(0,s.comboTime-dt);if(!s.comboTime)s.combo=0;s.fever=Math.max(0,s.fever-dt);const arms=animatedArms(s,input,dt);motion(s,input,dt,arms);if(s.ready||s.over){s.extra=[];s.combo=0;s.comboTime=0;s.fever=0;s.slot.jackpotTime=0;return;}for(const b of [...s.extra]){const proxy={...s,...b,secondary:true,ready:false,slow:0};motion(proxy,input,dt,arms);for(const k of ['score','combo','comboTime','fever','gauge','lit'])s[k]=proxy[k];for(const k of ['x','y','vx','vy','stuck'])b[k]=proxy[k];if(b.y>490)s.extra.splice(s.extra.indexOf(b),1);}}
