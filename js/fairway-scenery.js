import * as T from 'three';
import {ground,CUP,course} from './fairway-physics.js?v=114924';
import {clearOfCup} from "./fairway-courses.js?v=114924";
export function addScenery(scene){
 const rand=(()=>{let s=241+course.id*7919;return ()=>((s=Math.imul(1664525,s)+1013904223|0)>>>0)/4294967296;})();
 const batches=[];
 function batch(geo,color,items){const m=new T.InstancedMesh(geo,new T.MeshStandardMaterial({color,roughness:1}),items.length);const o=new T.Object3D();items.forEach(([x,y,z,sx,sy,sz,r],i)=>{o.position.set(x,y,z);o.scale.set(sx,sy,sz);o.rotation.set(0,r,0);o.updateMatrix();m.setMatrixAt(i,o.matrix);});scene.add(m);batches.push(m);}
 const trunks=[],pine=[],leaves=[],rocks=[],flowers=[];
 for(let i=0;i<60;i++){const z=9-rand()*(course.length+35),x=(i%2?1:-1)*(16+rand()*23),y=ground(x,z),s=.7+rand()*.8;if(!clearOfCup(course,x,z,4))continue;trunks.push([x,y+s,z,s,s,s,rand()*6]);if(i%3){for(let j=0;j<3;j++)pine.push([x,y+(2+j*.85)*s,z,s*(1-j*.19),s,s*(1-j*.19),rand()*6]);}else{for(let j=0;j<3;j++)leaves.push([x+(j-1)*s,y+(2.5+j%2)*s,z,s,s,s,rand()*6]);}}
 for(let i=0;i<85;i++){const z=8-rand()*(course.length+20),x=(i%2?1:-1)*(14+rand()*7),y=ground(x,z);if(!clearOfCup(course,x,z,1))continue;if(i%4===0)rocks.push([x,y+.2,z,.5,.4,.6,rand()*6]);else flowers.push([x,y+.16,z,.14,.22,.14,rand()*6]);}
 batch(new T.CylinderGeometry(.18,.29,2,7),0x795334,trunks);batch(new T.ConeGeometry(1.8,2.8,8),([4,7].includes(course.id)?0x9c9a58:course.id===13?0xc8e4ec:course.id===14?0xc980b1:0x347348),pine);batch(new T.IcosahedronGeometry(1.4,1),(course.id===13?0xe2f0f5:course.id===14?0xe7a8cc:course.id===4?0xc6a35c:0x75a65b),leaves);batch(new T.DodecahedronGeometry(1,0),0x96988b,rocks);batch(new T.IcosahedronGeometry(1,0),0xf6d47b,flowers);
 const flagGeo=new T.PlaneGeometry(1.2,.65,12,3),flag=new T.Mesh(flagGeo,new T.MeshStandardMaterial({color:0xef654e,side:T.DoubleSide}));flag.position.set(CUP.x+.6,ground(CUP.x,CUP.z)+2.7,CUP.z);scene.add(flag);const p=flagGeo.attributes.position;
 function animate(t){for(let i=0;i<p.count;i++){const x=p.getX(i);p.setZ(i,(x+.6)*.13*Math.sin(t*.003+x*5));}p.needsUpdate=true;flagGeo.computeVertexNormals();}
 animate.setQuality=q=>{batches.forEach((m,i)=>{m.count=Math.min(m.instanceMatrix.count,Math.ceil(m.instanceMatrix.count*(i<3?q.trees/60:q.details/85)));});};return animate;
}
