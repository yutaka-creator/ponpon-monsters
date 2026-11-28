import {walkable,treasures} from './town-data.js?v=114911';
export function townPeriod(h){return h<5||h>=19?{key:'night',label:'🌙 夜'}:h<10?{key:'morning',label:'☀ 朝'}:h<16?{key:'day',label:'☀ 昼'}:{key:'evening',label:'🌇 夕方'};}
const lines={4:['福神漬けだけ買いに来たんや。','散歩の後のカレーは格別や。'],8:['ベンチで休むのも立派な予定じゃ。','今日は昔話を短めにするぞ。たぶん。'],9:['噴水の前は写真映えするもん！','今日は日焼け対策もばっちり！'],0:['喫茶ポンポンへようこそですわ。','紅茶のおかわりは心の中で無料ですわ。']};
export function dialogue(r,n,period){const a=[r.id===0?'喫茶ポンポンを開店しましたわ！':r.line,...(lines[r.id]||[])];const pool=[...a,...(extra[r.id]||[]),...(periodLines[r.id]?.[period]||[])];return pool[n%pool.length];}
export function stepResident(r,people,player,random=Math.random){const dirs=[[0,0],[1,0],[-1,0],[0,1],[0,-1]], [dx,dy]=dirs[Math.floor(random()*dirs.length)];const x=r.x+dx,y=r.y+dy;if(y<4||y>6||!walkable(x,y,people)||player.x===x&&player.y===y||treasures.some(t=>t.x===x&&t.y===y))return r;return {...r,x,y};}

const extra={4:['春野菜もええな。','カレーの香りで道案内や。','鍋のふたを探して三日目や。'],8:['季節が巡るのは早いのう。','散歩に締め切りはないぞ。','今日はお茶にしようか。'],9:['季節ごとにリボンを変えるもん！','鏡がなくてもかわいいもん！','休むのも美容だもん。'],0:['家具の特売も気になりますわ。','窓辺の席がおすすめですわ。','お茶菓子は想像でどうぞ。']};
export function townSeason(month){return month>=3&&month<=5?{key:'spring',label:'春',flower:'🌸',tree:'🌸'}:month>=6&&month<=8?{key:'summer',label:'夏',flower:'🌻',tree:'🌳'}:month>=9&&month<=11?{key:'autumn',label:'秋',flower:'🍂',tree:'🍁'}:{key:'winter',label:'冬',flower:'❄️',tree:'🌲'};}

const periodLines={4:{morning:['朝カレーもええで。'],night:['鍋を洗って帰るか。']},8:{morning:['朝の空気はええのう。'],night:['星を見てから帰るぞ。']},9:{morning:['朝の散歩で美容ポイント！'],night:['今日は早く寝るもん！']},0:{morning:['開店準備ですわ。'],night:['閉店前の紅茶ですわ。']}};
