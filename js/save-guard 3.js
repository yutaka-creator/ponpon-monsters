import {flushPending,pendingCount} from './save-store.js?v=11401';
const games=new Set(['game','golf','race','tower','invader','adventure','climb','pinball','escape']);
const status=document.createElement('p');status.setAttribute('role','alert');status.hidden=true;status.style.cssText='position:fixed;bottom:80px;left:8px;right:8px;z-index:9999;background:#fff3d6;color:#403b32;padding:10px;border-radius:8px';document.body.append(status);
function update(){const ok=flushPending();status.hidden=ok;status.textContent=ok?'':'端末に保存できません。空き容量を確認してください。ページを閉じないでください。';return ok;}
document.addEventListener('ponpon:save-error',()=>{status.hidden=false;status.textContent='端末に保存できません。ページを閉じないでください。';});
document.addEventListener('ponpon:save',update);
document.addEventListener('visibilitychange',()=>{if(document.hidden)update();});
window.addEventListener('pagehide',update);
window.addEventListener('beforeunload',e=>{if(!update()||pendingCount()||games.has(document.body.dataset.screen)){e.preventDefault();e.returnValue='';}});
