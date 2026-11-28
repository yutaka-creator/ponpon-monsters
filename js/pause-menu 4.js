import {gameClock} from './pause-clock.js?v=11440';
const games=new Set(['game','golf','race','tower','invader','adventure','climb','pinball','escape']);
const button=document.getElementById('common-pause'), dialog=document.getElementById('pause-dialog');
let paused=null;
function resume(){if(paused){gameClock(paused).clock.resume();paused=null;}if(dialog.open)dialog.close();}
function pause(){const screen=document.body.dataset.screen;if(!games.has(screen)||paused)return;paused=screen;gameClock(screen).clock.pause();window.dispatchEvent(new Event('blur'));document.dispatchEvent(new Event('ponpon:pause'));if(!dialog.open)dialog.showModal();}
button.onclick=pause;document.getElementById('pause-resume').onclick=resume;
dialog.addEventListener('cancel',e=>{e.preventDefault();resume();});
document.getElementById('pause-home').onclick=()=>{if(confirm('ホームに戻りますか？ 途中のプレイは保存されない場合があります。')){resume();document.body.dataset.pauseExit='yes';document.getElementById('home').click();delete document.body.dataset.pauseExit;}};
const resetIds={climb:'cl-reset',pinball:'pb-reset',escape:'esc-reset'};
const restart=document.getElementById('pause-restart');restart.onclick=()=>{const id=resetIds[paused];if(id&&confirm('やり直しますか？')){resume();document.getElementById(id)?.click();}};
function update(){resume();const screen=document.body.dataset.screen;button.hidden=!games.has(screen);restart.hidden=!resetIds[screen];}
document.addEventListener('ponpon:tab',update);document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&!dialog.open&&games.has(document.body.dataset.screen)){e.preventDefault();pause();}});
update();

window.addEventListener("keydown",e=>{if(paused&&!dialog.contains(e.target)){e.preventDefault();e.stopImmediatePropagation();}},true);
