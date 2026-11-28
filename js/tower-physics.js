import {balance} from './tower-balance.js?v=11460';
import {powerFor} from './tower-powers.js?v=11460';
import {TYPES,blockType,difficulty,hit} from './tower-blocks.js?v=11460';
export const W=320,H=520,R=13;
export function create(id="demo"){return {power:powerFor(id),usedPower:false,hits:0,x:160,y:75,vx:65,vy:340,paddle:160,paddleY:45,targetX:160,targetY:45,camera:0,best:0,blocks:[],row:0,over:false,broken:0,stars:0,shield:false,notice:""};}
export function fill(s){while(s.row*75+210<s.camera+H+150){let y=s.row*75+210;for(let i=0;i<5;i++)if((i+s.row*2)%5!==2&&(i+s.row)%7!==0){const type=blockType(s.row,i);s.blocks.push({x:12+i*60,y,w:54,h:22,type,hp:TYPES[type].hp});};s.row++;}}
// Paddle face uses a conservative rectangle; sweep in small increments to prevent tunneling.
export function movePaddle(s,dt){
 const w=s.power.width, clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 const tx=clamp(s.targetX,w,W-w),ty=clamp(s.targetY,42,H-12);
 const dx=tx-s.paddle,dy=ty-s.paddleY,d=Math.hypot(dx,dy),f=Math.min(1,480*dt/(d||1));
 const n=Math.max(1,Math.ceil(d*f/2));
 const clear=(x,y)=>!s.blocks.some(b=>x+w>b.x&&x-w<b.x+b.w&&y+s.camera+10>b.y&&y+s.camera-38<b.y+b.h);
 for(let i=0;i<n;i++){let x=s.paddle+dx*f/n,y=s.paddleY+dy*f/n;if(clear(x,y)){s.paddle=x;s.paddleY=y;}else{if(clear(x,s.paddleY))s.paddle=x;if(clear(s.paddle,y))s.paddleY=y;}}
}
export function step(s,dt){if(s.over)return;fill(s);let old=s.y,oldPy=s.camera+s.paddleY;movePaddle(s,dt);const tune=balance(s.best);s.vy-=tune.gravity*s.power.gravity*dt;if(s.power.magnet&&s.vy<0&&Math.abs(s.y-s.camera-s.paddleY)<100&&Math.abs(s.x-s.paddle)<95)s.vx+=Math.sign(s.paddle-s.x)*s.power.magnet*dt;s.x+=s.vx*dt;s.y+=s.vy*dt;if(s.x<R){s.x=R;s.vx=Math.abs(s.vx)*s.power.wall;}if(s.x>W-R){s.x=W-R;s.vx=-Math.abs(s.vx)*s.power.wall;}let py=s.camera+s.paddleY;if(s.vy<0&&old-R>=oldPy&&s.y-R<=py&&Math.abs(s.x-s.paddle)<s.power.width+R+tune.assist){s.hits++;s.y=py+R;s.vy=tune.bounce*s.power.bounce;s.vx=Math.max(-tune.speed,Math.min(tune.speed,(s.x-s.paddle)*s.power.steer));}for(let i=s.blocks.length-1;i>=0;i--){let b=s.blocks[i];if(s.x+R>b.x&&s.x-R<b.x+b.w&&s.y+R>b.y&&s.y-R<b.y+b.h){if(hit(s,b))s.blocks.splice(i,1);else s.y=b.y-R-1;break;}}s.best=Math.max(s.best,s.y-75);const prevCamera=s.camera;s.camera=Math.max(s.camera,s.y-310);s.paddleY=s.paddleY-(s.camera-prevCamera);s.blocks=s.blocks.filter(b=>b.y>s.camera-40);if(s.y<s.camera-25){if(s.shield){s.shield=false;s.x=s.paddle;s.y=s.camera+s.paddleY+30;s.vy=390;s.vx=0;s.notice="復活！";}else if(!s.usedPower&&(s.power.rescue||s.power.jump)){s.usedPower=true;s.x=s.power.rescue?s.paddle:Math.max(R,Math.min(W-R,s.x));s.y=s.camera+s.paddleY+30;s.vy=440;s.vx=0;s.notice=s.power.name+" 発動！";}else s.over=true;}}
