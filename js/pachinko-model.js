export const LIMIT=20;
export const gates=[{y:174,amp:85,speed:1.5,width:54},{y:239,amp:65,speed:2,width:44},{y:304,amp:42,speed:2.5,width:34}];
export const pegs=Array.from({length:5},(_,r)=>Array.from({length:8},(_,c)=>({x:24+c*38+(r%2)*12,y:42+r*24}))).flat();
export function gateX(i,t){const g=gates[i];return 160+g.amp*Math.sin(t*g.speed+i*1.8);}
export function launch(x){return {x:Math.max(30,Math.min(290,x)),y:12,vx:0,vy:0,stage:0,done:false,win:false};}
export function step(b,t,dt){if(b.done)return b;const oldY=b.y;b.vy=Math.min(230,b.vy+300*dt);b.x+=b.vx*dt;b.y+=b.vy*dt;if(b.x<7||b.x>313){b.x=Math.max(7,Math.min(313,b.x));b.vx*=-.75;}for(const p of pegs){const dx=b.x-p.x,dy=b.y-p.y,d=Math.hypot(dx,dy);if(d<10&&d>0){b.x=p.x+dx/d*10;b.y=p.y+dy/d*10;b.vx=dx/d*90+(dx>=0?12:-12);b.vy=Math.max(45,b.vy*.65);}}const g=gates[b.stage];if(g&&oldY<g.y&&b.y>=g.y){if(Math.abs(b.x-gateX(b.stage,t))<=g.width/2-5){b.stage++;if(b.stage===3){b.done=true;b.win=true;}}else{b.done=true;}}if(b.y>355)b.done=true;return b;}
