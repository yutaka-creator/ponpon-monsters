import {courses} from './fairway-courses.js';
export const rewardRules=[['first','初カップイン',30],['fwgift0','3ホール制覇',0],['fwgift1','6ホール制覇',0],['fwgift2','初ホールインワン',0],['fwgift3','9ホールをPAR以下でラウンド',0]];
export function achievements(r){const best=r.best||{},n=courses.filter(c=>Number.isInteger(best[c.id])&&best[c.id]>0).length;return {first:n>0,fwgift0:n>=3,fwgift1:n>=6,fwgift2:courses.some(c=>best[c.id]===1),fwgift3:Number.isInteger(r.roundBest)&&r.roundBest>0&&r.roundBest<=35,monster:courses.slice(0,9).every(c=>best[c.id]>0),master:courses.slice(0,9).every(c=>best[c.id]>0&&best[c.id]<c.par)};}
