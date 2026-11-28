const specs=[['お買い得パーフェクト',{perfect:50}],['未来ワープ',{speed:1.15,offset:0.1}],['虹色ハイジャンプ',{lift:1.65}],['無風ショット',{wind:0}],['爆発パワーショット',{speed:1.5}],['カップ引き寄せ',{magnet:3}],['精密コントロール',{offset:.05}],['ふんわり着地',{bounce:0,rough:.35}],['スーパー低空ショット',{lift:.45,speed:1.3}],['ミラクルパット',{puttOffset:.05,magnet:2}]];
export function specialFor(id){const [name,mods]=specs[id]||['集中ショット',{offset:.2}];return {name,mods};}
export function shotAbility(base,id,active){return active?{...base,...specialFor(id).mods}:base;}
