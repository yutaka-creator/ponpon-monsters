export function balance(height){const t=Math.min(1,Math.max(0,height/5000));return {gravity:370+120*t,bounce:410-5*t,assist:0,speed:210+50*t};}
