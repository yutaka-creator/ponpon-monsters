export function balance(height){const t=Math.min(1,Math.max(0,height/5000));return {gravity:350+110*t,bounce:430-5*t,assist:12*(1-Math.min(1,height/1000)),speed:165+45*t};}
