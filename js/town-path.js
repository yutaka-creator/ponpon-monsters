import {walkable} from './town-data.js?v=114911';
export function townPath(x,y,tx,ty,people,building){
 const goal=building?(a,b)=>a===building.x+1&&b===(building.y===1?3:7):walkable(tx,ty,people)?(a,b)=>a===tx&&b===ty:(a,b)=>Math.abs(a-tx)+Math.abs(b-ty)===1;
 const q=[[x,y,[]]],seen=new Set([x+','+y]);
 for(let i=0;i<q.length;i++){const [a,b,p]=q[i];if(goal(a,b))return p;for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=a+dx,ny=b+dy,k=nx+','+ny;if(!seen.has(k)&&walkable(nx,ny,people)){seen.add(k);q.push([nx,ny,[...p,[dx,dy]]]);}}}return null;
}
