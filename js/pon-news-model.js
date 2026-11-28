export const articles=[
['earth','町の話題','地球さん、本日も無事に一回転','地球さんは取材に対し「いつも通りです」とコメントしました。明日も回る予定だそうです。','🌍'],
['curry','グルメ','味カレーさん、カレー味のカレーを開発','開発に3か月を費やしたとのことです。試食した住民は「カレーですね」と話しました。','🍛'],
['rainbow','お出かけ','ユニコーンさん、虹を探す途中で迷子に','本人は「冒険の途中です」と説明。無事に帰宅し、次は地図を持参するそうです。','🦄'],
['office','町の話題','探偵事務所、お茶の時間を延長','理由はお茶がまだ熱かったため。事件の受付は通常通りです。','🔎'],
['race','スポーツ','レース観客、応援に夢中でゴールを見逃す','本人は「いい応援ができた」と満足そうでした。','🏁'],
['room','暮らし','町のクッション、座り心地の調査で高評価','調査員の半数がそのまま昼寝をしたため、調査は翌日に持ち越されました。','🛋️'],
['golf','スポーツ','ゴルフ場でボールを探す大会が開催','優勝者は自分のボールを発見。参加者全員が拍手しました。','⛳'],
['letter','暮らし','何もしない日を楽しむ住民が増加','住民は「今日は予定を入れない予定です」と話しました。','☕']
].map(([id,category,title,body,icon])=>({id,category,title,body,icon}));
export function edition(day){const n=Math.floor(Date.parse(day+'T00:00:00Z')/86400000);if(!Number.isFinite(n))return [];return [0,1,2].map(i=>articles[((n*3+i)%articles.length+articles.length)%articles.length]);}
export function publish(state,day){const days=Array.isArray(state?.days)?state.days.filter(x=>x&&typeof x.day==='string'&&Array.isArray(x.ids)):[];return {days:days.some(x=>x.day===day)?days:[...days,{day,ids:edition(day).map(a=>a.id),read:[]}]};}
export function markRead(state,day,id){return {days:state.days.map(x=>x.day===day&&x.ids.includes(id)?{...x,read:[...new Set([...(x.read||[]),id])]}:x)};}
