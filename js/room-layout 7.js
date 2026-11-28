(()=>{
 const room=document.getElementById('myroom'); if(!room)return;
 const tabs=[...room.querySelectorAll('[data-room-tab]')];
 const panels=[...room.querySelectorAll('[data-room-panel]')];
 function select(id){room.querySelector(".room-panels").scrollTop=0;if(!panels.some(p=>p.dataset.roomPanel===id))return;room.dataset.editMode=id==="settings"?"furniture":"actors";for(const b of tabs)b.setAttribute('aria-pressed',String(b.dataset.roomTab===id));for(const p of panels){p.hidden=p.dataset.roomPanel!==id;if(!p.hidden)p.scrollTop=0;}}
  
 tabs.forEach(b=>b.addEventListener('click',()=>select(b.dataset.roomTab)));
 select('actors');
})();
