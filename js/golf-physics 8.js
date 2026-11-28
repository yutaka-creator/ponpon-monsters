export const R=13,W=640,H=440;
export const inside=(x,y,r)=>x>=r[0]&&x<=r[0]+r[2]&&y>=r[1]&&y<=r[1]+r[3];
export function step(b,c,dt,a={},rules={}){
 if(a.magnet){const dx=c.hole[0]-b.x,dy=c.hole[1]-b.y,d=Math.hypot(dx,dy);if(d>0&&d<75){b.vx+=dx/d*95*dt;b.vy+=dy/d*95*dt;}}
 if(c.current&&Math.hypot(b.vx,b.vy)>8){b.vx+=c.current[0]*dt;b.vy+=c.current[1]*dt;}
 const oldX=b.x,oldY=b.y; b.x+=b.vx*dt;b.y+=b.vy*dt;
 if(b.x<R||b.x>W-R){b.x=Math.max(R,Math.min(W-R,b.x));b.vx*=-(a.bounce??.78);}
 if(b.y<R||b.y>H-R){b.y=Math.max(R,Math.min(H-R,b.y));b.vy*=-(a.bounce??.78);}
 for(const [x,y,w,h] of c.walls){if(inside(b.x,b.y,[x-R,y-R,w+2*R,h+2*R])){if(b.jump){b.jump=false;b.jumped=true;b.skipWall=[x,y,w,h].join();}if(b.skipWall===[x,y,w,h].join())continue;if(oldX<=x-R||oldX>=x+w+R){b.x=oldX;b.vx*=-(a.bounce??.78);}else{b.y=oldY;b.vy*=-(a.bounce??.78);}}}
 if(b.skipWall&&!c.walls.some(r=>r.join()===b.skipWall&&inside(b.x,b.y,[r[0]-R,r[1]-R,r[2]+2*R,r[3]+2*R])))b.skipWall=null;
 if(c.portal){const near=c.portal.findIndex(p=>Math.hypot(b.x-p[0],b.y-p[1])<18);if(near<0)b.portalLock=false;else if(!b.portalLock){[b.x,b.y]=c.portal[1-near];b.portalLock=true;}}
 const wet=c.water.some(r=>inside(b.x,b.y,r));if(wet&&!a.float)return 'water';
 const speed=Math.hypot(b.vx,b.vy);if(Math.hypot(b.x-c.hole[0],b.y-c.hole[1])<(rules.cupRadius??25)&&speed<(rules.cupSpeed??320))return 'hole';
 const friction=Math.exp(-(c.sand.some(r=>inside(b.x,b.y,r))?4.5:wet?2.1:1.05)*(a.friction??1)*(c.friction??1)*dt);b.vx*=friction;b.vy*=friction;
 if(Math.hypot(b.vx,b.vy)<8){b.vx=b.vy=0;return 'stop';}return 'moving';
}
