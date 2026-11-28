export function caseNotices(cases, solved){return cases.flatMap((c,i)=>solved(c.id)?['talk','news','album'].map(kind=>({id:`${c.id}:${kind}`,kind,title:c.title,number:i+1})):[]);}
export function unreadNotices(items,read){return items.filter(x=>!read.includes(x.id));}
