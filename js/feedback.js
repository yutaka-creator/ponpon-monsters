import {makeReport} from './feedback-data.js?v=11401';
const events=[],started=performance.now();
const screen=()=>document.body?.dataset.screen||'welcome';
function log(type){events.push({type,screen:screen(),seconds:(performance.now()-started)/1000});if(events.length>20)events.shift();}
window.addEventListener('error',e=>log(e.target===window?'script-error':'resource-error'),true);
window.addEventListener('unhandledrejection',()=>log('promise-error'));
document.addEventListener('ponpon:tab',()=>log('screen'));
function environment(){const u=navigator.userAgent;return {browser:/Edg\//.test(u)?'Edge':/CriOS|Chrome/.test(u)?'Chrome系':/FxiOS|Firefox/.test(u)?'Firefox':/Safari/.test(u)?'Safari':'その他',os:/Android/.test(u)?'Android':/iPhone|iPad|iPod/.test(u)||(/Macintosh/.test(u)&&navigator.maxTouchPoints>1)?'iOS/iPadOS':/Windows/.test(u)?'Windows':/Macintosh/.test(u)?'macOS':'その他',viewport:`${innerWidth} × ${innerHeight}`,pixelRatio:devicePixelRatio,touch:navigator.maxTouchPoints>0,online:navigator.onLine};}
const $=id=>document.getElementById(id);let origin='welcome',env={},snapshot=[];
const dialog=$('feedback-dialog'),status=$('feedback-status');
function report(){return JSON.stringify(makeReport({screen:origin,environment:env,events:$('feedback-logs').checked?snapshot:[],comment:$('feedback-comment').value,kind:$('feedback-kind').value}),null,2);}
function preview(){ $('feedback-preview').value=report();status.textContent=''; }
$('feedback-open').addEventListener('click',()=>{origin=screen();env=environment();snapshot=events.slice();preview();dialog.showModal();});
for(const id of ['feedback-comment','feedback-kind','feedback-logs'])$(id).addEventListener('input',preview);
$('feedback-close').onclick=()=>dialog.close();
$('feedback-copy').onclick=async()=>{try{await navigator.clipboard.writeText($('feedback-preview').value);status.textContent='コピーしました。LINEなどで開発者に共有できます。';}catch{ $('feedback-preview').select();status.textContent='自動コピーできません。選択した内容を手動でコピーしてください。';}};
$('feedback-download').onclick=()=>{const url=URL.createObjectURL(new Blob([$('feedback-preview').value],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='ponpon-feedback.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='保存を開始しました。';};
$('feedback-share').hidden=!navigator.share;
$('feedback-share').onclick=async()=>{try{await navigator.share({title:'ポンポンモンスターズ フィードバック',text:$('feedback-preview').value});status.textContent='共有操作が完了しました。';}catch(e){status.textContent=e.name==='AbortError'?'共有をキャンセルしました。':'共有できません。コピーをご利用ください。';}};
