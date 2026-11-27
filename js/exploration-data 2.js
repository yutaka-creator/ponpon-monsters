// 旅先限定の仲間。IDは既存の16種類の後に追加する。
export const explorers=[
 {base:8,place:6,name:'キノコじぃ',bio:'巨大キノコの下で昔話をしていた。',quote:'昔は傘もキノコじゃ。',color:0xb77945,filter:'sepia(.7)',lines:['キノコにも年輪があるんじゃ。たぶん。','雨の日は家が増えるぞ。']},
 {base:6,place:1,name:'昭和のresource',bio:'そろばんで効率化を図る。',quote:'そろばんで集計します。',color:0xb8a58b,filter:'sepia(1)',lines:['会議の資料は手書きです。','電卓の導入を検討します。']},
 {base:9,place:16,name:'宇宙人こぺ',bio:'宇宙一の美容を目指す。',quote:'銀河でも負けないもん！',color:0x8b69cb,filter:'hue-rotate(110deg)',lines:['無重力なら前髪も盛れる！','宇宙の紫外線対策は完璧。']},
 {base:4,place:15,name:'冷凍味カレー',bio:'解凍される日を待っている。',quote:'まだ解凍が足りんな。',color:0x9bd5ff,filter:'hue-rotate(160deg) brightness(1.2)',lines:['冷凍庫が実家じゃ。','自然解凍を希望する。']},
 {base:1,place:17,name:'200年後のスソスソ',bio:'時代を100年間違えた。',quote:'未来ではこれが昔だよ。',color:0xc2a3e8,filter:'hue-rotate(65deg)',lines:['帰りの時代を忘れたよ。','昨日の200年後に会おう。']},
 {base:2,place:19,name:'無',bio:'何もない場所で発見された。本人も自分がいるのか分かっていない。',quote:'……いる？',color:0xffffff,filter:'grayscale(1) opacity(.18)',lines:['何もしていない。たぶん。','存在確認中。']}
];
export const discoveryChance=.25;
export function discover(place,counts,random=Math.random){const i=explorers.findIndex(e=>e.place===place);return i>=0&&!counts[16+i]&&random()<discoveryChance?16+i:null;}
