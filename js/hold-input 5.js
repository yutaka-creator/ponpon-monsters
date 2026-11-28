// Each physical contact owns its action until release, independent of capture loss.
export function bindHold(buttons,attr,set,{win=window,doc=document}={}){
 const held=new Map();
 const start=(id,b)=>{if(held.has(id)||b.disabled)return;const key=b.dataset[attr];held.set(id,key);set(key,true);};
 const end=id=>{if(!held.has(id))return;const key=held.get(id);held.delete(id);if(![...held.values()].includes(key))set(key,false);};
 const clear=()=>{for(const key of new Set(held.values()))set(key,false);held.clear();};
 const touch='ontouchstart' in win||(win.navigator?.maxTouchPoints||0)>0;
 for(const b of buttons){
 b.addEventListener('pointerdown',e=>{if(touch&&e.pointerType==='touch'||e.button!==0)return;e.preventDefault();start('p'+e.pointerId,b);try{b.setPointerCapture(e.pointerId);}catch{}});
 if(touch)b.addEventListener('touchstart',e=>{e.preventDefault();for(const t of e.changedTouches)start('t'+t.identifier,b);},{passive:false});
 }
 for(const type of ['pointerup','pointercancel'])win.addEventListener(type,e=>end('p'+e.pointerId),true);
 win.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&!e.buttons)end('p'+e.pointerId);},true);
 for(const type of ['touchend','touchcancel'])win.addEventListener(type,e=>{for(const t of e.changedTouches)end('t'+t.identifier);},true);
 for(const type of ['blur','pagehide'])win.addEventListener(type,clear);
 for(const type of ['visibilitychange','ponpon:tab'])doc.addEventListener(type,clear);
 return {clear};
}
