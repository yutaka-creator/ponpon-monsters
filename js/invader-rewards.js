export const rewards=[['ivgift0',3,'ミニUFO'],['ivgift1',6,'宇宙船'],['ivgift2',8,'銀河の壁紙'],['ivgift3',10,'黄金の宇宙トロフィー']];
export function rewardIds(s){return rewards.filter(([id,w])=>s.cleared>=w&&(id!=='ivgift3'||s.won&&s.hits===0)).map(([id])=>id);}
