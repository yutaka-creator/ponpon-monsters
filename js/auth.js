import {initEvents} from './events.js';
import {initVisits} from './visits.js';
import {initVotes} from './votes.js';
import {SUPABASE_URL,SUPABASE_PUBLIC_KEY} from './supabase-config.js';
import {setOwner,snapshot,restore} from './save-store.js';
const $=id=>document.getElementById(id),form=$('auth-form'),logout=$('auth-logout'),panel=$('cloud-panel');
let client,user,busy=false,revision=null,known=false;
const msg=t=>$('auth-status').textContent=t, cloud=t=>$('cloud-status').textContent=t;
function lock(v){busy=v;for(const b of [...form.querySelectorAll('button'),logout,...panel.querySelectorAll('button')])b.disabled=v;}
async function run(fn){if(busy)return;lock(true);try{await fn();}catch(e){cloud('操作できませんでした。端末の記録は保持されます。 '+(e.message||''));msg('操作に失敗しました。設定や通信を確認してください。');}finally{lock(false);}}
async function fetchSave(){const {data,error}=await client.from('ponpon_saves').select('payload,revision').eq('user_id',user.id).maybeSingle();if(error)throw error;return data;}
async function inspect(){const row=await fetchSave();revision=row?.revision??null;known=true;cloud(row?'クラウド記録があります。必要なら復元してください。':'クラウド記録はまだありません。');}
$('cloud-save').onclick=()=>run(async()=>{if(!known){await inspect();return;}const payload=snapshot();if(revision===null){const {data,error}=await client.from('ponpon_saves').insert({user_id:user.id,payload}).select('revision').single();if(error)throw error;revision=data.revision;}else{if(!confirm('クラウドの記録をこの端末の記録で更新しますか？'))return;const {data,error}=await client.from('ponpon_saves').update({payload,revision:revision+1}).eq('user_id',user.id).eq('revision',revision).select('revision').maybeSingle();if(error)throw error;if(!data){known=false;cloud('別の端末で更新されています。復元するか、記録を確認してください。');return;}revision=data.revision;}cloud('クラウドに保存しました。');});
$('cloud-load').onclick=()=>run(async()=>{const row=await fetchSave();if(!row){cloud('クラウド記録がありません。');return;}if(!confirm('このアカウントの端末内記録をクラウド記録で置き換えますか？'))return;restore(row.payload);location.reload();});
$('cloud-import').onclick=()=>run(async()=>{if(!confirm('ゲスト記録をこのアカウントの端末内記録にコピーします。現在のアカウント記録は置き換わります。ゲスト記録は残ります。'))return;restore(snapshot(true));location.reload();});
form.onsubmit=e=>{e.preventDefault();if(!client)return;run(async()=>{const email=$('auth-email').value.trim(),password=$('auth-password').value;const r=e.submitter?.value==='signup'?await client.auth.signUp({email,password,options:{emailRedirectTo:location.origin+location.pathname}}):await client.auth.signInWithPassword({email,password});if(r.error)throw r.error;if(r.data.session)location.reload();else msg('確認メールを開いてからログインしてください。');});};
logout.onclick=()=>run(async()=>{const {error}=await client.auth.signOut({scope:'local'});if(error)throw error;location.reload();});
async function init(){try{if(!SUPABASE_URL||!SUPABASE_PUBLIC_KEY){msg('オンライン機能は未設定です。ゲストで遊べます。');return;}const {createClient}=await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.4/+esm');client=createClient(SUPABASE_URL,SUPABASE_PUBLIC_KEY,{auth:{storageKey:'ponpon-auth-v1'}});const {data,error}=await client.auth.getSession();if(error)throw error;user=data.session?.user;setOwner(user?.id);form.hidden=!!user;logout.hidden=panel.hidden=!user;msg(user?'ログイン中：'+user.email:'ゲストでプレイ中。');if(user){inspect().catch(()=>cloud('クラウドに接続できません。端末内で遊べます。'));}client.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_OUT'&&user)location.reload();});}catch(e){msg('接続できません。ゲストで遊べます。');}finally{initVotes(client,user);await import('./boot.js');initVisits(client,user);initEvents(client);}}
init();
