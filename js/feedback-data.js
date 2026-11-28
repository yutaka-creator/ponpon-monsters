export const VERSION='1.1.44.0';
export const screens=['welcome','game','golf','tower','race','adventure','invader','pinball','climb','escape','town','myroom','travel','collection','museum','theater','votes','visits','events','records','guide','account'];
export function makeReport({screen,environment={},events=[],comment='',kind='bug',now=new Date()}={}){
 const allowed=['browser','os','viewport','pixelRatio','touch','online'];
 return {version:VERSION,date:now.toISOString(),screen:screens.includes(screen)?screen:'unknown',kind:['bug','idea','impression'].includes(kind)?kind:'bug',comment:String(comment).slice(0,2000),environment:Object.fromEntries(allowed.filter(k=>Object.hasOwn(environment,k)).map(k=>[k,environment[k]])),events:events.slice(-20).filter(e=>['screen','script-error','promise-error','resource-error'].includes(e.type)).map(e=>({type:e.type,screen:screens.includes(e.screen)?e.screen:'unknown',seconds:Math.max(0,Math.round(Number(e.seconds)||0))}))};
}
