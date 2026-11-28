export const CLUBS={driver:{name:'ドライバー',speed:28,lift:10},iron:{name:'アイアン',speed:21,lift:9},wedge:{name:'ウェッジ',speed:12,lift:11},putter:{name:'パター',speed:12,lift:0}};
export function recommendClub(distance,terrain){return terrain==='green'?'putter':terrain==='sand'?'wedge':distance>45?'driver':distance>20?'iron':'wedge';}
export function clubShot(id,terrain){const c=CLUBS[id]||CLUBS.driver;const factor=terrain==='sand'?(id==='wedge'?.9:.5):terrain==='rough'?.82:1;return {speed:c.speed*factor,lift:c.lift,putt:id==='putter'};}
