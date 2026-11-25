export function meterValue(phase,ms,lie){const t=Math.max(0,ms)/1000;return phase===1?Math.min(100,t*(lie==='green'?35:50)):Math.max(0,100-t*(lie==='green'?40:55));}
export function impactResult(value,lie,ability={}){const error=value-50,a=Math.abs(error);return {label:a<=10+(ability.perfect||0)?'PERFECT':a<=22?'GOOD':'MISS',offset:Math.sign(error)*Math.max(0,a-10-(ability.perfect||0))*(lie==='green'?.16:.32)*(ability.offset||1)*(lie==='green'?(ability.puttOffset||1):1)};}
export const aimStep=(lie,ability={})=>(lie==='green'?1:3)*(ability.aim||1);
