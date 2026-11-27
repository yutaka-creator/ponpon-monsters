// Rendering only: never change simulation time or input polling.
export function renderBudget(mobile, dpr=1){return {ratio:Math.min(dpr,mobile?0.85:1.5),fps:mobile?30:60,antialias:!mobile};}
export function renderGate(fps){let last=-Infinity;return (now)=>{if(now<last||now-last>=1000/fps-1){last=now;return true;}return false;};}
