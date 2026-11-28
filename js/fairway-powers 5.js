// Internal monster IDs; independent of official collection numbers.
export const POWERS={0:{name:'お上品インパクト',perfect:4},1:{name:'未来予測',offset:.55},2:{name:'虹のジャンプ',lift:1.3},3:{name:'地球の安定感',wind:.25},4:{name:'カレー加速',speed:1.2},5:{name:'恋の引力',magnet:1},6:{name:'効率的な狙い',aim:.5},7:{name:'のんびりラフ',rough:.6},8:{name:'じぃの安定感',bounce:.35},9:{name:'美容パター',puttOffset:.25}};
POWERS[23]={name:"じぃのパター",puttOffset:.5};POWERS[24]={name:"虹の追い風",wind:.5,lift:1.15};
export const powerFor=id=>POWERS[id]||{};
