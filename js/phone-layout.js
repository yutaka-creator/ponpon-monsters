export function normalizeOrder(defaults,saved){const allowed=new Set(defaults);return [...new Set([...(Array.isArray(saved)?saved:[]),...defaults].filter(x=>allowed.has(x)))];}
export function moveIcon(order,id,delta){const result=[...order],i=result.indexOf(id),j=i+delta;if(i>=0&&j>=0&&j<result.length)[result[i],result[j]]=[result[j],result[i]];return result;}
export function swipePage(current,dx,dy){return Math.abs(dx)>=55&&Math.abs(dx)>Math.abs(dy)*1.4?(dx<0?'life':'games'):current;}
