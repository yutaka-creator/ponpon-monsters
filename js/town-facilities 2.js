export const facilities=[
{id:'cafe',name:'喫茶ポンポン',icon:'☕',host:0,scene:'🪴　🪟　🪴\n☕　🪑　🍰',actions:[['紅茶を楽しむ','特売の紅茶も、ゆっくり飲めば高級ですわ。'],['お茶会','今日は窓辺の席でおしゃべりですわ。']]},
{id:'restaurant',name:'カレー食堂',icon:'🍛',host:4,scene:'🍳　🍲　🥄\n🍛　🪑　🍛',actions:[['カレーを食べる','隠し味は秘密や。わしも忘れた。'],['おすすめを聞く','今日も明日もカレーや！']]},
{id:'cinema',name:'ポンポン映画館',icon:'🎬',host:8,scene:'🎞️　📽️　🎞️\n🪑　🍿　🪑',actions:[['上映案内','今日はポンポン劇場の上映じゃ。'],['ポップコーン','映画が始まる前に食べきってしもうた。']]},
{id:'salon',name:'こぺの美容室',icon:'💈',host:9,scene:'🪞　✂️　🎀\n🧴　🪑　🧴',actions:[['美容相談','休むのも美容だもん！'],['髪型相談','毛並みはそのままでもかわいいもん！']]},
{id:'bath',name:'ぽかぽか銭湯',icon:'♨️',host:7,scene:'🪟　♨️　🪟\n🫧　🛁　🫧',actions:[['お風呂に入る','ふう。今日はもう何もしない。'],['休憩する','のんびりするのも大事だね。']]},
{id:'store',name:'ポンポンコンビニ',icon:'🏪',host:6,scene:'🥪　🍙　🥤\n🛒　🧺　🛍️',actions:[['商品を見る','効率よく並べたら全部同じ棚になりました。'],['おやつを選ぶ','今日は試食サービスです。']]}
];
export function facilityAction(id,index){return facilities.find(f=>f.id===id)?.actions[index]?.[1]??null;}
