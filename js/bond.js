import {read,write} from './save-store.js';
import {profiles} from './profiles.js';
export const levels=[0,5,15,30,50];
export const labels=['はじめまして','顔見知り','お友達','仲良し','大切な相棒'];
const KEY='ponpon-catcher.bond.v1';
let points=Array(profiles.length).fill(0), saved=true;
try{const raw=JSON.parse(read(KEY));if(Array.isArray(raw))points=points.map((_,i)=>Number.isInteger(raw[i])?Math.max(0,Math.min(50,raw[i])):0);}catch{saved=false;}
export function bond(id){const xp=points[id]??0;const level=levels.filter(n=>xp>=n).length;return {xp,level,label:labels[level-1],next:levels[level]??50,saved};}
export function greet(id){const before=bond(id);if(!Number.isInteger(id)||id<0||id>=points.length)return before;points[id]=Math.min(50,before.xp+1);try{write(KEY,JSON.stringify(points));saved=true;}catch{saved=false;}return {...bond(id),up:bond(id).level>before.level};}
// 内部ID順。Lv.2〜5の限定セリフ。
const lines=[
['またお会いしましたわね。','特売情報をあなただけに教えますわ。','お茶の席を空けておきましたわ。','あなたとなら定価のお菓子も惜しくないですわ。'],
['未来でもまた会ったよ。','君と会うことを昨日予言したよ。','未来のお土産、忘れてきた。','どの時代でも君は相棒だよ。'],
['また会えたね、運命だね。','綿あめを半分こしよう。','君といると魔法がなくても楽しい。','君に会えたのが一番の魔法だね。'],
['今日も地球は回ってるよ。','世界地図を一緒に見よう。','迷子になったら迎えに来てね。','世界一周より君との散歩が好きだよ。'],
['今日も煮込んでおるぞ。','福神漬けを分けてやろう。','お前の分も甘口にしておいた。','相棒のためなら一晩中煮込むぞ。'],
['また来てくれたんや。','チョコ半分あげるで。','友情もドラマになるんやな。','相棒って最高の関係やん！'],
['再訪を確認しました。','あなたとの雑談は議事録不要です。','今日は効率を気にせず話しましょう。','あなたとの時間は数値化できません。'],
['あ、また来た。','隣で寝てもいいよ。','今日は起きて待ってたよ。たぶん。','相棒なら無言でもいいよね。'],
['おお、また来たか。','お茶を二杯入れたぞ。','今日はお前の話を聞こうかの。','わしの昔話に付き合ってくれてありがとうな。'],
['今日の前髪どう？','君にはすっぴんでも会えるかも。','一緒に写真撮ろうよ！','君は加工なしでも最高の相棒だよ！']];
export function bondLine(id,level){return lines[id]?.[level-2]??(level>=2?['また会えたね。','一緒にいると楽しいね。','今日も会えてうれしいよ。','これからも大切な相棒だよ。'][level-2]:null);}
