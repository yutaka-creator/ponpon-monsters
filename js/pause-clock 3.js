// Virtual game time, independent of real-time travel and persistence.
export function createClock(now=()=>performance.now()){
 let offset=0, stopped=null;
 return {now:()=> (stopped??now())-offset, get paused(){return stopped!==null;}, pause(){if(stopped===null)stopped=now();}, resume(){if(stopped!==null){offset+=now()-stopped;stopped=null;}}};
}
const clocks=new Map();
export function gameClock(screen){
 if(clocks.has(screen))return clocks.get(screen);
 const clock=createClock();let seq=0;const pending=new Map();
 const api={clock,performance:{now:clock.now},requestAnimationFrame(fn){const id=++seq;const run=()=>{if(!pending.has(id))return;if(clock.paused){pending.set(id,globalThis.requestAnimationFrame(run));return;}pending.delete(id);fn(clock.now());};pending.set(id,globalThis.requestAnimationFrame(run));return id;},cancelAnimationFrame(id){if(pending.has(id)){globalThis.cancelAnimationFrame(pending.get(id));pending.delete(id);}},setTimeout(fn,ms){const end=clock.now()+ms;let id;const run=()=>{if(clock.now()>=end){pendingTimer.delete(id);fn();}else pendingTimer.set(id,api.requestAnimationFrame(run));};id=api.requestAnimationFrame(run);pendingTimer.set(id,id);return id;},clearTimeout(id){api.cancelAnimationFrame(pendingTimer.get(id));pendingTimer.delete(id);}};
 const pendingTimer=new Map();clocks.set(screen,api);return api;
}
