import {destinations} from './travel-data.js?v=11460';
export const halls=[['自然館','🌳',[0,6,7,8]],['昭和館','📺',[1,9,10,11]],['海洋館','🐚',[2,12,13]],['観光館','🎡',[4,5,14,15]],['宇宙・謎の展示室','🛸',[3,16,17,18,19]]];
import {notes} from './souvenir-notes.js?v=11460';
export const exhibits=destinations.flatMap(([place,,gifts,story],p)=>gifts.map((name,i)=>({id:`gift${p*5+i}`,name,place,p,hall:halls.findIndex(h=>h[2].includes(p)),icon:halls.find(h=>h[2].includes(p))[1],rarity:"通常（同じ旅行先では等確率）",description:notes[p][i]})));
export const milestones=[[10,'博物館の記念盾'],[30,'銀の展示トロフィー'],[60,'金の展示トロフィー'],[100,'世界のお宝記念碑']];
