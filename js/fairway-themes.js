// Visual palettes and surface behavior for existing themed holes.
const beach={label:'海辺',fairway:0x9fbf82,stripe:0xb4cf91,green:0xb4d575,sand:0xf0d9a3,rough:0xc4c69a,roll:1,hint:'海と風に注意。'};
const snow={label:'雪・氷',fairway:0xc4e1e9,stripe:0xd9eef3,green:0xb4dcd8,sand:0xe9e1cf,rough:0xe8f1f5,roll:.55,hint:'氷の上では弱めのショットがおすすめ。'};
const space={label:'宇宙',fairway:0x7778a5,stripe:0x898ab6,green:0xa9c9bc,sand:0xc2b6d8,rough:0x505477,roll:1,gravity:11,hint:'低重力で飛距離が伸びる。弱めに打とう。'};
const candy={label:'お菓子',fairway:0xe5b3c9,stripe:0xf1c7d8,green:0xb9dca1,sand:0xf3d49e,rough:0xd9a4bd,roll:1,hint:'お菓子色のコース。砂場に注意。'};
export const themeFor=id=>[7,24].includes(id)?beach:[13,32].includes(id)?snow:[12,16,25,31,35].includes(id)?space:[11,20,27].includes(id)?candy:null;
export function surfaceColor(c,surface,z){const t=themeFor(c.id);return surface==='water'?0x55a9d4:surface==='sand'?(t?.sand??0xe5cc94):surface==='green'?(t?.green??0xa4d575):surface==='fairway'?(Math.floor(z/6)%2?(t?.fairway??0x83b95a):(t?.stripe??0x91c465)):(t?.rough??c.color);}
