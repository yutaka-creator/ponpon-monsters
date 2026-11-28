export const MAX_STAGE=100;
export const dirs=[[0,-1],[1,0],[0,1],[-1,0]];
export function canExit(piece,pieces,size){const [dx,dy]=dirs[piece.dir];for(let x=piece.x+dx,y=piece.y+dy;x>=0&&y>=0&&x<size&&y<size;x+=dx,y+=dy)if(pieces.some(p=>p.x===x&&p.y===y))return false;return true;}
function baseStage(stage){
 const size=stage<=3?4:stage<=7?5:stage<=30?6:stage<=60?7:8;
 const target=stage<=10?Math.min(size*size-3,5+stage*3):Math.min(size*size-5,Math.round(size*size*(.65+stage*.0025)));
 let seed=stage*871+23;const rand=n=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return Math.floor(seed/4294967296*n);};
 // Build a dependency chain backwards: each new piece can exit before older pieces,
 // but preferentially blocks an older piece's ray.
 const pieces=[];let retries=0;
 while(pieces.length<target){
 const choices=[];
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
 if(pieces.some(p=>p.x===x&&p.y===y))continue;
 const blocks=pieces.filter(p=>{const [dx,dy]=dirs[p.dir];return dx?y===p.y&&(x-p.x)*dx>0:x===p.x&&(y-p.y)*dy>0;}).length;
 for(let dir=0;dir<4;dir++){const p={x,y,dir};if(canExit(p,pieces,size))choices.push({...p,blocks});}}
 if(!choices.length){if(++retries>=64)break;pieces.length=0;continue;}
 const max=Math.max(...choices.map(p=>p.blocks));
 const pool=max>0&&rand(100)<Math.min(98,55+stage)?choices.filter(p=>p.blocks===max):choices;
 const {blocks,...p}=pool[rand(pool.length)];pieces.push({...p,id:pieces.length,monster:rand(10)});
 }
 return {size,pieces,shape:stage<=10?'基本':stage<=30?'連鎖':stage<=60?'交差': '複雑な連鎖'};
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
