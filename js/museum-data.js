import {destinations} from './travel-data.js?v=10000';
export const halls=[['自然館','🌳',[0,6,7,8]],['昭和館','📺',[1,9,10,11]],['海洋館','🐚',[2,12,13]],['観光館','🎡',[4,5,14,15]],['宇宙・謎の展示室','🛸',[3,16,17,18,19]]];
const notes=[['木から落ちた経歴を持つ。','大きさについて本人は無言。','森の非常食。館長は食べない。','昼間も点灯する勤勉なランプ。','座ると森の気分になる。'],['閉店後も営業する看板。','味については調査中。','昔の未来を描いている。','ビー玉が主役の瓶。','風が来ると仕事をする。'],['海の電話。通話料は不明。','住民募集中の城。','星ではなく砂です。','海に持ち込まないでください。','泳げない仲間にも人気。']];
export const exhibits=destinations.flatMap(([place,,gifts,story],p)=>gifts.map((name,i)=>({id:`gift${p*5+i}`,name,place,p,hall:halls.findIndex(h=>h[2].includes(p)),icon:halls.find(h=>h[2].includes(p))[1],description:notes[p]?.[i]??`${name}。${story} 館長は貴重な資料だと主張している。`})));
export const milestones=[[10,'博物館の記念盾'],[30,'銀の展示トロフィー'],[60,'金の展示トロフィー'],[100,'世界のお宝記念碑']];
