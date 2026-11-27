export const POWERS={normal:{label:'通常',size:34},giant:{label:'巨大化',size:48},mini:{label:'ミニ',size:22},fire:{label:'ポンポン弾',size:34},rainbow:{label:'虹色無敵',size:34}};
export const blocks=()=>[{x:160,y:165,type:'coin'},{x:390,y:165,type:'giant'},{x:450,y:165,type:'break'},{x:750,y:165,type:'mini'},{x:1000,y:165,type:'fire'},{x:1280,y:165,type:'rainbow'},{x:1850,y:165,type:'break'}].map(b=>({...b,w:32,h:24,used:false}));
export const springs=[{x:550,y:260},{x:1100,y:260},{x:1670,y:260}];
export function grant(s,type){if(type==='coin'){s.coins+=s.ability?.bonus||1;return;}s.power=type;s.powerTime=type==='rainbow'?10:0;}
