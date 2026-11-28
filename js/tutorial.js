import {steps,nextIndex} from './tutorial-data.js?v=11401';
const $=id=>document.getElementById(id), key='ponpon-tutorial-seen.v1';
const dialog=$('tutorial-dialog'),invite=$('tutorial-invite');let index=0;
try{invite.hidden=localStorage.getItem(key)==='1';}catch{invite.hidden=false;}
function dismiss(){invite.hidden=true;try{localStorage.setItem(key,'1');}catch{}}
function render(){const s=steps[index];$('tutorial-progress').textContent=`${index+1} / ${steps.length}`;$('tutorial-title').textContent=s.title;$('tutorial-text').textContent=s.text;$('tutorial-prev').disabled=index===0;$('tutorial-next').textContent=index===steps.length-1?'完了':'次へ';$('tutorial-play').textContent=index===steps.length-1?'ホームへ':'この施設へ';}
function open(){index=0;render();if(!dialog.open)dialog.showModal();}
$('tutorial-open').onclick=open;$('tutorial-reopen').onclick=open;$('tutorial-skip').onclick=dismiss;
$('tutorial-prev').onclick=()=>{index=nextIndex(index,-1);render();};$('tutorial-next').onclick=()=>{if(index===steps.length-1){dismiss();dialog.close();}else{index=nextIndex(index,1);render();}};
$('tutorial-close').onclick=()=>{dismiss();dialog.close();};dialog.addEventListener('cancel',dismiss);
$('tutorial-play').onclick=()=>{const target=steps[index].target;dismiss();dialog.close();document.querySelector(`[data-go="${target}"]`)?.click();};
