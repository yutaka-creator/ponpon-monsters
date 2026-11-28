export const ITEMS=[{id:'spread',name:'3方向弾',color:'#8edaff',mark:'3'},{id:'giant',name:'巨大ポンポン弾',color:'#f9c56d',mark:'G'},{id:'laser',name:'虹色貫通弾',color:'#e9a3ff',mark:'L'},{id:'bomb',name:'カレー爆弾',color:'#ff9a56',mark:'B'},{id:'rapid',name:'高速連射',color:'#a8ed8a',mark:'R'},{id:'shield',name:'虹色バリア',color:'#83e8df',mark:'S'}];
export function collect(s,id){if(id==='shield'){s.shield=true;return;}s.power=id;s.powerTime=12*s.ability.duration;}
export function shoot(s){const p=s.power||baseShot(s.wave);const angles=p==='spread'?[-110,0,110]:[0];for(const vx of angles)s.shots.push({x:s.x,y:350,vx,kind:p,r:p==='giant'?12:p==='bomb'?8:5,hit:new Set()});s.cool=(p==='rapid'?.075:p==='bomb'?.45:p==='giant'?.32:s.wave>=3?.16:.24)*s.ability.rate;}

export function baseShot(wave){return wave>=7?"laser":wave>=4?"spread":null;}
