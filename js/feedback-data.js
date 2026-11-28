export const VERSION='1.1.49.24';
export const screens=['welcome','scoop','game','golf','tower','race','adventure','invader','pinball','climb','escape','town','myroom','travel','collection','museum','theater','votes','visits','events','records','guide','account','detective','playhub','pontalk','ponnews','ponalbum','ponbank'];
export function makeReport({screen,environment={},events=[],comment='',kind='bug',now=new Date()}={}){
 const allowed=['browser','os','viewport','pixelRatio','touch','online'];
 return {version:VERSION,date:now.toISOString(),screen:screens.includes(screen)?screen:'unknown',kind:['bug','idea','impression'].includes(kind)?kind:'bug',comment:String(comment).slice(0,2000),environment:Object.fromEntries(allowed.filter(k=>Object.hasOwn(environment,k)).map(k=>[k,environment[k]])),events:events.slice(-20).filter(e=>['screen','script-error','promise-error','resource-error'].includes(e.type)).map(e=>({type:e.type,screen:screens.includes(e.screen)?e.screen:'unknown',seconds:Math.max(0,Math.round(Number(e.seconds)||0))}))};
}

export function formatReport(r,labels={}){return `ポンポンモンスターズ ${r.version}\n種類：${({bug:'不具合',idea:'機能の要望',impression:'感想'})[r.kind]}\n対象：${labels[r.screen]||r.screen}\n内容：${r.comment}\n端末：${r.environment.os||'不明'} / ${r.environment.browser||'不明'}${r.events.length?'\n技術情報：'+JSON.stringify(r.events):''}`;}
