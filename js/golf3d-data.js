import {courses as classic} from './golf-data.js?v=1139';
const first=[
 {name:'森の練習場',par:2,start:[75,220],hole:[565,220],walls:[],water:[],sand:[[270,320,100,70]]},
 {name:'キノコの小道',par:3,start:[75,350],hole:[565,85],walls:[[280,0,30,220]],water:[],sand:[[400,300,100,90]]},
 {name:'秘密の湖',par:4,start:[75,350],hole:[565,85],walls:[[250,0,25,130],[390,310,25,130]],water:[[290,180,90,70]],sand:[[440,260,100,80]]}
];
export const themes=[
 {ground:0x86ad61,stripe:0x91b96d,wall:0x936744,base:0x806344,sky:0xdcebdc},
 {ground:0xb7a58a,stripe:0xc8b99e,wall:0x9c6750,base:0x68574b,sky:0xf3e1c9},
 {ground:0xe3cf94,stripe:0xf0dda7,wall:0xb78d62,base:0xc5a16a,sky:0xcceaf4},
 {ground:0x7772a4,stripe:0x8983b7,wall:0x514b79,base:0x413c65,sky:0x282943},
 {ground:0xe9b7c9,stripe:0xf5c9d8,wall:0xc87891,base:0x9c677a,sky:0xffe9f0},
 {ground:0x8bb8b3,stripe:0xa2cfca,wall:0x74659e,base:0x555477,sky:0xe0d9f6}
];
export const courses3d=classic.map((c,i)=>({...c,...(first[i]??{}),theme:Math.floor(i/5)}));
