export const dailyEvents=[
 ['curry','🍛 カレーの日','味カレー','今日のカレーは昨日より今日っぽい！','おすすめを聞く'],
 ['market','🛍 フリーマーケット','resource','掘り出し物は見るだけでも楽しいですよ。','品物を眺める'],
 ['fashion','🎀 おしゃれの日','こぺ','好きな色が一番似合うもん！','美容相談をする'],
 ['stars','🌟 星空観察会','地球','遠い星にも友達がいるかもね。','星を眺める'],
 ['hunt','🔎 宝探し大会','スソスソ','未来の宝物は今日の思い出です。','宝箱を探す'],
 ['festival','🏮 ポンポン祭り','かずじぃ','お祭りはのんびり楽しむもんじゃ。','お祭りを楽しむ']
];
export function dailyEvent(date=new Date()){const day=Math.floor(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())/86400000);return dailyEvents[((day%6)+6)%6];}
export function cleanDaily(value){return dailyEvents.map(e=>e[0]).filter(id=>Array.isArray(value)&&value.includes(id));}
export function attend(value,id){return cleanDaily([...cleanDaily(value),id]);}
