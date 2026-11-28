// 日常行動の台本。家具ID・時間帯・セリフを編集できます。
export const activities=[
 {label:'朝ごはん',kind:'eat',furniture:['f3','f11','s4'],hours:[6,11],icon:'🍞',line:'朝ごはんの時間だね。'},
 {label:'おやつ',kind:'eat',furniture:['f42','f3','s0'],hours:[12,18],icon:'🍮',line:'おやつは別腹。'},
 {label:'読書',kind:'sway',furniture:['f12'],icon:'📖',line:'まだ一ページ目。'},
 {label:'テレビ鑑賞',kind:'sway',furniture:['f10'],icon:'📺',line:'次の番組も見ようかな。'},
 {label:'昼寝',kind:'sleep',furniture:['f0','s7','f1'],icon:'💤',line:'ちょっとだけ寝よう。'},
 {label:'夜のひと休み',kind:'sleep',furniture:['f0','s7'],hours:[20,6],icon:'🌙',line:'今日もおつかれさま。'},
 {label:'植物のお世話',kind:'sway',furniture:['f20','f21','f27','f28'],icon:'🌱',line:'大きくなあれ。'},
 {label:'音楽鑑賞',kind:'hop',furniture:['f14','f19','f32','f37'],icon:'♪',line:'いい曲だね。'},
 {label:'おしゃべり',kind:'chat',furniture:[],pair:true,icon:'💬',line:'ちょっと聞いてよ。'},
 {label:'散歩',kind:'walk',furniture:[],icon:'🐾',line:'部屋を一周しよう。'}
];
export function chooseActivity(state,actor,hour,rng=Math.random){
 const other=state.actors.find(a=>a.id!==actor.id);
 const available=activities.filter(a=>{const h=a.hours;return (!h||(h[0]<h[1]?hour>=h[0]&&hour<h[1]:hour>=h[0]||hour<h[1]))&&(!a.pair||other)&&(!a.furniture.length||state.decor.some(f=>a.furniture.includes(f.id)));});
 const a=available[Math.min(available.length-1,Math.floor(rng()*available.length))];
 return {...a,target:state.decor.find(f=>a.furniture.includes(f.id)),other:a.pair?other:undefined};
}

// Personality-weighted selection; existing uniform selector remains compatible.
export const favorites=['お茶会','音楽鑑賞','散歩','散歩','一緒にごはん','おしゃべり','植物のお世話','昼寝','テレビ鑑賞','音楽鑑賞'];
export function chooseLifeActivity(state,actor,hour,rng=Math.random){
 const other=state.actors.find(a=>a.id!==actor.id);
 const extra=[{label:'一緒にごはん',kind:'eat',pair:true,furniture:['f3','f11','s4'],icon:'🍚',line:'一緒に食べるとおいしいね。'},{label:'一緒にテレビ',kind:'sway',pair:true,furniture:['f10'],icon:'📺',line:'この番組、面白いね。'},{label:'お茶会',kind:'eat',pair:true,furniture:['s0','f3'],icon:'☕',line:'お茶にしましょう。'}];
 const available=[...activities,...extra].filter(a=>{const h=a.hours;return (!h||(h[0]<h[1]?hour>=h[0]&&hour<h[1]:hour>=h[0]||hour<h[1]))&&(!a.pair||other)&&(!a.furniture.length||state.decor.some(f=>a.furniture.includes(f.id)));});
 const weighted=available.flatMap(a=>Array(a.label===favorites[actor.id]?4:1).fill(a));const a=weighted[Math.min(weighted.length-1,Math.floor(rng()*weighted.length))];return {...a,target:state.decor.find(f=>a.furniture.includes(f.id)),other:a.pair?other:undefined};
}
