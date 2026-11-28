export const conversations=[
{id:'curry',name:'味カレー',icon:'🍛',messages:['今日の晩ご飯、何にする？','カレー以外の選択肢も尊重するよ。','でもカレーにしてほしい。'],choices:['カレーにしようかな。','今日は別のものかな。'],replies:['君とは長い付き合いになりそうだ。','明日のカレーに期待しておくね。']},
{id:'earth',name:'地球',icon:'🌍',messages:['今日は何をして過ごす？','僕は今日も回ってるよ。'],choices:['少し遊ぼうかな。','ゆっくり休むよ。'],replies:['いいね！ 僕も一周してくる。','休むのも大切。僕は回りながら応援するね。']},
{id:'unicorn',name:'ユニコーン',icon:'🦄',messages:['虹を探していたら、道に迷ったよ。','でも景色がきれいだった！'],choices:['一緒に探そう。','寄り道もいいね。'],replies:['ありがとう！ 地図は逆さまじゃないよね？','そうだね。今日は寄り道記念日！']},
{id:'office',name:'ポンポン探偵事務所',icon:'🔎',messages:['今日も探偵事務所は営業中です。','急がなくても大丈夫。事件は逃げません。たぶん。'],choices:['あとで行くね。','今日はお休み。'],replies:['お待ちしています！','了解です。探偵もお茶にします。']}
];
export function dayKey(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export function deliver(state,day){const s=state&&typeof state==='object'?state:{};const days=Array.isArray(s.days)?s.days.filter(x=>x&&typeof x.day==='string'&&conversations.some(c=>c.id===x.id)):[];if(days.some(x=>x.day===day))return {days};const n=Number(day.replaceAll('-',''));return {days:[...days,{day,id:conversations[n%conversations.length].id,read:false,reply:null}]};}
export function respond(state,day,choice){return {days:state.days.map(x=>x.day===day&&x.reply==null&&[0,1].includes(choice)?{...x,read:true,reply:choice}:x)};}
