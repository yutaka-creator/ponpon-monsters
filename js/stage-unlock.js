export function unlockedStage(cleared,max,legacy=1){const valid=Array.isArray(cleared)?cleared.filter(n=>Number.isInteger(n)&&n>=1&&n<=max):[];return Math.min(max,Math.max(1,Number.isInteger(Number(legacy))?Number(legacy):1,...valid.map(n=>n+1)));}
export function stageAllowed(id,limit,max,dev=false){return Number.isInteger(id)&&id>=1&&id<=max&&(dev||id<=limit);}
export function stageLabel(id,label,cleared,limit,dev=false){return `${id} ${label}${cleared.includes(id)?' ✓':id>limit?(dev?' [TEST]':' 🔒'):''}`;}
export function developerStages(){return ['localhost','127.0.0.1','[::1]'].includes(location.hostname)&&new URLSearchParams(location.search).get('devStages')==='1';}
