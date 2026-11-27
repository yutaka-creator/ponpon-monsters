import {secrets} from './secrets.js?v=10000';
import * as T from 'three';
export const monsters=[
 ['Mrs.プリングルスアップル',0x66df16],['未来のパペットスソスソ',0x7779ee],['ユニコーン',0xb994e4],['地球',0x008cae],['味カレー',0xd98b08],['バレンタイン',0x783714],['resource（りそーす）',0x24b6d5],['うーぱーるーぱー',0x1528d4],['かずじぃ',0xff6508],['こぺ',0x079b42]
];
export const colors=monsters.map(m=>m[1]);
const sphere=new T.SphereGeometry(1,24,16), tuft=new T.SphereGeometry(1,8,6);
export function prize(i){
 if(i>=10){const s=secrets[i-10],g=prize(s.base);g.userData.monsterId=i;g.userData.name=s.name;g.userData.scale=s.scale||1;g.scale.setScalar(g.userData.scale);g.traverse(m=>{if(!m.isMesh)return;if(m.isInstancedMesh){for(let j=0;j<m.count;j++)m.setColorAt(j,new T.Color(s.color));m.instanceColor.needsUpdate=true;}else if(m.material.color.getHex()===colors[s.base])m.material.color.setHex(s.color);if(s.opacity){m.material.transparent=true;m.material.opacity=s.opacity;m.material.depthWrite=false;}});return g;}
 const g=new T.Group(), c=colors[i]; g.userData.name=monsters[i][0]; g.userData.monsterId=i;
 function ell(color,x,y,z,a,b,d,rot=0,rough=.85){const m=new T.Mesh(sphere,new T.MeshStandardMaterial({color,roughness:rough}));m.position.set(x,y,z);m.scale.set(a,b,d);m.rotation.z=rot;g.add(m);return m;}
 function line(points,color,r){const curve=new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p)));const m=new T.Mesh(new T.TubeGeometry(curve,24,r,8,false),new T.MeshStandardMaterial({color,roughness:.9}));g.add(m);}
 ell(c,0,0,0,.40,.40,.40);
 const wool=new T.InstancedMesh(tuft,new T.MeshStandardMaterial({roughness:1}),240), dummy=new T.Object3D();
 for(let j=0;j<240;j++){const y=1-2*(j+.5)/240,a=j*2.399963,s=Math.sqrt(1-y*y),x=s*Math.cos(a),z=s*Math.sin(a);dummy.position.set(.397*x,.397*y,.397*z);dummy.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),new T.Vector3(x,y,z));dummy.scale.set(.035+.012*(j%3),.064,.035);dummy.updateMatrix();wool.setMatrixAt(j,dummy.matrix);let col=c;if(i===3&&x<-.65)col=0xff6410;if(i===7&&x>.52)col=0x647b83;if(i===5&&z<-.65)col=0xf52259;wool.setColorAt(j,new T.Color(col).multiplyScalar(.85+.23*(j%7)/6));}g.add(wool);
 const eyeY=i===0||i===8||i===9?-.04:.08;
 for(const x of [-.105,.105]){ell(0xffffff,x,eyeY,.385,.112,.12,.075,0,.23);ell(0x151515,x,eyeY,.45,.047,.05,.024,0,.2);ell(0xffffff,x-.012,eyeY+.017,.472,.012,.012,.005);}
 function lips(color){ell(color,0,-.13,.405,.19,.075,.065,0,.23);ell(0x421e35,0,-.135,.462,.135,.023,.012);}
 function moustache(color,wide=.22){line([[-wide,-.105,.39],[-.12,-.16,.45],[0,-.13,.46],[.12,-.16,.45],[wide,-.105,.39]],color,.036);}
 function bow(color,x=.27,y=.25){ell(color,x-.055,y,.34,.09,.047,.025,-.55);ell(color,x+.055,y,.34,.09,.047,.025,.55);ell(color,x,y,.37,.032,.04,.025);}
 switch(i){case 0:moustache(0x542b16,.27);ell(0xff1759,0,-.23,.41,.07,.06,.035);line([[-.07,-.29,.34],[0,-.30,.37],[.07,-.29,.34]],0x542b16,.018);break;case 1:moustache(0x191919);break;case 2:ell(0xffffff,0,-.075,.43,.11,.11,.055);ell(0xaaaaaa,0,-.025,.48,.038,.033,.025);[0x80d9e9,0xf6a8b7,0xffe532].forEach((v,k)=>ell(v,-.06,.37+k*.085,.02,.075,.075,.075));[0xffdd22,0xf82a86,0xffb5cd].forEach((v,k)=>ell(v,.39,.04-k*.075,-.04,.16,.055,.04,.4));break;case 3:lips(0x9bdfac);break;case 4:ell(0xffe72b,0,-.07,.46,.075,.075,.065);for(const s of [-1,1]){const m=new T.Mesh(new T.BoxGeometry(.23,.14,.035),new T.MeshStandardMaterial({color:0x482819}));m.position.set(s*.17,-.10,.39);m.rotation.z=s*.1;g.add(m);}ell(0xf2d8a5,0,.43,0,.055,.075,.055);{const sh=new T.Shape();for(let j=0;j<16;j++){const a=j*Math.PI/8,r=j%2?.075:.14;const x=Math.cos(a)*r,y=Math.sin(a)*r;j?sh.lineTo(x,y):sh.moveTo(x,y);}sh.closePath();const m=new T.Mesh(new T.ExtrudeGeometry(sh,{depth:.025,bevelEnabled:false}),new T.MeshStandardMaterial({color:0x482819}));m.position.set(0,.54,0);g.add(m);}break;case 5:lips(0xf41424);break;case 6:bow(0xd9f5d7);for(const x of [-.105,.105])for(let j=0;j<3;j++)line([[x+(j-1)*.035,.16,.43],[x+(j-1)*.045,.24,.40]],0xffffff,.012);break;case 7:lips(0xf5a1c0);for(let j=0;j<3;j++)line([[.38,0,-.08],[.52,(j-1)*.055,-.13]],c,.018);break;case 8:moustache(0xc6c8ce,.17);ell(0xfff1d9,.32,.31,0,.09,.11,.07);bow(0xa87bd8,.32,.32);break;case 9:lips(0xb86cda);bow(0xd7f5d9);break;}
 return g;
}
