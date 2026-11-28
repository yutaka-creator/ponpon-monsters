import {makeReport,formatReport,screens} from './feedback-data.js?v=114924';
const events=[],started=performance.now();
const screen=()=>document.body?.dataset.screen||'welcome';
function log(type){events.push({type,screen:screen(),seconds:(performance.now()-started)/1000});if(events.length>20)events.shift();}
window.addEventListener('error',e=>log(e.target===window?'script-error':'resource-error'),true);
window.addEventListener('unhandledrejection',()=>log('promise-error'));
document.addEventListener('ponpon:tab',()=>log('screen'));
function environment(){const u=navigator.userAgent;return {browser:/Edg\//.test(u)?'Edge':/CriOS|Chrome/.test(u)?'Chrome系':/FxiOS|Firefox/.test(u)?'Firefox':/Safari/.test(u)?'Safari':'その他',os:/Android/.test(u)?'Android':/iPhone|iPad|iPod/.test(u)||(/Macintosh/.test(u)&&navigator.maxTouchPoints>1)?'iOS/iPadOS':/Windows/.test(u)?'Windows':/Macintosh/.test(u)?'macOS':'その他',viewport:`${innerWidth} × ${innerHeight}`,pixelRatio:devicePixelRatio,touch:navigator.maxTouchPoints>0,online:navigator.onLine};}
const $=id=>document.getElementById(id);let origin='welcome',env={},snapshot=[];
const dialog=$('feedback-dialog'),status=$('feedback-status');
const labels={scoop:"ポンポンすくい",welcome:"ホーム",game:"クレーンゲーム",golf:"3Dゴルフ",tower:"ピンポンタワー",race:"3Dレーシング",adventure:"アドベンチャー",invader:"インベーダー",pinball:"ピンボール",climb:"クライム",escape:"脱出パズル",town:"タウン",detective:"ポンポン探偵",pontalk:"PON TALK",ponnews:"PON NEWS",ponalbum:"PON ALBUM",ponbank:"PON BANK",playhub:"ゲーム一覧",myroom:"マイルーム",travel:"旅行",collection:"図鑑",museum:"博物館",theater:"劇場",votes:"投票",visits:"訪問",events:"イベント",records:"記録",guide:"ガイド",account:"アカウント",unknown:"その他"};
for(const key of [...screens,"unknown"]){const opt=document.createElement("option");opt.value=key;opt.textContent=labels[key]||key;$("feedback-screen").append(opt);}
function data(){return makeReport({screen:$("feedback-screen").value,environment:env,events:$('feedback-logs').checked?snapshot:[],comment:$('feedback-comment').value,kind:$('feedback-kind').value});}
function report(){return JSON.stringify(data(),null,2);}
function shareText(){return formatReport(data(),labels);}
function preview(){ $('feedback-preview').value=report();status.textContent=''; }
$('feedback-open').addEventListener('click',()=>{origin=screen();env=environment();snapshot=events.slice();$("feedback-screen").value=screens.includes(origin)?origin:"unknown";$("feedback-details").open=false;preview();dialog.showModal();});
for(const id of ['feedback-comment','feedback-kind','feedback-logs','feedback-screen'])$(id).addEventListener('input',preview);
$('feedback-close').onclick=()=>dialog.close();
$('feedback-copy').onclick=async()=>{try{await navigator.clipboard.writeText(shareText());status.textContent='コピーしました。LINEなどで開発者に共有できます。';}catch{ $('feedback-details').open=true;$('feedback-preview').select();status.textContent='自動コピーできません。選択した内容を手動でコピーしてください。';}};
$('feedback-download').onclick=()=>{const url=URL.createObjectURL(new Blob([$('feedback-preview').value],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='ponpon-feedback.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent='保存を開始しました。';};
$('feedback-share').hidden=!navigator.share;
$('feedback-share').onclick=async()=>{try{await navigator.share({title:'ポンポンモンスターズ フィードバック',text:shareText()});status.textContent='共有操作が完了しました。';}catch(e){status.textContent=e.name==='AbortError'?'共有をキャンセルしました。':'共有できません。コピーをご利用ください。';}};
