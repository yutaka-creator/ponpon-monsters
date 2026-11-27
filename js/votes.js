import {profiles,displayOrder,displayNumber} from './profiles.js?v=10000';
export function initVotes(client,user){
 const grid=document.getElementById('vote-grid'), status=document.getElementById('vote-status'), refresh=document.getElementById('vote-refresh');
 let own=null, totals=new Map(), busy=false, ready=false;
 function render(){grid.replaceChildren();for(const id of displayOrder.filter(i=>i<10)){
 const card=document.createElement('article'),img=document.createElement('img'),name=document.createElement('strong'),count=document.createElement('p'),button=document.createElement('button');
 img.decoding="async";img.src=`assets/images/${id}.webp`;img.alt=profiles[id][0];img.loading='lazy';name.textContent=`No.${displayNumber(id)} ${profiles[id][0]}`;count.textContent=ready?`${totals.get(id)??0}票`:'—票';button.textContent=own===id?'あなたの推し ♥':'この子を応援';button.disabled=!client||!user||busy||!ready||own===id;button.onclick=()=>vote(id);card.append(img,name,count,button);grid.append(card);}}
 async function load(){const result=await client.rpc('ponpon_vote_totals');if(result.error)throw result.error;let nextOwn=null;if(user){const r=await client.from('ponpon_votes').select('monster_id').eq('user_id',user.id).maybeSingle();if(r.error)throw r.error;nextOwn=r.data?.monster_id??null;}totals=new Map(result.data.map(r=>[r.monster_id,r.votes]));own=nextOwn;ready=true;}
 async function run(action){if(!client||busy)return;busy=true;refresh.disabled=true;render();try{await action();status.textContent=user?'好きな子を応援しよう！':'投票するにはアカウント画面でログインしてね。';}catch(e){ready=false;status.textContent='投票情報を取得できません。設定・通信を確認して再読み込みしてください。';console.error(e);}finally{busy=false;refresh.disabled=false;render();}}
 async function vote(id){if(!user||!ready||busy)return;await run(async()=>{const r=await client.from('ponpon_votes').upsert({user_id:user.id,monster_id:id},{onConflict:'user_id'});if(r.error)throw r.error;await load();});}
 refresh.onclick=()=>run(load);refresh.disabled=!client;render();if(client)run(load);else status.textContent='オンライン機能は未接続です。';
}
