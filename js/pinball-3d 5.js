import * as T from 'three';
import {renderBudget,renderGate} from './render-budget.js?v=11460';
import {displayedFlippers} from './pinball-physics.js?v=11460';
export function createPinball3D(host,source){
 const budget=renderBudget(matchMedia('(pointer: coarse)').matches,devicePixelRatio), gate=renderGate(budget.fps);
 const renderer=new T.WebGLRenderer({antialias:budget.antialias,powerPreference:'low-power'});renderer.setPixelRatio(budget.ratio);
 const scene=new T.Scene();scene.background=new T.Color('#25382f');const camera=new T.PerspectiveCamera(38,2/3,1,2000);camera.position.set(160,650,570);camera.lookAt(160,0,240);
 scene.add(new T.HemisphereLight(0xffffff,0x65503d,2));const light=new T.DirectionalLight(0xffffff,2);light.position.set(-100,400,100);scene.add(light);
 const texture=new T.CanvasTexture(source);texture.colorSpace=T.SRGBColorSpace;const board=new T.Mesh(new T.PlaneGeometry(320,480),new T.MeshBasicMaterial({map:texture}));board.rotation.x=-Math.PI/2;board.position.set(160,0,240);scene.add(board);
 const group=new T.Group();scene.add(group);let tableId=-1,bumps=[],flips=[],balls=[];const mat=(color)=>new T.MeshStandardMaterial({color,roughness:.48});
 function mesh(geo,color,x,y,z){const m=new T.Mesh(geo,mat(color));m.position.set(x,y,z);group.add(m);return m;}
 function rail(a,width,height,color){const m=mesh(new T.BoxGeometry(1,height,width),color,0,height/2,0);place(m,a);return m;}
 function place(m,a){m.position.x=(a[0]+a[2])/2;m.position.z=(a[1]+a[3])/2;m.scale.x=Math.hypot(a[2]-a[0],a[3]-a[1]);m.rotation.y=-Math.atan2(a[3]-a[1],a[2]-a[0]);}
 function rebuild(table){for(const m of [...group.children]){m.geometry.dispose();m.material.dispose();group.remove(m);}mesh(new T.BoxGeometry(338,18,498),table.accent,160,-10,240);for(const a of [[-5,-5,325,-5],[-5,-5,-5,485],[325,-5,325,485],[-5,485,325,485]])rail(a,10,22,table.accent);for(const a of table.rails)rail(a,7,10,table.accent);bumps=table.bumpers.map(b=>mesh(new T.CylinderGeometry(b.r,b.r+3,12,32),'#e8bd73',b.x,6,b.y));flips=[rail([0,0,1,0],13,10,'#a34e42'),rail([0,0,1,0],13,10,'#a34e42')];balls=Array.from({length:3},()=>mesh(new T.SphereGeometry(9,20,14),'#80b7d4',0,9,0));tableId=table.id;}
 host.append(renderer.domElement);let w=0,h=0;
 return {canvas:renderer.domElement,draw(s,table,input,t){if(!gate(t))return;if(tableId!==table.id)rebuild(table);const rect=host.getBoundingClientRect();const nw=Math.max(1,Math.round(rect.width)),nh=Math.max(1,Math.round(rect.height));if(w!==nw||h!==nh){w=nw;h=nh;renderer.setSize(w,h,false);camera.aspect=w/h;camera.fov=Math.max(38,2*Math.atan(Math.tan(38*Math.PI/360)*(2/3)/camera.aspect)*180/Math.PI);camera.updateProjectionMatrix();}texture.needsUpdate=true;displayedFlippers(s,input).forEach((a,i)=>place(flips[i],a));bumps.forEach((m,i)=>{m.material.color.set(s.lit.includes(i)?'#85d9a2':'#e8bd73');m.material.emissive.set(s.fever>0?new T.Color().setHSL((s.fever*.4+i*.15)%1,.8,.3):0x000000);});const states=[s.over?null:s,...s.extra];balls.forEach((m,i)=>{const b=states[i];m.visible=!!b;if(b)m.position.set(b.x,9,b.y);});renderer.render(scene,camera);}};
}
