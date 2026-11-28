export const MAX_STAGE=100;
export const dirs=[[0,-1],[1,0],[0,1],[-1,0]];
export function canExit(piece,pieces,size){const [dx,dy]=dirs[piece.dir];for(let x=piece.x+dx,y=piece.y+dy;x>=0&&y>=0&&x<size&&y<size;x+=dx,y+=dy)if(pieces.some(p=>p.x===x&&p.y===y))return false;return true;}
function legacyStage(stage){const size=stage<=3?4:stage<=7?5:6;let seed=stage*871+23;const rand=n=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n;};const pieces=[];const target=Math.min(size*size-3,5+stage*3);while(pieces.length<target){const choices=[];for(let y=0;y<size;y++)for(let x=0;x<size;x++){if(pieces.some(p=>p.x===x&&p.y===y))continue;for(let dir=0;dir<4;dir++){const p={x,y,dir};if(canExit(p,pieces,size))choices.push(p);}}if(!choices.length){pieces.length=0;continue;}pieces.push({...choices[rand(choices.length)],id:pieces.length,monster:rand(10)});}return {size,pieces};}

function baseStage(stage){
 if(stage<=10)return {...legacyStage(stage),shape:'基本'};
 const size=stage<=30?6:stage<=60?7:8;
 const shapes=['四角','ハート','ひし形','十字','渦巻き','迷路'];
 const shape=shapes[Math.floor((stage-11)/5)%shapes.length];
 const cells=[];const c=(size-1)/2;
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
 const dx=Math.abs(x-c),dy=Math.abs(y-c);
 const ok=shape==='四角'||(shape==='ハート'&&(y<2?dx>0.6&&dx<c:y<Math.floor(size/2)+1||dx+dy<=c+1))||(shape==='ひし形'&&dx+dy<=c+0.5)||(shape==='十字'&&(dx<=1.5||dy<=1.5))||(shape==='渦巻き'&&(Math.min(x,y,size-1-x,size-1-y)%2===0||x===1))||(shape==='迷路'&&(y%2===0||x===(Math.floor(y/2)%2?0:size-1)));
 if(ok)cells.push({x,y});}
 let seed=stage*871+23;const rand=n=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return Math.floor(seed/4294967296*n);};
 const pieces=[];const target=Math.min(cells.length,Math.max(18,Math.round(cells.length*(0.72+stage*0.0028))));
 while(pieces.length<target){const choices=[];for(const cell of cells){if(pieces.some(p=>p.x===cell.x&&p.y===cell.y))continue;for(let dir=0;dir<4;dir++){const p={...cell,dir};if(canExit(p,pieces,size))choices.push(p);}}if(!choices.length)break;const weights=choices.filter(p=>{const [dx,dy]=dirs[p.dir];return p.x+dx>=0&&p.x+dx<size&&p.y+dy>=0&&p.y+dy<size;});const pool=weights.length&&rand(100)<stage?weights:choices;pieces.push({...pool[rand(pool.length)],id:pieces.length,monster:rand(10)});}
 return {size,pieces,shape};
}

// Fixed obstacles occupy only unused cells and never block a piece's original ray.
export function makeStage(stage){
 const level=baseStage(stage),{size,pieces}=level;const rocks=[];
 if(stage>=21)for(let y=0;y<size;y++)for(let x=0;x<size;x++){
 if(rocks.length>=Math.min(5,Math.floor(stage/20)))break;
 if(pieces.some(p=>p.x===x&&p.y===y))continue;
 if(pieces.some(p=>{const [dx,dy]=dirs[p.dir];return dx?y===p.y&&(x-p.x)*dx>0:x===p.x&&(y-p.y)*dy>0;}))continue;
 rocks.push({x,y,rock:true});}
 // Ice thaws on tap; rotating pieces may be turned to their original safe direction.
 return {...level,rocks,pieces:pieces.map((p,i)=>({...p,kind:stage>=61&&i%13===1?'warp':stage>=41&&i%9===2?'ice':stage>=31&&i%7===0?'rotate':'normal',safeDir:p.dir,dir:stage>=31&&i%7===0&&!(stage>=61&&i%13===1)&&!(stage>=41&&i%9===2)?(p.dir+1)%4:p.dir}))};
}
export function ready(p,pieces,rocks,size){return (p.kind!=='rotate'||p.dir===p.safeDir)&&(p.kind==='warp'||canExit(p,[...pieces,...rocks],size));}
