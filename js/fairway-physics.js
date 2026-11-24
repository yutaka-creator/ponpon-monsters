export const CUP={x:0,z:-82};
export const ground=(x,z)=>0.65*Math.sin(z*.075)*Math.sin(x*.09);
export function shoot(b,angle,power){const a=angle*Math.PI/180,p=power/100;b.vx=Math.sin(a)*p*25;b.vz=-Math.cos(a)*p*25;b.vy=p*10;b.air=true;}
export function tick(b,dt){b.x+=b.vx*dt;b.z+=b.vz*dt;b.y+=b.vy*dt;b.vy-=18*dt;const h=ground(b.x,b.z)+.38;if(b.y<=h){b.y=h;if(b.vy< -2){b.vy=-b.vy*.24;b.vx*=.75;b.vz*=.75;}else{b.vy=0;b.air=false;const f=Math.exp(-2.1*dt);b.vx*=f;b.vz*=f;}}if(Math.abs(b.x)>23||b.z>12||b.z< -105)return 'out';if(!b.air&&Math.hypot(b.x-CUP.x,b.z-CUP.z)<1.05&&Math.hypot(b.vx,b.vz)<9)return 'hole';if(!b.air&&Math.hypot(b.vx,b.vz)<.18)return 'stop';return 'moving';}
