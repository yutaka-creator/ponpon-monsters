export function progressGroups(monsters,furniture,badges,memories){return [monsters,furniture,badges,memories].map(a=>({done:a.filter(Boolean).length,total:a.length}));}
export function completedCount(a,max){return new Set((Array.isArray(a)?a:[]).filter(n=>Number.isInteger(n)&&n>=1&&n<=max)).size;}
export function pinballScores(p={}){return Array.from({length:10},(_,i)=>Math.max(0,Number.isSafeInteger(p.tables?.[i])?p.tables[i]:0,i===0&&Number.isSafeInteger(p.best)?p.best:0));}
