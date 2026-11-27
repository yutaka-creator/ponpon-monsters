import {explorers} from './exploration-data.js?v=10000';
export const secrets=[
 {base:8,name:'黄金のかずじぃ',color:0xffc52b,condition:'フィーバー発動',bio:'昔話まで黄金色。',quote:'金の時代じゃ。'},
 {base:3,name:'真っ白な地球',color:0xffffff,condition:'地球を5体獲得',bio:'雪の日の地球。',quote:'今日は真っ白。'},
 {base:9,name:'巨大こぺ',color:0x079b42,scale:1.3,condition:'こぺを5体獲得',bio:'美容への投資が実を結んだ。',quote:'負けないもん！'},
 {base:2,name:'透明ユニコーン',color:0xcceeff,opacity:.45,condition:'PERFECTを9回連続',bio:'存在感はあるのに姿が薄い。',quote:'見えてる？'},
 {base:1,name:'100年後のパペットスソスソ',color:0x9ca4c8,condition:'累計30体獲得',bio:'さらに未来から来た。',quote:'100年ぶり！'},
 {base:4,name:'伝説の味カレー',color:0x777044,condition:'10回連続で獲得失敗',bio:'自称カレー界の伝説。普通の出来事も壮大な冒険として語る。',quote:'わしの伝説を知らんのか？'}
];
secrets.push(...explorers.map(e=>({...e,condition:"旅先で発見"})));
secrets.push({base:3,name:'ゴルフ地球',color:0x82ba55,filter:'hue-rotate(65deg)',condition:'ゴルフ全30ホールクリア',bio:'地球規模のゴルフ場を探している。',quote:'地球がボールになる日が来た。'});
secrets.push({base:8,name:'ゴルフじぃ',color:0xe7e6d8,filter:'grayscale(1) brightness(1.35)',condition:'本格3Dゴルフ全9ホール制覇',bio:'ゴルフボールに似ているが、ゴルフは苦手。',quote:'わしは打つ側じゃ。'}, {base:2,name:'虹のキャディー',color:0xf4cc70,filter:'hue-rotate(65deg) saturate(1.5)',condition:'本格全9ホールでバーディー以上',bio:'クラブより虹を運ぶキャディー。',quote:'次のホールに虹をかけよう！'});
secrets.push({base:9,name:'宇宙ピンポンこぺ',color:0x9d7ee8,filter:'hue-rotate(145deg) saturate(1.3)',condition:'ピンポンタワー500m到達',bio:'宇宙でもラケットを手放さない。',quote:'銀河でも負けないもん！'});
secrets.push({base:9,name:'インベーダーこぺ',color:0x42d9d8,filter:'hue-rotate(100deg) saturate(1.5)',condition:'インベーダーズ全10ステージクリア',bio:'宇宙でも美容と平和を守る。',quote:'銀河一かわいくなるもん！'});
export function secretState(){let streak=0,failures=0;return {beats(scores){for(const s of scores)streak=s===100?streak+1:0;},attempt(success){failures=success?0:failures+1;},eligible(counts,fever){return [fever,counts[3]>=5,counts[9]>=5,streak>=9,counts.reduce((a,b)=>a+b,0)>=30,failures>=10];}};}

secrets.push({base:3,name:'冒険家ポンポン',color:0xd6a45d,filter:'sepia(.8) saturate(1.4)',condition:'アドベンチャー全10ステージクリア',bio:'地図を逆さに持って世界を旅する冒険家。',quote:'寄り道こそ冒険だ！'});
