import {walkable,treasures} from './town-data.js?v=1139';
export const tools={tree:'🌳',flower:'🌷',bench:'🪑',lamp:'💡',fountain:'⛲',road:'道',grass:'芝',erase:'消す'};
export function cleanLayout(raw){const out={};if(!raw||typeof raw!=='object')return out;for(const [k,v] of Object.entries(raw)){if(!/^\d+,\d+$/.test(k))continue;const [x,y]=k.split(',').map(Number);if(walkable(x,y,[])&&!treasures.some(t=>t.x===x&&t.y===y)&&Object.hasOwn(tools,v)&&k===`${x},${y}`)out[k]=v;}return out;}
export function editLayout(layout,x,y,tool){return cleanLayout({...layout,[`${x},${y}`]:tool});}
