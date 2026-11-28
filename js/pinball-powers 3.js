export const powers=[
[3,'地球','バランス型'],[2,'ユニコーン','虹色マルチボール'],[4,'味カレー','バンパー得点2倍',{points:2}],[5,'バレンタイン','落下から1回復活',{revive:true}],[0,'Mrs.プリングルスアップル','得点20%増加',{points:1.2}],[1,'未来のパペットスソスソ','落下直前に1回ワープ',{warp:true}],[6,'resource','コンボ受付4秒'],[7,'うーぱーるーぱー','発射後3秒スロー',{slow:true}],[8,'かずじぃ','初期ボール5球',{balls:5}],[9,'こぺ','フィーバー25秒']].map(([id,name,description,extra])=>({id,name,description,points:1,balls:3,...extra}));
export const powerFor=id=>powers.find(p=>p.id===id)||powers[0];
