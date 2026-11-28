// Rendering only: never change simulation time or input polling.
export function renderBudget(mobile,dpr=1){return {ratio:Math.min(dpr,mobile?.75:1.5),fps:mobile?30:60,antialias:!mobile};}
export function renderGate(fps){let next=-Infinity,last=-Infinity;const interval=1000/fps;return now=>{if(now<last||now-next>interval*2)next=now;last=now;if(now+1<next)return false;next=Math.max(next+interval,now);return true;};}
export function cameraBlend(base,dt){return 1-Math.pow(1-base,Math.max(0,Math.min(.1,dt))*60);}
