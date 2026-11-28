export const steps=[
 {title:'仲間を迎えよう',text:'クレーンの方向ボタンで位置を合わせ、つかむ！を押そう。ゲージの中央を狙って3回タップすると握力が変わるよ。',target:'game'},
 {title:'仲間と暮らそう',text:'獲得した仲間は図鑑に登録されるよ。マイルームに仲間を配置して、会話や家具の模様替えを楽しもう。',target:'myroom'},
 {title:'街を散歩しよう',text:'ポンポンタウンでは矢印で移動し、近くの住人や建物を調べられるよ。思い出に期限はないよ。',target:'town'},
 {title:'好きな遊びを見つけよう',text:'ホームの「すぐ遊ぶ」からゲームを選べるよ。登録なしでも遊べるけれど、端末の記録が消えることもあるのでアカウント画面でバックアップしてね。',target:'welcome'}
];
export const nextIndex=(i,delta)=>Math.max(0,Math.min(steps.length-1,i+delta));
