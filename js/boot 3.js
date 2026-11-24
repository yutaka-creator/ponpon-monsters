import('./collection.js').then(m=>m.renderCollection()).catch(console.error);
const loading=document.getElementById('loading');
function fail(e){loading.hidden=false;loading.textContent='3Dの起動に失敗しました。'+(location.protocol==='file:'?' ZIPを解凍してLive Serverで開いてください。':' インターネット接続・WebGLを確認してください。')+' 詳細: '+(e?.message||String(e));const retry=document.createElement('button');retry.textContent='再読み込み';retry.onclick=()=>location.reload();loading.append(retry);}

let started=false;
function startCrane(){if(started)return;started=true;if(location.protocol==='file:'){fail('file:// で開いています');return;}const timer=setTimeout(()=>{loading.textContent='読み込みに時間がかかっています。通信環境を確認してください。';},12000);import('./main.js').then(()=>{clearTimeout(timer);loading.hidden=true;}).catch(e=>{clearTimeout(timer);fail(e);});}
document.addEventListener('ponpon:tab',e=>{if(e.detail==='game')startCrane();});if(!document.querySelector('#game').hidden)startCrane();

import('./room.js').then(m=>m.initRoom()).catch(console.error);

import('./travel.js').then(m=>m.initTravel()).catch(console.error);

import("./golf.js").then(m=>m.initGolf()).catch(console.error);

import('./museum.js').then(m=>m.initMuseum()).catch(console.error);

let golf3d=null, opening3d=false;
const g3=id=>document.getElementById(id);
g3('g3-open').onclick=async()=>{if(opening3d)return;opening3d=true;g3('g3-panel').hidden=false;g3('g3-old').hidden=true;g3('g3-open').hidden=true;try{if(!golf3d)golf3d=(await import('./golf3d.js')).initGolf3D();if(!g3('g3-panel').hidden&&!g3('golf').hidden){golf3d.show();g3('g3-panel').scrollIntoView({block:'start'});}else golf3d.hide();}catch(e){g3('g3-status').textContent='3Dを起動できませんでした。2D版に戻れます。';console.error(e);}finally{opening3d=false;}};
g3('g3-close').onclick=()=>{golf3d?.hide();g3('g3-panel').hidden=true;g3('g3-old').hidden=false;g3('g3-open').hidden=false;};
document.addEventListener('ponpon:tab',e=>{if(e.detail==='golf'&&!g3('g3-panel').hidden)golf3d?.show();else golf3d?.hide();});
