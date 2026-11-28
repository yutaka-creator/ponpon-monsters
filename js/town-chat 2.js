import {requests} from './town-events.js?v=1139';
import {voices} from './character-voices.js?v=1139';
export const distance=(x,y,r)=>Math.abs(x-r.x)+Math.abs(y-r.y);
export function questMark(id,events,found){const q=requests.find(q=>q.resident===id);if(!q||events.done.includes(q.id))return '';return !events.accepted.includes(q.id)||found.includes(q.item)?'！':'…';}
export function greeting(id,period){return voices[id]?.[({morning:0,day:1,evening:2,night:3})[period]??1]||'こんにちは！';}
export function closestResident(x,y,people,radius=2){return people.filter(r=>distance(x,y,r)<=radius).sort((a,b)=>distance(x,y,a)-distance(x,y,b)||a.id-b.id)[0];}
