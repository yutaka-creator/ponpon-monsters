export const rackets=[
{id:'classic',name:'クラシック',height:0,face:'#d66a53',rim:'#e6bd8b',handle:'#c9a47a'},
{id:'wood',name:'木製ラケット',height:50,face:'#a77949',rim:'#e4c99a',handle:'#805c39'},
{id:'ice',name:'アイスブルー',height:200,face:'#72c9e8',rim:'#e1f7ff',handle:'#5589a8'},
{id:'rainbow',name:'レインボー',height:300,face:'#b68bdf',rim:'#f3d76e',handle:'#72c9b3',bands:['#e66b72','#f2ad60','#f3d76e','#79bd87','#72b9df','#b68bdf']},
{id:'gold',name:'ゴールド',height:500,face:'#e8b83e',rim:'#fff0a0',handle:'#a7772c'},
{id:'space',name:'ギャラクシー',height:1000,face:'#49427e',rim:'#9b9de8',handle:'#303052'}];
export function racketFor(id,best){return rackets.find(r=>r.id===id&&best>=r.height)||rackets[0];}
