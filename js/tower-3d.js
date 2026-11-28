import {renderBudget,renderGate} from './render-budget.js?v=1139';
import * as T from 'three';
import {W,H} from './tower-physics.js?v=1139';
import {TYPES} from './tower-blocks.js?v=1139';
export function createTower3D(){
 const budget=renderBudget(matchMedia("(pointer: coarse)").matches,devicePixelRatio);const renderer=new T.WebGLRenderer({alpha:false,antialias:budget.antialias,powerPreference:"low-power"});renderer.setPixelRatio(budget.ratio);renderer.setSize(W,H,false);
 const scene=new T.Scene(), camera=new T.OrthographicCamera(0,W,H,0,1,1500);camera.position.set(0,0,600);camera.lookAt(0,0,0);
 scene.add(new T.HemisphereLight(0xffffff,0x475348,2));const light=new T.DirectionalLight(0xffeed8,2.4);light.position.set(-150,350,400);scene.add(light);
 const mat=c=>new T.MeshStandardMaterial({color:c,roughness:.8});const wall=mat('#526b50'),back=mat('#30483b'),edge=mat('#829b78');
 function mesh(geo,m,x,y,z){const o=new T.Mesh(geo,m);o.position.set(x,y,z);scene.add(o);return o;}
 mesh(new T.BoxGeometry(W,H,12),back,W/2,H/2,-90);
 for(const x of [0,W]){mesh(new T.BoxGeometry(14,H,100),wall,x,H/2,-45);mesh(new T.BoxGeometry(5,H,8),edge,x,H/2,9);}
 const seams=Array.from({length:19},()=>mesh(new T.BoxGeometry(W,2,2),wall,W/2,0,-82));
 const blocks=new Map(),geometry=new T.BoxGeometry(54,22,30);const materials=Object.fromEntries(Object.entries(TYPES).map(([k,v])=>[k,mat(v.color)]));
 const paddle=mesh(new T.CylinderGeometry(1,1,8,budget.antialias?48:24),mat('#c65a49'),160,45,0);paddle.rotation.x=.28;
 const handle=mesh(new T.BoxGeometry(14,34,12),mat('#c9a47a'),160,24,0);
 const rim=mesh(new T.CylinderGeometry(1,1,3,budget.antialias?48:24),mat('#e6bd8b'),160,41,0);rim.rotation.x=.28;
 let lastWorld;
 return {draw(g,s,world,skin){if(skin){paddle.material.color.set(skin.face);rim.material.color.set(skin.rim);handle.material.color.set(skin.handle);}if(lastWorld!==world){back.color.set(world.bottom);wall.color.set(world.line);edge.color.set(world.top);lastWorld=world;}
 for(let i=0;i<seams.length;i++)seams[i].position.y=i*30-s.camera%30;
 const live=new Set();for(const b of s.blocks){live.add(b);let o=blocks.get(b);if(!o){o=mesh(geometry,materials[b.type],0,0,-12);blocks.set(b,o);}o.position.set(b.x+b.w/2,b.y-s.camera+b.h/2,-12);o.rotation.x=.18;o.rotation.y=-.12;}
 for(const [b,o] of blocks)if(!live.has(b)){scene.remove(o);blocks.delete(b);}
 paddle.position.x=rim.position.x=handle.position.x=s.paddle;paddle.position.y=s.paddleY;rim.position.y=s.paddleY-4;handle.position.y=s.paddleY-21;paddle.scale.set(s.power.width,1,25);rim.scale.copy(paddle.scale);
 renderer.render(scene,camera);g.drawImage(renderer.domElement,0,0,W,H);
 },lost(){return renderer.getContext().isContextLost();}};
}
