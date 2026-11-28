import {balance} from './tower-balance.js?v=1112';
const base={name:'標準',description:'基本のラケットで挑戦',width:49,gravity:1,bounce:1,steer:4,wall:1,damage:1,magnet:0,guide:false,rescue:false,jump:false};
const powers=[
['ワイドラケット','ラケット幅が約27%広がる',{width:62}],
['未来からの帰還','落下時に一度だけ復活',{rescue:true}],
['虹のジャンプ','落下時に一度だけ空中ジャンプ',{jump:true}],
['地球の安定感','打ち返す角度が穏やかになる',{steer:2.8}],
['カレーの破壊力','鉄ブロックも一撃で破壊',{damage:2}],
['恋の引力','ラケット付近で引き寄せる',{magnet:85}],
['落下予測','落下位置の目安を表示',{guide:true}],
['のんびり落下','重力が15%弱くなる',{gravity:.85}],
['ベテランの反射','壁反射時の横速度を抑える',{wall:.8}],
['負けないジャンプ','打ち返す高さがアップ',{bounce:1.12}]];
export function powerFor(id){const p=powers[id];return {...base,...(p?{name:p[0],description:p[1],...p[2]}:{})};}
export function landing(s){const dy=s.y-s.camera-s.paddleY-13,g=balance(s.best).gravity*s.power.gravity;const t=(s.vy+Math.sqrt(Math.max(0,s.vy*s.vy+2*g*Math.max(0,dy))))/g;const span=294;let x=((s.x-13+s.vx*t)%(2*span)+2*span)%(2*span);return 13+(x>span?2*span-x:x);}
