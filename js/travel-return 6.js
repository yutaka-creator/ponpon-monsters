// 帰宅通知と報酬発表。報酬の保存は travel.js が担当。
export function isHome(trip,now=Date.now()){return !!trip&&now>=trip.end;}
export function revealSteps(entry,isNew){return [{kind:'gift',name:entry.gift,isNew},...(Number.isInteger(entry.discovery)?[{kind:'monster',id:entry.discovery}]:[])];}
export function createReturnUI({photo,profiles,destinations,onOpen}){
 const notice=document.createElement('button');notice.id='travel-return-notice';notice.hidden=true;notice.type='button';notice.setAttribute('aria-live','polite');notice.onclick=onOpen;document.body.append(notice);
 const dialog=document.createElement('dialog');dialog.id='travel-return-dialog';dialog.setAttribute('aria-label','おかえりポンポン');document.body.append(dialog);
 let steps=[],index=0,entry;
 const el=(tag,text)=>{const n=document.createElement(tag);n.textContent=text;return n;};
 function draw(){dialog.replaceChildren();dialog.append(el('p',`おかえり！ ${destinations[entry.place][0]}の旅`));const faces=el('div','');faces.className='return-faces';entry.ids.forEach(i=>faces.append(photo(i)));dialog.append(faces);const stage=el('div','');stage.className='return-stage';if(index<0){stage.append(el('h2','ただいま！'),el('p','お土産を持って帰ってきたよ。'));}else{const s=steps[index];stage.append(el('p',s.kind==='gift'?'お土産発表！':'新しい仲間を発見！'));if(s.kind==='monster')stage.append(photo(s.id));else stage.append(el('div','🎁'));stage.append(el('h2',s.kind==='gift'?s.name:profiles[s.id][0]));if(s.kind==='gift')stage.append(el('p',s.isNew?'NEW！ お土産図鑑に登録':'お土産を持ち帰ったよ'));}dialog.append(stage);const next=el('button',index<0?'お土産を見る':index+1<steps.length?'次の発表へ':'おかえり！');next.type='button';next.onclick=()=>{if(index+1>=steps.length){dialog.close();return;}index++;draw();};dialog.append(next);next.focus();}
 return {notify(trip){notice.hidden=!isHome(trip);if(!notice.hidden)notice.textContent='🏠 ポンポンが帰ってきたよ！ お迎えする →';},show(a,isNew){entry=a;steps=revealSteps(a,isNew);index=-1;draw();if(!dialog.open)dialog.showModal();}};
}
