import {exhibits,milestones} from './museum-data.js?v=114924';
// 家具名・アイコン・価格を編集できます。
const groups=[['生活','ベッド🛏️,ソファ🛋️,椅子🪑,テーブル🪵,座布団🟫,こたつ🧣,ランプ💡,カーテン🪟,クッション🟠,ラグ🟩'],['家電・収納','テレビ📺,冷蔵庫🧊,本棚📚,タンス🗄️,ラジオ📻,扇風機🌀,掃除機🧹,洗濯機🫧,時計🕰️,スピーカー🔊'],['植物・装飾','サボテン🌵,観葉植物🪴,花瓶💐,水槽🐠,絵画🖼️,地球儀🌐,ぬいぐるみ🧸,花壇🌷,盆栽🌳,キャンドル🕯️'],['レトロ','ガチャガチャ🎰,ゲーム筐体🕹️,レコード💿,黒電話☎️,看板🪧,公衆電話📞,駄菓子棚🍬,ジュークボックス🎵,レトロカメラ📷,タイプライター⌨️'],['不思議','UFO🛸,タイムマシン🚀,巨大プリン🍮,謎の石像🗿,魔法の扉🚪,宝箱🧰,巨大きのこ🍄,月🌙,ロボット🤖,恐竜🦕']];
export const items=groups.flatMap(([group,str],g)=>str.split(',').map((s,i)=>({id:'f'+(g*10+i),group,name:s.slice(0,s.search(/\p{Extended_Pictographic}|[🟫🟠🟩]/u)),icon:s.slice(s.search(/\p{Extended_Pictographic}|[🟫🟠🟩]/u)),price:[50,80,100,150,200,300,400,500,800,1500][i]})));
const special=['ティーセット🫖','壊れたタイムマシン🚀','水晶玉🔮','巨大地球儀🌍','カレーの大鍋🍲','恋愛相談デスク💌','ホワイトボード📋','ふかふか布団🛏️','昭和のちゃぶ台🍵','女優ミラー🪞'];
special.forEach((s,i)=>{const k=s.search(/\p{Extended_Pictographic}/u);items.push({id:'s'+i,group:'専用',name:s.slice(0,k),icon:s.slice(k),bond:i,price:0});});
export const walls=[['cream','クリーム','#f7e6c9'],['mint','ミント','#cce7d9'],['pink','ピンク','#f3d4dc'],['sky','空','#bde1f5'],['forest','森','#8dbb91'],['space','宇宙','#414b78'],['brick','レンガ','#c88e79'],['lavender','ラベンダー','#d9c8ee'],['yellow','レモン','#fff0a6'],['retro','昭和','#d6bc91']];
export const floors=[['wood','木目','#bc895e'],['check','チェック','#d8b39a'],['tatami','畳','#b7bc81'],['stone','石','#a5a8ac'],['white','白','#eeeeee'],['dark','濃い木目','#70513e'],['blue','青','#8caecb'],['rose','ローズ','#d6a0a8'],['sand','砂','#e5c79b'],['green','緑','#91ad87']];
export const find=id=>items.find(a=>a.id===id);
export function cleanDecor(a){return (Array.isArray(a)?a:[]).slice(0,20).filter(o=>o&&find(o.id)&&[o.x,o.y,o.angle,o.scale].every(Number.isFinite)).map(o=>({id:o.id,x:Math.max(8,Math.min(92,o.x)),y:Math.max(12,Math.min(90,o.y)),angle:Math.max(-360,Math.min(360,o.angle)),scale:Math.max(.5,Math.min(2,o.scale))}));}
export function paint(scene,s,select){scene.style.setProperty('--wall',walls.find(a=>a[0]===s.wall)?.[2]||'#fff0bf');scene.style.setProperty('--floor',floors.find(a=>a[0]===s.floor)?.[2]||'#bc895e');scene.classList.add('decor-scene');let layer=scene.querySelector('.decor-layer');if(!layer){layer=document.createElement('div');layer.className='decor-layer';scene.append(layer);}layer.replaceChildren();for(const [i,o] of cleanDecor(s.decor).entries()){const el=document.createElement(select?'button':'span');el.className='decor-item';el.append(furnitureImage(find(o.id)));el.setAttribute("aria-label",find(o.id).name);el.title=find(o.id).name;el.style.cssText=`left:${o.x}%;top:${o.y}%;transform:translate(-50%,-50%) rotate(${o.angle}deg) scale(${o.scale})`;if(select){el.type='button';el.onclick=()=>select(i);}layer.append(el);}}

export function furnitureImage(item){const img=document.createElement("img");img.loading="lazy";img.decoding="async";img.src=`assets/furniture/${item.id}.svg`;img.alt=item.name;img.draggable=false;return img;}

for(const [id,name,icon,golf] of [['golf0','初クリアトロフィー','🏆','初クリア'],['golf1','金のトロフィー','🏆','ホールインワン'],['golf2','諦めなかったで賞','🎖️','10打以上でクリア'],['golf3','パター','⛳','5ホールクリア'],['golf4','ゴルフバッグ','🎒','15ホールクリア'],['golf5','芝生マット','🟩','30ホールクリア']])items.push({id,name,icon,golf,group:'ゴルフ',price:0});

for(const e of exhibits)items.push({id:e.id,name:e.name,icon:e.icon,group:'お土産',gift:e.name,price:0});
for(const [n,name] of milestones)items.push({id:'museum'+n,name,icon:'🏆',group:'博物館記念品',museum:n,price:0});

for(const [id,name,icon,golf] of [['fwgift0','本格ゴルフバッグ','🎒','本格3ホール制覇'],['fwgift1','ミニチュアゴルフ場','⛳','本格6ホール制覇'],['fwgift2','黄金のカップ','🏆','本格ホールインワン'],['fwgift3','チャンピオン記念盾','🏅','9ホールラウンド35打以下']])items.push({id,name,icon,golf,group:'ゴルフ',price:0});

for(const [id,name,icon,tower] of [['tower0','卓球ラケット','🏓',100],['tower1','卓球台','🏓',300],['tower2','天空のトロフィー','🏆',500]])items.push({id,name,icon,tower,group:'ピンポン',price:0});

items.push(...[['ivgift0','ミニUFO','STAGE 3クリア'],['ivgift1','宇宙船','STAGE 6クリア'],['ivgift2','銀河の壁紙','STAGE 8クリア'],['ivgift3','黄金の宇宙トロフィー','ライフを失わず全クリア']].map(([id,name,invader])=>({id,name,invader,group:'インベーダーズ',price:0,icon:'🛸'})));
walls.push(['galaxy','銀河の壁紙','#211b49']);

items.push(...[['advgift0','冒険者のリュック','3ステージクリア'],['advgift1','冒険の宝箱','5ステージクリア'],['advgift2','天空の壁紙','8ステージクリア'],['advgift3','黄金の冒険トロフィー','全10秘密エリア発見']].map(([id,name,adventure])=>({id,name,adventure,group:'アドベンチャー',price:0,icon:'🏆'})));
walls.push(['adventureSky','天空の壁紙','#bce6fa']);

for(const d of ['easy','normal','hard'])items.push({id:'cup_'+d,name:d.toUpperCase()+'大会トロフィー',icon:'🏆',golf:d.toUpperCase()+'大会優勝',group:'ゴルフ',price:0});
for(const d of ['easy','normal','hard'])items.push({id:'golf_complete_'+d,name:d.toUpperCase()+'全制覇記念盾',icon:'🏅',golf:d.toUpperCase()+'全12ホール制覇',group:'ゴルフ',price:0});

for(const [id,name,icon,n] of [['climb0','冒険のカレー鍋','🍲',5],['climb1','ミニタワー','🗼',25],['climb2','天空のトロフィー','🏆',50]])items.push({id,name,icon,adventure:`タワー大作戦 ${n}面クリア`,group:'冒険',price:0});

import {rewards as pbRewards} from './pinball-rewards.js?v=114924';
for(const [id,name,pinball] of pbRewards)items.push({id,name,pinball,group:'ピンボール',price:0,icon:'🏆'});
walls.push(['pinball','ピンボール専用壁紙','#e8bd73']);
