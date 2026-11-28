export const craneQuality={low:{ratio:.75,fps:30,tufts:240,shadow:false},standard:{ratio:1.25,fps:45,tufts:480,shadow:false},high:{ratio:2,fps:60,tufts:720,shadow:true}};
export function qualityFor(mode,dpr=1){const q=craneQuality[mode]||craneQuality.standard;return {...q,ratio:Math.min(Math.max(0.5,dpr||1),q.ratio)};}
