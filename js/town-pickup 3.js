import {treasures} from './town-data.js?v=11401';
export function treasureAt(x,y,found=[]){return treasures.find(t=>t.x===x&&t.y===y&&!found.includes(t.id));}
