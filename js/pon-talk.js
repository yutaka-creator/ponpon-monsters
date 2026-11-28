import {conversations,dayKey,deliver,respond} from './pon-talk-model.js?v=114924';
const key='ponpon.talk.v1',root=document.getElementById('pontalk'),list=document.getElementById('talk-list'),thread=document.getElementById('talk-thread'),badge=document.getElementById('talk-badge');let state={},active=null;try{state=JSON.parse(localStorage.getItem(key))||{}}catch{}function save(){try{localStorage.setItem(key,JSON.stringify(state))}catch{document.getElementById('talk-status').textContent='この端末では履歴を保存できません。'}}function el(tag,text,cls){const e=document.createElement(tag);e.textContent=text;if(cls)e.className=cls;return e;}function refresh(){state=deliver(state,dayKey());save();const n=state.days.filter(x=>!x.read).length;badge.hidden=!n;badge.textContent=String(n);badge.parentElement.setAttribute('aria-label',`メッセージ 未読${n}件`);list.replaceChildren();for(const x of [...state.days].reverse()){const c=conversations.find(c=>c.id===x.id),b=el('button',`${c.icon} ${c.name}　${x.read?'':'● 未読'}\n${x.day}`,'talk-contact');b.type='button';b.onclick=()=>open(x.day);list.append(b);}if(active)renderThread();}function open(day){active=day;state={days:state.days.map(x=>x.day===day?{...x,read:true}:x)};list.hidden=true;thread.hidden=false;refresh();}function renderThread(){
 const x=state.days.find(x=>x.day===active);if(!x)return;
 const c=conversations.find(c=>c.id===x.id);
 const old=thread.querySelector('.talk-messages');
 const previous=old?.scrollTop??0;
 const follow=!old||thread.dataset.day!==active||thread.dataset.reply!==String(x.reply)||old.scrollHeight-old.clientHeight-previous<48;
 thread.dataset.day=active;thread.dataset.reply=String(x.reply);thread.replaceChildren();
 const header=el('div','','talk-header'),back=el('button','← 一覧');back.type='button';back.onclick=()=>{active=null;thread.hidden=true;list.hidden=false;thread.replaceChildren();refresh()};
 header.append(back,el('h3',`${c.icon} ${c.name}`));
 const messages=el('div','','talk-messages');messages.tabIndex=0;messages.setAttribute('aria-label','会話履歴・上下にスクロール');messages.append(el('small',x.day,'talk-date'));
 for(const m of c.messages)messages.append(el('p',m,'talk-bubble'));
 const footer=el('div','','talk-footer'),latest=el('button','↓ 最新メッセージへ','talk-latest');latest.type='button';latest.onclick=()=>{messages.scrollTop=messages.scrollHeight};footer.append(latest);
 if(x.reply==null){for(const [i,m] of c.choices.entries()){const b=el('button',m,'talk-choice');b.type='button';b.onclick=()=>{state=respond(state,active,i);refresh()};footer.append(b);}}
 else if(c.choices[x.reply])messages.append(el('p',c.choices[x.reply],'talk-bubble talk-own'),el('p',c.replies[x.reply],'talk-bubble'));
 thread.append(header,el('small','会話履歴は上下にスクロールできます','talk-scroll-hint'),messages,footer);
 messages.scrollTop=follow?messages.scrollHeight:previous;
}
document.addEventListener('ponpon:tab',e=>{if(['welcome','pontalk'].includes(e.detail))refresh()});document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh()});refresh();
