const selector="button,canvas,[data-race],[data-iv],[data-adv]";document.addEventListener("contextmenu",e=>{if(e.target.closest?.(selector))e.preventDefault();});
window.addEventListener('pagehide',()=>window.dispatchEvent(new Event('blur')));

document.addEventListener("visibilitychange",()=>{if(document.hidden)window.dispatchEvent(new Event("blur"));});
document.addEventListener("ponpon:tab",()=>window.dispatchEvent(new Event("blur")));
