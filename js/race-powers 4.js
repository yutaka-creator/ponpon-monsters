// Internal collection IDs; multipliers relative to the standard kart.
export const POWERS=[
['お上品な走り',.98,1,1.12,1,1,1],
['未来のエンジン',1.05,.94,1,1,1,1],
['虹のブースト',.98,.98,1,1.3,1,1],
['バランス型',1,1,1,1,1,1],
['カレー加速',.97,1.25,.95,1,1,1],
['恋のバリア',.98,1,1,1,1,1.5],
['効率的な操作',.98,1,1.25,1,1,1],
['のんびりオフロード',.97,1,1,1,.5,1],
['重量級',1.02,.9,.9,1,1,1],
['美容ドリフト',.98,1,1.1,1.45,1,1]
].map(([name,speed,accel,steer,drift,rough,shield],id)=>({id,name,speed,accel,steer,drift,rough,shield,contact:id===8?.45:1}));
export function powerFor(id){return POWERS[id]??POWERS[3];}
