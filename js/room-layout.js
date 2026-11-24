(()=>{
 const room=document.getElementById('myroom'); if(!room)return;
 const tabs=[...room.querySelectorAll('[data-room-tab]')];
 const panels=[...room.querySelectorAll('[data-room-panel]')];
 function select(id){for(const b of tabs)b.setAttribute('aria-pressed',String(b.dataset.roomTab===id));for(const p of panels)p.hidden=p.dataset.roomPanel!==id;}
 tabs.forEach(b=>b.addEventListener('click',()=>select(b.dataset.roomTab)));
 select('actors');
})();
