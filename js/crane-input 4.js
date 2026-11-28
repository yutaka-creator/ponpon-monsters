// Track physical presses independently of keyboard input and pointer capture.
export function bindCraneInput({buttons,win,doc,canStart,nudge}) {
 const held=new Map();
 const touchMode='ontouchstart' in win || (win.navigator?.maxTouchPoints||0)>0;
 const start=(id,button)=>{if(!canStart()||held.has(id))return;held.set(id,button.dataset.dir);nudge(button.dataset.dir);};
 const stop=id=>held.delete(id);
 const clear=()=>held.clear();
 for(const b of buttons){
  b.addEventListener('contextmenu',e=>e.preventDefault());
  b.addEventListener('pointerdown',e=>{if(touchMode&&e.pointerType==='touch')return;if(e.button!==0)return;e.preventDefault();start('p'+e.pointerId,b);try{b.setPointerCapture(e.pointerId);}catch{}});
  // Native touch tracking survives incidental pointer-capture loss on mobile.
  if(touchMode)b.addEventListener('touchstart',e=>{e.preventDefault();for(const t of e.changedTouches)start('t'+t.identifier,b);},{passive:false});
 }
 for(const type of ['pointerup','pointercancel'])win.addEventListener(type,e=>stop('p'+e.pointerId),true);
 win.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&e.buttons===0)stop('p'+e.pointerId);},true);
 for(const type of ['touchend','touchcancel'])win.addEventListener(type,e=>{for(const t of e.changedTouches)stop('t'+t.identifier);},true);
 for(const type of ['blur','pagehide'])win.addEventListener(type,clear);
 for(const type of ['visibilitychange','ponpon:tab'])doc.addEventListener(type,clear);
 return {has:d=>[...held.values()].includes(d),clear};
}
