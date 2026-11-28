// 内部ID順。数値はここで調整できます。
export const abilities=[
 {name:'精密ショット',description:'弱いショットを細かく調整できる',power:.85,friction:1.15},
 {name:'未来ワープ',description:'各ホール1回、ショット方向へ最大60px移動',warp:60},
 {name:'虹のジャンプ',description:'各ホール1回、最初の壁を飛び越える',jump:true},
 {name:'安定ショット',description:'反射を抑えて安定して転がる',bounce:.65},
 {name:'カレーパワー',description:'ショット速度が25%アップ',power:1.25},
 {name:'恋の引力',description:'カップの近くで引き寄せられる',magnet:true},
 {name:'軌道分析',description:'予測軌道を長く表示する',preview:1.6},
 {name:'ぷかぷか浮遊',description:'池に落ちず、水上では減速する',float:true},
 {name:'じっくりショット',description:'速度を抑え、早めに止まる',power:.78,friction:1.3},
 {name:'美容反射',description:'壁での反射時に速度を保つ',bounce:.95}
];
export function launch(b,c,dx,dy,a,used){const len=Math.hypot(dx,dy);if(len<5)return false;const speed=Math.min(760,len*6)*(a.power??1);b.vx=dx/len*speed;b.vy=dy/len*speed;b.jump=!!a.jump&&!used;b.warped=false;if(a.warp&&!used){for(let i=0;i<a.warp;i++){const x=b.x+dx/len,y=b.y+dy/len;if(x<13||x>627||y<13||y>427||[...c.walls,...c.water].some(r=>x>=r[0]-13&&x<=r[0]+r[2]+13&&y>=r[1]-13&&y<=r[1]+r[3]+13))break;b.x=x;b.y=y;b.warped=true;}}return true;}
