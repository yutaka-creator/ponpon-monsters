export const ICONS={turbo:'🍛',shield:'🛡️',shot:'💥',giant:'🐘',sleep:'💤',ice:'🧊',magnet:'🧲',banana:'🍌',rocket:'🚀',star:'⭐',missile:'🚀',fan:'🌀',warp:'🌌',curry:'🍛',thunder:'⚡'};
export function cheer(before,after){return after<before?after===1?'トップだ！そのまま！':'順位アップ！いいぞ！':'';}
export function finishCheer(r){return r===1?'やったー！優勝！':r<=3?'表彰台だ！すごい！':'完走おめでとう！';}
export function roulette(item,remaining){const keys=Object.keys(ICONS);return remaining>.18?ICONS[keys[Math.floor(remaining*18)%keys.length]]:ICONS[item]||'🎁';}
