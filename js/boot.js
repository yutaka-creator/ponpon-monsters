import('./collection.js?v=10000').then(m=>m.renderCollection()).catch(console.error);
const loading=document.getElementById('loading');
function fail(e){loading.hidden=false;loading.textContent='3Dの起動に失敗しました。'+(location.protocol==='file:'?' ZIPを解凍してLive Serverで開いてください。':' インターネット接続・WebGLを確認してください。')+' 詳細: '+(e?.message||String(e));const retry=document.createElement('button');retry.textContent='再読み込み';retry.onclick=()=>location.reload();loading.append(retry);}

let started=false;
function startCrane(){if(started)return;started=true;if(location.protocol==='file:'){fail('file:// で開いています');return;}const timer=setTimeout(()=>{loading.textContent='読み込みに時間がかかっています。通信環境を確認してください。';},12000);import('./main.js?v=10000').then(()=>{clearTimeout(timer);loading.hidden=true;}).catch(e=>{clearTimeout(timer);fail(e);});}
document.addEventListener('ponpon:tab',e=>{if(e.detail==='game')startCrane();});if(!document.querySelector('#game').hidden)startCrane();

import('./room.js?v=10000').then(m=>m.initRoom()).catch(console.error);

import('./travel.js?v=10000').then(m=>m.initTravel()).catch(console.error);

import("./golf.js?v=10000").then(m=>m.initGolf()).catch(console.error);

import('./museum.js?v=10000').then(m=>m.initMuseum()).catch(console.error);

let golf3d=null, opening3d=false;
const g3=id=>document.getElementById(id);
async function open3d(){return await start3d();}
const start3d=async()=>{if(opening3d)return;opening3d=true;g3('g3-panel').hidden=false;g3('g3-old').hidden=true;g3('g3-open').hidden=true;try{if(!golf3d)golf3d=(await import('./golf3d.js?v=10000')).initGolf3D();if(!g3('g3-panel').hidden&&!g3('golf').hidden){golf3d.show();g3('g3-panel').scrollIntoView({block:'start'});}else golf3d.hide();}catch(e){g3('g3-status').textContent='3Dを起動できませんでした。2D版に戻れます。詳細：'+(e.message||e);console.error(e);}finally{opening3d=false;}};
g3('g3-open').onclick=open3d;
g3('g3-close').onclick=()=>{golf3d?.hide();g3('g3-panel').hidden=true;g3('g3-old').hidden=false;g3('g3-open').hidden=false;};
document.addEventListener('ponpon:tab',e=>{if(e.detail!=='golf')golf3d?.hide();});

let fairway,fwLoading=false;
async function openFairway(){if(fwLoading)return;fwLoading=true;document.body.classList.add('fairway-playing');g3('fw-loading').hidden=false;g3('fw-loading').textContent='ゴルフ場を読み込み中…';g3('fw-panel').hidden=false;g3('fw-return').hidden=true;g3('g3-panel').hidden=true;g3('g3-old').hidden=true;g3('g3-open').hidden=true;golf3d?.hide();try{if(!fairway)fairway=(await import('./fairway.js?v=10000')).initFairway();if(!g3('golf').hidden&&!g3('fw-panel').hidden){document.body.classList.add('fairway-playing');fairway.show();}else fairway.hide();}catch(e){g3('fw-status').textContent='起動失敗：'+e.message;g3('fw-loading').hidden=false;g3('fw-loading').textContent='3D起動失敗：'+(e?.message||String(e));console.error('Fairway startup',e);const retry=document.createElement('button');retry.textContent='再読み込み';retry.onclick=()=>location.reload();g3('fw-loading').append(retry);}finally{fwLoading=false;}}
g3('fw-classic').onclick=()=>{document.body.classList.remove('fairway-playing');fairway?.hide();g3('fw-panel').hidden=true;g3('fw-return').hidden=false;open3d();};g3('fw-return').onclick=openFairway;g3('fw-2d').onclick=()=>{document.body.classList.remove('fairway-playing');fairway?.hide();golf3d?.hide();g3('fw-panel').hidden=true;g3('g3-panel').hidden=true;g3('g3-old').hidden=false;g3('g3-open').hidden=false;g3('fw-return').hidden=false;};document.addEventListener('ponpon:tab',e=>{if(e.detail==='golf'){if(!g3('fw-panel').hidden)openFairway();else if(!g3('g3-panel').hidden)open3d();}else {document.body.classList.remove('fairway-playing');fairway?.hide();}});if(!g3('golf').hidden)openFairway();

import('./tower.js?v=10000').then(m=>m.initTower()).catch(console.error);

let raceLoading=false;document.addEventListener('ponpon:tab',async e=>{if(e.detail!=='race'||raceLoading)return;raceLoading=true;try{(await import('./race.js?v=10000')).initRace();}catch(e){raceLoading=false;document.getElementById('race-status').textContent='3D起動失敗：'+e.message;}});
let ivLoading=false;document.addEventListener('ponpon:tab',async e=>{if(e.detail!=='invader'||ivLoading)return;ivLoading=true;try{(await import('./invader.js?v=10000')).initInvader();}catch(e){ivLoading=false;document.getElementById('iv-status').textContent='起動失敗：'+e.message;}});

let advLoading=false;document.addEventListener('ponpon:tab',async e=>{if(e.detail!=='adventure'||advLoading)return;advLoading=true;try{(await import('./adventure.js?v=10000')).initAdventure();}catch(err){advLoading=false;document.getElementById('adv-status').textContent='起動失敗：'+err.message;}});

import("./world-hub.js?v=10000").catch(console.error);

let townLoading=false;function startTown(){if(townLoading)return;townLoading=true;import('./town.js?v=10000').then(m=>m.initTown()).catch(e=>{townLoading=false;document.getElementById('town-status').textContent='起動失敗：'+e.message;});}document.addEventListener('ponpon:tab',e=>{if(e.detail==='town')startTown();});if(!g3('town').hidden)startTown();
