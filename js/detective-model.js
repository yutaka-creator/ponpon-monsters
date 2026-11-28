export const cases=[{id:'snack',title:'消えたお菓子の謎',intro:'15時のおやつのポテトチップスが消えた！ 14時50分から15時までに何があった？',reward:50,suspects:[{id:'apple',image:0,name:'Mrs.プリングルスアップル',line:'14時55分？ ずっと台所でお茶を入れていましたわ。お菓子には触れていませんの。'},{id:'earth',image:3,name:'地球',line:'14時50分から15時まで、ユニコーンと庭で雲を数えていたよ。'},{id:'unicorn',image:2,name:'ユニコーン',line:'地球とずっと庭にいたよ。雲は7個。台所から袋を開ける音が聞こえた！'}],clues:[{id:'bag',name:'空のお菓子袋',text:'台所のごみ箱に空の袋。袋には14時55分に開封したと書かれたメモがある。'},{id:'camera',name:'庭の写真',text:'14時50分から15時までの連続写真に地球とユニコーンが写っている。'},{id:'cup',name:'紅茶のトレー',text:'アップルの名前入りトレーにポテトチップスの食べかす。'}],culprit:'apple',proof:'cup',ending:'アップル「お茶のお供に一枚だけ……のつもりが、袋が空になっていましたわ！」 みんなで新しいお菓子を分けることになった。'}];
cases.push(...[{"id": "pudding", "title": "第2話 プリンに醤油をかけたのは誰だ？", "intro": "冷蔵庫のプリンが醤油味に！", "reward": 50, "suspects": [{"id": "a", "name": "アップル", "line": "新しい味を試したかったの。"}, {"id": "b", "name": "地球", "line": "冷蔵庫には近づいていないよ。"}, {"id": "c", "name": "ユニコーン", "line": "庭で地球と遊んでいたよ。"}], "clues": [{"id": "proof", "name": "味見ノート", "text": "アップルの字で「みんなのプリンに醤油を追加」とある。"}, {"id": "report", "name": "現場の記録", "text": "最初の報告：冷蔵庫のプリンが醤油味に！"}, {"id": "note", "name": "聞き込みメモ", "text": "証言だけで決めつけず、現場の記録と照らし合わせよう。"}], "culprit": "a", "proof": "proof", "ending": "善意でも相手の希望とは違うことがある。", "choices": [{"label": "次は先に聞いてみる", "text": "次は先に聞いてみることにした。みんなで少しずつ話し合うことになった。"}, {"label": "別々の味を用意する", "text": "別々の味を用意することにした。すぐに答えが出なくても、次の一歩を考えられた。"}]}, {"id": "song", "title": "第3話 夜中に聞こえる謎の歌声", "intro": "夜になると広場から歌声が聞こえる。", "reward": 50, "suspects": [{"id": "a", "name": "ユニコーン", "line": "夜はひとりだと寂しくて、歌っていたよ。"}, {"id": "b", "name": "地球", "line": "夜は家にいたよ。"}, {"id": "c", "name": "アップル", "line": "窓から広場を見ていたわ。"}], "clues": [{"id": "proof", "name": "録音と日記", "text": "歌声の録音とユニコーンの日記の時刻が一致する。"}, {"id": "report", "name": "現場の記録", "text": "最初の報告：夜になると広場から歌声が聞こえる。"}, {"id": "note", "name": "聞き込みメモ", "text": "証言だけで決めつけず、現場の記録と照らし合わせよう。"}], "culprit": "a", "proof": "proof", "ending": "寂しさと眠りたい住人の気持ち、どちらも大切だ。", "choices": [{"label": "歌える時間を相談する", "text": "歌える時間を相談することにした。みんなで少しずつ話し合うことになった。"}, {"label": "昼に一緒に歌う", "text": "昼に一緒に歌うことにした。すぐに答えが出なくても、次の一歩を考えられた。"}]}, {"id": "pot", "title": "第4話 割れた植木鉢と嫌われ者", "intro": "植木鉢が割れ、いたずら好きの地球が疑われた。", "reward": 50, "suspects": [{"id": "a", "name": "アップル", "line": "掃除中に鉢を落としてしまったの。"}, {"id": "b", "name": "地球", "line": "前にもいたずらしたけど今日は違うよ。"}, {"id": "c", "name": "ユニコーン", "line": "割れる音の時は地球と庭にいたよ。"}], "clues": [{"id": "proof", "name": "掃除の記録", "text": "アップルが鉢を落とす様子が写真に残っている。"}, {"id": "report", "name": "現場の記録", "text": "最初の報告：植木鉢が割れ、いたずら好きの地球が疑われた。"}, {"id": "note", "name": "聞き込みメモ", "text": "証言だけで決めつけず、現場の記録と照らし合わせよう。"}], "culprit": "a", "proof": "proof", "ending": "過去の行動だけで今回の犯人は決められない。", "choices": [{"label": "地球に謝る機会を作る", "text": "地球に謝る機会を作ることにした。みんなで少しずつ話し合うことになった。"}, {"label": "事実をみんなに伝える", "text": "事実をみんなに伝えることにした。すぐに答えが出なくても、次の一歩を考えられた。"}]}, {"id": "gift", "title": "第5話 渡されなかったプレゼント", "intro": "誕生日の贈り物がなくなったらしい。", "reward": 50, "suspects": [{"id": "a", "name": "ユニコーン", "line": "嫌われていると思って渡せなかった。"}, {"id": "b", "name": "地球", "line": "プレゼントがあるとは知らなかったよ。"}, {"id": "c", "name": "アップル", "line": "包みを見たけど触っていないわ。"}], "clues": [{"id": "proof", "name": "未開封の包み", "text": "ユニコーンの部屋に宛名付きの包みがある。"}, {"id": "report", "name": "現場の記録", "text": "最初の報告：誕生日の贈り物がなくなったらしい。"}, {"id": "note", "name": "聞き込みメモ", "text": "証言だけで決めつけず、現場の記録と照らし合わせよう。"}], "culprit": "a", "proof": "proof", "ending": "盗難ではなく、渡す勇気が出なかったのだ。", "choices": [{"label": "渡すか本人に任せる", "text": "渡すか本人に任せることにした。みんなで少しずつ話し合うことになった。"}, {"label": "気持ちを伝える手紙を提案する", "text": "気持ちを伝える手紙を提案することにした。すぐに答えが出なくても、次の一歩を考えられた。"}]}, {"id": "party", "title": "第6話 パーティーに来なかったポンポン", "intro": "約束の時間に地球が現れなかった。", "reward": 50, "suspects": [{"id": "a", "name": "地球", "line": "行きたかったけど、今日は動けなかった。"}, {"id": "b", "name": "アップル", "line": "来ないから怒ってしまったわ。"}, {"id": "c", "name": "ユニコーン", "line": "連絡がないから心配だったよ。"}], "clues": [{"id": "proof", "name": "送れなかった下書き", "text": "地球が体調不良で欠席したいと書いた未送信の文面。本人の許可を得て確認した。"}, {"id": "report", "name": "現場の記録", "text": "最初の報告：約束の時間に地球が現れなかった。"}, {"id": "note", "name": "聞き込みメモ", "text": "証言だけで決めつけず、現場の記録と照らし合わせよう。"}], "culprit": "a", "proof": "proof", "ending": "約束を守れない日にも事情がある。", "choices": [{"label": "次の連絡方法を相談する", "text": "次の連絡方法を相談することにした。みんなで少しずつ話し合うことになった。"}, {"label": "今日は休めるようにする", "text": "今日は休めるようにすることにした。すぐに答えが出なくても、次の一歩を考えられた。"}]}, {"id": "right", "title": "第7話 正しいのはどっち？", "intro": "広場の使い方を巡って二人が喧嘩した。", "reward": 50, "suspects": [{"id": "a", "name": "双方の認識の違い", "line": "地球は静かに過ごしたい。アップルは演奏会を開きたい。"}, {"id": "b", "name": "地球だけの責任", "line": "静かな場所が必要だったよ。"}, {"id": "c", "name": "アップルだけの責任", "line": "演奏会の予約をしたのよ。"}], "clues": [{"id": "proof", "name": "二枚の案内", "text": "同じ時間に静かな広場と演奏会の案内が出ていた。"}, {"id": "report", "name": "現場の記録", "text": "最初の報告：広場の使い方を巡って二人が喧嘩した。"}, {"id": "note", "name": "聞き込みメモ", "text": "証言だけで決めつけず、現場の記録と照らし合わせよう。"}], "culprit": "a", "proof": "proof", "ending": "どちらも案内を信じていた。", "choices": [{"label": "お互いの気持ちを聞く", "text": "お互いの気持ちを聞くことにした。みんなで少しずつ話し合うことになった。"}, {"label": "少し時間を置く", "text": "少し時間を置くことにした。すぐに答えが出なくても、次の一歩を考えられた。"}]}, {"id": "nobody", "title": "第8話 犯人がいない事件", "intro": "広場の飾りが消え、盗難だと騒ぎになった。", "reward": 50, "suspects": [{"id": "a", "name": "偶然の重なり", "line": "強風で飾りが外れ、清掃係が落とし物として保管した。"}, {"id": "b", "name": "地球", "line": "風が強かったよ。"}, {"id": "c", "name": "アップル", "line": "飾りがなくなって驚いたわ。"}], "clues": [{"id": "proof", "name": "落とし物台帳", "text": "強風の直後に飾りが届けられた記録がある。"}, {"id": "report", "name": "現場の記録", "text": "最初の報告：広場の飾りが消え、盗難だと騒ぎになった。"}, {"id": "note", "name": "聞き込みメモ", "text": "証言だけで決めつけず、現場の記録と照らし合わせよう。"}], "culprit": "a", "proof": "proof", "ending": "誰かを悪者にしなくても事件は解決できる。", "choices": [{"label": "誤解を解く", "text": "誤解を解くことにした。みんなで少しずつ話し合うことになった。"}, {"label": "飾りの固定方法を見直す", "text": "飾りの固定方法を見直すことにした。すぐに答えが出なくても、次の一歩を考えられた。"}]}]);
for (const [i,c] of cases.entries()) { if(i){for(let j=0;j<i%3;j++){c.suspects.push(c.suspects.shift());c.clues.push(c.clues.shift());}} }
// Each case has a specific follow-up, unlocked by its evidence.
const followups = {
 snack:['apple','cup','お菓子には触れていませんの。','紅茶のお供に一枚だけのつもりでしたの。止まらなくなって……。'],
 pudding:['a','proof','冷蔵庫の前で新しいレシピを考えていたの。','みんなにも喜んでほしくて、先に醤油をかけてしまったの。'],
 song:['a','proof','夜の広場には、ときどき行くよ。','ひとりの夜が長く感じて、歌っていたんだ。眠れない人がいるとは知らなかった。'],
 pot:['a','proof','掃除をしていたわ。鉢のことは……。','私が落としたの。地球が疑われていると知って、余計に言い出せなくなったわ。'],
 gift:['a','proof','プレゼントの話は、ちょっと苦手だな。','渡そうとしたけど、迷惑かもしれないと思って持ち帰ったんだ。'],
 party:['a','proof','約束のことは覚えていたよ。','行きたかった。でも体が動かなくて、連絡の文章も送れなかったんだ。'],
 right:['c','proof','予約したんだから、私が使っていいはずよ。','静かな広場という案内もあったのね。地球も約束を信じていたのか。'],
 nobody:['b','proof','飾りがなくなる前、風が強かったよ。','そうか、落とし物として届いたんだ。盗まれたと思い込んでいたよ。']
};
const endings={
 pudding:['次の日、アップルは醤油を小皿に入れて持ってきた。地球は一滴だけ試して、残りはそのまま食べた。','冷蔵庫に二種類のプリンが並んだ。ユニコーンは両方食べて、結局どちらも好きだと言った。'],
 song:['夜の広場に歌える時間の札が立った。ユニコーンはまだ寂しい夜もあるけれど、住人と挨拶を交わすようになった。','昼の広場で小さな合唱が始まった。夜は静かになったが、寂しさについてはまた話すことにした。'],
 pot:['アップルは地球に謝った。地球はすぐには笑わなかった。翌日、二人は別々に新しい鉢を選んだ。','掲示板に事実が書かれた。地球はそれを読んで、今日は何も言わず帰った。'],
 gift:['包みはまだ机の上にある。探偵は急かさず、ユニコーンが決める日を待った。','ユニコーンは短い手紙を書いた。渡すかどうかは、明日考えることにした。'],
 party:['次はスタンプ一つでも欠席を知らせられることにした。地球は少し安心した。','アップルはケーキを一切れ残した。地球が食べたい日に食べられるように。'],
 right:['二人は案内を並べて見た。すぐには仲直りできなかったが、次の予約を一緒に確認した。','広場はその日、静かなままだった。翌朝、二人は別々に新しい案内を読みに来た。'],
 nobody:['掲示板に飾りが見つかったと書いた。誰かを疑ったことについて、住人たちは少し気まずそうだった。','飾りを結び直した。次の強風の日には、みんなで落とし物箱も確認した。']
};
for(const c of cases){const [person,proof,first,reply]=followups[c.id];c.followup={person,proof,reply};c.suspects.find(x=>x.id===person).line=first;for(const x of c.suspects){if(x.image===undefined)x.image=({アップル:0,地球:3,ユニコーン:2})[x.name];}if(endings[c.id])c.choices.forEach((x,i)=>x.text=endings[c.id][i]);}

const newCases = [
  {
    "id": "okay",
    "title": "第9話 大丈夫と答えたポンポン",
    "intro": "地球が店の当番に来なくなった。",
    "reward": 50,
    "suspects": [
      {
        "id": "a",
        "name": "地球",
        "line": "いつも通りのつもりだったよ。"
      },
      {
        "id": "b",
        "name": "アップル",
        "line": "当番は本人が引き受けたのよ。"
      },
      {
        "id": "c",
        "name": "ユニコーン",
        "line": "最近、休憩のベルが鳴っても働いていたよ。"
      }
    ],
    "clues": [
      {
        "id": "proof",
        "name": "当番表",
        "text": "地球の当番が六日連続。交代欄は空白。"
      },
      {
        "id": "report",
        "name": "休憩記録",
        "text": "地球の休憩欄だけ三日連続で空白。"
      },
      {
        "id": "note",
        "name": "本人が見せたメモ",
        "text": "交代を頼みたいが、迷惑をかけそうで言えない、とある。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "地球は交代を頼めず疲れていた。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "断ったらがっかりされると思って、大丈夫って言っていたんだ。"
    },
    "choices": [
      {
        "label": "交代できる仕組みを相談する",
        "text": "当番表に交代希望欄ができた。地球は翌週、一日だけ店に戻った。"
      },
      {
        "label": "返事を急がず休めるようにする",
        "text": "店から短い手紙が届いた。返事はいらないよ、と書いてあった。"
      }
    ]
  },
  {
    "id": "help",
    "title": "第10話 頼んでいない親切",
    "intro": "工作大会の作品が本人の知らないうちに完成した。",
    "reward": 50,
    "suspects": [
      {
        "id": "b",
        "name": "地球",
        "line": "自分で車輪をつける予定だったよ。"
      },
      {
        "id": "c",
        "name": "ユニコーン",
        "line": "地球が席を外した間に完成していたよ。"
      },
      {
        "id": "a",
        "name": "アップル",
        "line": "間に合うか心配だったの。"
      }
    ],
    "clues": [
      {
        "id": "report",
        "name": "設計図",
        "text": "地球の設計には自分で試したい車輪の案が三つある。"
      },
      {
        "id": "note",
        "name": "大会案内",
        "text": "完成度だけでなく試行錯誤も展示できる。"
      },
      {
        "id": "proof",
        "name": "作業写真",
        "text": "地球が席を外した間にアップルが車輪を取り付けている。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "アップルが心配から工作を完成させたが、地球は自分で試したかった。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "失敗させたくなくて、つい全部やってしまったの。"
    },
    "choices": [
      {
        "label": "本人に次の作業を選んでもらう",
        "text": "地球は車輪を一つ外して、自分で付け直した。少し曲がった。"
      },
      {
        "label": "手伝ってほしい範囲を聞く",
        "text": "アップルは工具を渡す係になった。出番がなくても隣で待った。"
      }
    ]
  },
  {
    "id": "sorry",
    "title": "第11話 謝ったのに許してくれない",
    "intro": "謝罪の手紙が差出人に戻ってきた。",
    "reward": 50,
    "suspects": [
      {
        "id": "c",
        "name": "地球",
        "line": "二人の手紙を預かったよ。"
      },
      {
        "id": "a",
        "name": "ユニコーン",
        "line": "手紙を返した理由はまだ話しにくいな。"
      },
      {
        "id": "b",
        "name": "アップル",
        "line": "謝ったから仲直りできると思ったの。"
      }
    ],
    "clues": [
      {
        "id": "note",
        "name": "公開された約束メモ",
        "text": "二人は以前、返事を急かさないと約束していた。"
      },
      {
        "id": "proof",
        "name": "返却された封筒",
        "text": "受取人ユニコーンの字で「今は返事ができない」とある。"
      },
      {
        "id": "report",
        "name": "配達記録",
        "text": "手紙は本人に届いてから返却された。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "手紙は届いたが、ユニコーンにはまだ返事をする準備ができていなかった。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "謝ってくれたのは分かる。でもまだ前と同じようには話せないんだ。"
    },
    "choices": [
      {
        "label": "返事を待つことを提案する",
        "text": "アップルは二通目を書かなかった。広場では静かに挨拶だけした。"
      },
      {
        "label": "謝罪と返事を別々に考える",
        "text": "アップルは自分の行動を振り返った。ユニコーンは自分の時間を過ごした。"
      }
    ]
  },
  {
    "id": "joke",
    "title": "第12話 みんなが笑った冗談",
    "intro": "集まりの翌日から地球が来なくなった。",
    "reward": 50,
    "suspects": [
      {
        "id": "a",
        "name": "地球",
        "line": "あの日は僕も笑ったよ。"
      },
      {
        "id": "b",
        "name": "アップル",
        "line": "みんな笑っていたから楽しかったと思ったわ。"
      },
      {
        "id": "c",
        "name": "ユニコーン",
        "line": "地球の名前を使った冗談だったよ。"
      }
    ],
    "clues": [
      {
        "id": "proof",
        "name": "本人が共有したメモ",
        "text": "笑わないと場の空気を壊しそうだった、と地球が書いている。"
      },
      {
        "id": "report",
        "name": "会の記録",
        "text": "冗談の後、地球は早めに帰った。"
      },
      {
        "id": "note",
        "name": "次回の案内",
        "text": "地球は参加欄を空白にしている。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "地球は冗談に傷ついたが、その場では笑って合わせていた。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "笑ったけど、楽しかったわけじゃないんだ。"
    },
    "choices": [
      {
        "label": "本人が望む伝え方を聞く",
        "text": "地球は名前を出さずに伝えてほしいと頼んだ。次の会では冗談の内容が変わった。"
      },
      {
        "label": "まず二人で話せる機会を提案する",
        "text": "アップルは言い訳をせず話を聞いた。地球は次の会に行くかまだ決めていない。"
      }
    ]
  },
  {
    "id": "effort",
    "title": "第13話 頑張っていないポンポン",
    "intro": "ユニコーンが朝の集合に何度も遅れている。",
    "reward": 50,
    "suspects": [
      {
        "id": "b",
        "name": "地球",
        "line": "集合時間にはいつも来ていないよ。"
      },
      {
        "id": "c",
        "name": "アップル",
        "line": "来た後は片付けまでしているわ。"
      },
      {
        "id": "a",
        "name": "ユニコーン",
        "line": "朝は予定通りにいかないんだ。"
      }
    ],
    "clues": [
      {
        "id": "report",
        "name": "作業記録",
        "text": "到着後は担当の仕事を終えている。"
      },
      {
        "id": "note",
        "name": "集合表",
        "text": "朝の集合時刻だけが全員一律になっている。"
      },
      {
        "id": "proof",
        "name": "本人の朝の記録",
        "text": "起床から支度まで何度も休憩を挟み、早く起きても時間がかかっている。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "遅刻だけでは努力の有無は分からない。朝の支度に時間が必要だった。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "早く起きても途中で休まないと支度が続かない日があるんだ。"
    },
    "choices": [
      {
        "label": "集合時間を相談する",
        "text": "午後から参加できる日ができた。ユニコーンは片付け係を続けた。"
      },
      {
        "label": "困っていることを本人に聞く",
        "text": "ユニコーンは朝の話を少しだけした。次の工夫は一緒に考えることになった。"
      }
    ]
  },
  {
    "id": "alone",
    "title": "第14話 ひとりになりたいポンポン",
    "intro": "地球が昼休みに一人で庭へ行くようになった。",
    "reward": 50,
    "suspects": [
      {
        "id": "c",
        "name": "ユニコーン",
        "line": "午後はいつも地球と話しているよ。"
      },
      {
        "id": "a",
        "name": "地球",
        "line": "庭のベンチが気に入っているよ。"
      },
      {
        "id": "b",
        "name": "アップル",
        "line": "仲間外れになっていないか心配なの。"
      }
    ],
    "clues": [
      {
        "id": "note",
        "name": "工作の記録",
        "text": "午後の共同作業には参加している。"
      },
      {
        "id": "proof",
        "name": "本人が見せた予定表",
        "text": "昼休みには「一人で読書」、午後には「みんなと工作」と自分で書いている。"
      },
      {
        "id": "report",
        "name": "庭の利用記録",
        "text": "地球は自分で本を持って庭へ行っている。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "地球は仲間外れではなく、自分で一人の時間を選んでいた。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "みんなも好きだけど、一人で本を読む時間も好きなんだ。"
    },
    "choices": [
      {
        "label": "本人の過ごし方を尊重する",
        "text": "昼のベンチは今日も静かだった。午後、地球は工作室で笑った。"
      },
      {
        "label": "誘い方を相談する",
        "text": "地球は誘ってくれるのは嬉しいけど、断れるともっと嬉しいと言った。"
      }
    ]
  }
];
for(const c of newCases){for(const x of c.suspects)x.image=({アップル:0,地球:3,ユニコーン:2})[x.name];cases.push(c);}
cases.push(...[
  {
    "id": "sock",
    "title": "第15話 冷蔵庫に入っていた靴下",
    "intro": "冷蔵庫の野菜室に片方の靴下が！",
    "reward": 50,
    "suspects": [
      {
        "id": "a",
        "name": "地球",
        "line": "買い物袋を片付けたよ。",
        "image": 3
      },
      {
        "id": "b",
        "name": "アップル",
        "line": "プリンを取り出しただけよ。",
        "image": 0
      },
      {
        "id": "c",
        "name": "ユニコーン",
        "line": "洗濯物を畳んでいたよ。",
        "image": 2
      }
    ],
    "clues": [
      {
        "id": "note",
        "name": "買い物袋",
        "text": "袋の底にもう片方の靴下が残っている。"
      },
      {
        "id": "report",
        "name": "洗濯かご",
        "text": "買い物袋と同じ柄の袋が隣に置かれていた。"
      },
      {
        "id": "proof",
        "name": "片付け写真",
        "text": "地球が洗濯物入りの袋を野菜室へ運ぶ姿が写っている。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "地球が洗濯物を野菜と間違えて冷蔵庫に入れた。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "袋を間違えた！ 野菜だと思って冷やしていたよ。"
    },
    "choices": [
      {
        "label": "袋に名前を書く",
        "text": "翌日、袋には「食べ物」「食べられない物」と書かれた。"
      },
      {
        "label": "靴下を洗い直す",
        "text": "地球は冷たい靴下を履いて、夏なら便利かもと言った。"
      }
    ],
    "difficulty": 1
  },
  {
    "id": "wig",
    "title": "第16話 消えたかずじぃのカツラ",
    "intro": "かずじぃのカツラが消えた。窓は開いていた。",
    "reward": 50,
    "suspects": [
      {
        "id": "b",
        "name": "地球",
        "line": "窓の外で強い風が吹いたよ。",
        "image": 3
      },
      {
        "id": "c",
        "name": "アップル",
        "line": "帽子掛けは空だったわ。",
        "image": 0
      },
      {
        "id": "a",
        "name": "ユニコーン",
        "line": "広場で鳥の巣を観察していたよ。",
        "image": 2
      }
    ],
    "clues": [
      {
        "id": "report",
        "name": "風向きの旗",
        "text": "風は窓から広場の木へ吹いていた。"
      },
      {
        "id": "proof",
        "name": "観察写真",
        "text": "ユニコーンの写真に、枝に引っかかったカツラが写っている。"
      },
      {
        "id": "note",
        "name": "窓辺の毛糸",
        "text": "窓枠にカツラと同じ色の毛糸が引っかかっている。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "風で飛んだカツラをユニコーンが鳥の巣と見間違えていた。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "鳥の巣だと思って撮影したけど、よく見るとカツラだ！"
    },
    "choices": [
      {
        "label": "枝から回収する",
        "text": "かずじぃはカツラにあごひもを付けた。"
      },
      {
        "label": "写真を本人に見せる",
        "text": "かずじぃは「なかなか立派な巣じゃ」と笑った。"
      }
    ],
    "difficulty": 2
  },
  {
    "id": "ramen",
    "title": "第17話 ダイエット中のポンポンと深夜のラーメン",
    "intro": "深夜の台所にラーメンの香り。誰が作った？",
    "reward": 50,
    "suspects": [
      {
        "id": "c",
        "name": "ユニコーン",
        "line": "台所から湯気が見えたよ。",
        "image": 2
      },
      {
        "id": "a",
        "name": "アップル",
        "line": "夜は新商品の研究をしていたわ。",
        "image": 0
      },
      {
        "id": "b",
        "name": "地球",
        "line": "お腹は空いたけど寝ていたよ。",
        "image": 3
      }
    ],
    "clues": [
      {
        "id": "proof",
        "name": "試作ノート",
        "text": "アップルが午前0時に新作ラーメンを試食した記録。"
      },
      {
        "id": "note",
        "name": "空の器",
        "text": "器には試作品と書いた札がある。"
      },
      {
        "id": "report",
        "name": "調理時計",
        "text": "午前0時にタイマーが鳴った記録。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "香りの正体はアップルの試作品。地球が食べたという噂は誤りだった。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "夜食用の新商品を試していたの。地球の分ではないわ。"
    },
    "choices": [
      {
        "label": "噂を訂正する",
        "text": "地球は安心して朝ごはんを食べた。"
      },
      {
        "label": "新作を昼に試食する",
        "text": "翌日の試食会では全員が好きな量を選んだ。"
      }
    ],
    "difficulty": 2
  },
  {
    "id": "resume",
    "title": "第18話 宇宙人が落とした履歴書",
    "intro": "広場に「出身：銀河の右側」と書かれた履歴書が落ちていた。",
    "reward": 50,
    "suspects": [
      {
        "id": "a",
        "name": "地球",
        "line": "宇宙向けの求人を見たよ。",
        "image": 3
      },
      {
        "id": "b",
        "name": "ユニコーン",
        "line": "紙が風に飛ばされていたよ。",
        "image": 2
      },
      {
        "id": "c",
        "name": "アップル",
        "line": "求人の掲示板を作ったわ。",
        "image": 0
      }
    ],
    "clues": [
      {
        "id": "note",
        "name": "求人票",
        "text": "募集職種は惑星案内係。"
      },
      {
        "id": "report",
        "name": "落とし物メモ",
        "text": "履歴書の端に青いインクが付いている。"
      },
      {
        "id": "proof",
        "name": "応募控え",
        "text": "地球の応募控えと履歴書の受付番号が一致する。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "履歴書は地球のものだった。宇宙人の来訪ではなかった。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "宇宙人じゃなくて僕の履歴書だよ。住所の書き方が分からなかったんだ。"
    },
    "choices": [
      {
        "label": "本人に返す",
        "text": "地球は住所欄に「地球」と書き直した。"
      },
      {
        "label": "求人の内容を確認する",
        "text": "案内係の面接はオンラインだった。銀河の右側からも参加できるらしい。"
      }
    ],
    "difficulty": 2
  },
  {
    "id": "birthday",
    "title": "第19話 自分の誕生日を忘れたポンポン",
    "intro": "誕生日会の主役が自分ではないと言い張っている。",
    "reward": 50,
    "suspects": [
      {
        "id": "b",
        "name": "アップル",
        "line": "ケーキは注文したわ。",
        "image": 0
      },
      {
        "id": "c",
        "name": "地球",
        "line": "招待状を配ったよ。",
        "image": 3
      },
      {
        "id": "a",
        "name": "ユニコーン",
        "line": "今日は何の日だったかな？",
        "image": 2
      }
    ],
    "clues": [
      {
        "id": "report",
        "name": "招待状",
        "text": "開催日は今日。主役の名前はユニコーン。"
      },
      {
        "id": "proof",
        "name": "本人の手帳",
        "text": "誕生日の日付に「忘れない」と三回書いてある。"
      },
      {
        "id": "note",
        "name": "ケーキの札",
        "text": "ユニコーンおめでとう、と書かれている。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "ユニコーンは自分の誕生日を忘れていた。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "忘れないって書いたことを忘れていたよ！"
    },
    "choices": [
      {
        "label": "一緒にお祝いする",
        "text": "ろうそくを吹き消したあと、来年の予定を入れた。"
      },
      {
        "label": "手帳に印を付ける",
        "text": "手帳にケーキの絵を描いた。翌朝、何の絵か忘れていた。"
      }
    ],
    "difficulty": 1
  },
  {
    "id": "detective-accused",
    "title": "第20話 ポンポン探偵が容疑者になった日",
    "intro": "探偵の机から消えたメダルが見つかった。探偵が盗んだのか？",
    "reward": 50,
    "suspects": [
      {
        "id": "c",
        "name": "ユニコーン",
        "line": "探偵はその時間、広場で聞き込み中だったよ。",
        "image": 2
      },
      {
        "id": "a",
        "name": "アップル",
        "line": "展示品を片付けたわ。",
        "image": 0
      },
      {
        "id": "b",
        "name": "地球",
        "line": "探偵の机に箱があったよ。",
        "image": 3
      }
    ],
    "clues": [
      {
        "id": "proof",
        "name": "搬送台帳",
        "text": "アップルが展示品を箱に入れ、探偵の机へ届けた記録がある。"
      },
      {
        "id": "note",
        "name": "聞き込み記録",
        "text": "探偵は展示終了時刻に広場にいた。"
      },
      {
        "id": "report",
        "name": "箱の札",
        "text": "箱には「探偵への届け物」と書かれている。"
      }
    ],
    "culprit": "a",
    "proof": "proof",
    "ending": "メダルは片付け中の取り違えで机に届いた。探偵の盗難ではない。",
    "followup": {
      "person": "a",
      "proof": "proof",
      "reply": "展示の片付けで箱を間違えたわ。探偵への届け物だと思ったの。"
    },
    "choices": [
      {
        "label": "記録をみんなに見せる",
        "text": "探偵は無実を証明した。次の事件では自分の机も調べることにした。"
      },
      {
        "label": "箱の管理を見直す",
        "text": "箱に大きな宛名が付いた。探偵には「探偵」と書いた空箱が届いた。"
      }
    ],
    "difficulty": 3
  }
]);
cases.push(...[
  {
    "id": "locked-cake",
    "title": "第21話 密室から消えたケーキ",
    "intro": "鍵のかかった厨房からケーキが消えた。窓も閉まっていた。",
    "reward": 50,
    "difficulty": 3,
    "suspects": [
      {
        "id": "s0",
        "name": "アップル",
        "line": "鍵を閉めたのは15時。",
        "image": 0
      },
      {
        "id": "s1",
        "name": "地球",
        "line": "廊下で台車を押したよ。",
        "image": 3
      },
      {
        "id": "s2",
        "name": "ユニコーン",
        "line": "ケーキは白い箱に入っていたよ。",
        "image": 2
      },
      {
        "id": "s3",
        "name": "配達係",
        "line": "15時前に空箱を回収したよ。"
      }
    ],
    "clues": [
      {
        "id": "e0",
        "name": "施錠記録",
        "text": "15時に施錠。以降の開錠はない。"
      },
      {
        "id": "e1",
        "name": "台車の伝票",
        "text": "14時55分、白い箱を冷蔵室へ運んだ記録。"
      },
      {
        "id": "e2",
        "name": "箱の札",
        "text": "白い箱には「冷蔵保存」と書かれている。"
      },
      {
        "id": "e3",
        "name": "窓の写真",
        "text": "窓の封印は無傷。"
      }
    ],
    "culprit": "s1",
    "proof": "e1",
    "secondProof": "e2",
    "followups": [
      {
        "person": "s3",
        "proof": "e0",
        "reply": "回収した空箱は青色だったよ。"
      },
      {
        "person": "s1",
        "proof": "e1",
        "reply": "白い箱を冷蔵室に運んだ。中身は知らなかったよ。"
      }
    ],
    "ending": "地球が施錠前に保存用の箱を運んだ。盗難ではなく冷蔵室への移動だった。",
    "choices": [
      {
        "label": "冷蔵室を一緒に確認する",
        "text": "ケーキは無事だった。地球には一番大きなイチゴが渡された。"
      },
      {
        "label": "箱に中身も書く",
        "text": "翌日から箱に名前が付いた。「空箱」にも名前が付いた。"
      }
    ],
    "followup": {
      "person": "s3",
      "proof": "e0",
      "reply": "回収した空箱は青色だったよ。"
    }
  },
  {
    "id": "false-clock",
    "title": "第22話 嘘をついているのは誰だ？",
    "intro": "広場の鐘が鳴らなかった。四人の証言は食い違っている。",
    "reward": 50,
    "difficulty": 3,
    "suspects": [
      {
        "id": "s0",
        "name": "アップル",
        "line": "正午に鐘を聞いたわ。",
        "image": 0
      },
      {
        "id": "s1",
        "name": "地球",
        "line": "正午に広場にいたけど静かだった。",
        "image": 3
      },
      {
        "id": "s2",
        "name": "ユニコーン",
        "line": "録音機を試していたよ。",
        "image": 2
      },
      {
        "id": "s3",
        "name": "時計係",
        "line": "鐘の修理は午後からだよ。"
      }
    ],
    "clues": [
      {
        "id": "e0",
        "name": "修理票",
        "text": "鐘の舌は11時から取り外されていた。"
      },
      {
        "id": "e1",
        "name": "録音機の履歴",
        "text": "12時に鐘の音を再生した記録。"
      },
      {
        "id": "e2",
        "name": "広場の地図",
        "text": "録音機はアップルの窓の下にある。"
      },
      {
        "id": "e3",
        "name": "天気メモ",
        "text": "正午は晴れ。"
      }
    ],
    "culprit": "s2",
    "proof": "e0",
    "secondProof": "e1",
    "followups": [
      {
        "person": "s0",
        "proof": "e0",
        "reply": "窓の下から聞こえたから本物だと思ったわ。"
      },
      {
        "person": "s2",
        "proof": "e1",
        "reply": "音量を試しただけだよ。鐘だと思われるとは！"
      }
    ],
    "ending": "鐘は鳴っていない。ユニコーンの録音が本物の鐘と誤解された。誰も意図的に嘘をついていなかった。",
    "choices": [
      {
        "label": "誤解を説明する",
        "text": "アップルは耳を疑った。翌日、本物の鐘を聞きに行った。"
      },
      {
        "label": "録音の場所を相談する",
        "text": "録音機に「練習中」の札が付いた。"
      }
    ],
    "followup": {
      "person": "s0",
      "proof": "e0",
      "reply": "窓の下から聞こえたから本物だと思ったわ。"
    }
  },
  {
    "id": "three-photos",
    "title": "第23話 3枚の写真と消えた時計",
    "intro": "展示時計が消えた。写真の表示時刻はどれも違う。",
    "reward": 50,
    "difficulty": 3,
    "suspects": [
      {
        "id": "s0",
        "name": "アップル",
        "line": "写真は撮った順に並べたわ。",
        "image": 0
      },
      {
        "id": "s1",
        "name": "地球",
        "line": "時計を修理台へ運んだよ。",
        "image": 3
      },
      {
        "id": "s2",
        "name": "ユニコーン",
        "line": "写真機の時刻を昨日変えたよ。",
        "image": 2
      },
      {
        "id": "s3",
        "name": "受付係",
        "line": "修理の受付は14時まで。"
      }
    ],
    "clues": [
      {
        "id": "e0",
        "name": "写真A",
        "text": "時計が展示台にある。壁の時計は13時。"
      },
      {
        "id": "e1",
        "name": "写真B",
        "text": "展示台は空。壁の時計は13時20分。"
      },
      {
        "id": "e2",
        "name": "写真C",
        "text": "修理台に同じ傷の時計。壁の時計は13時30分。"
      },
      {
        "id": "e3",
        "name": "受付票",
        "text": "13時25分、地球が傷のある時計を届けた。"
      },
      {
        "id": "e4",
        "name": "写真機設定",
        "text": "表示時刻は一時間進んでいる。"
      }
    ],
    "culprit": "s1",
    "proof": "e2",
    "secondProof": "e3",
    "followups": [
      {
        "person": "s2",
        "proof": "e4",
        "reply": "表示時刻だけ変えたんだ。壁の時計は正しいよ。"
      },
      {
        "person": "s1",
        "proof": "e3",
        "reply": "受付票をもらったよ。展示係に伝え忘れた。"
      }
    ],
    "ending": "壁時計の順序はA、B、C。地球が修理のために運び、受付票と写真Cが同じ時計だと示す。",
    "choices": [
      {
        "label": "展示係に伝える",
        "text": "時計は翌日戻った。展示台には修理中の札が置かれた。"
      },
      {
        "label": "写真を整理する",
        "text": "写真の裏に本当の時刻を書いた。"
      }
    ],
    "followup": {
      "person": "s2",
      "proof": "e4",
      "reply": "表示時刻だけ変えたんだ。壁の時計は正しいよ。"
    }
  },
  {
    "id": "future-letter",
    "title": "第24話 未来から届いた手紙",
    "intro": "明日の日付の手紙が今日届いた。未来から来たのか？",
    "reward": 50,
    "difficulty": 3,
    "suspects": [
      {
        "id": "s0",
        "name": "アップル",
        "line": "明日の催しの案内を書いたわ。",
        "image": 0
      },
      {
        "id": "s1",
        "name": "地球",
        "line": "郵便受けを朝に空にしたよ。",
        "image": 3
      },
      {
        "id": "s2",
        "name": "ユニコーン",
        "line": "日付印を借りたよ。",
        "image": 2
      },
      {
        "id": "s3",
        "name": "郵便係",
        "line": "今日の便で届けたよ。"
      }
    ],
    "clues": [
      {
        "id": "e0",
        "name": "封筒の消印",
        "text": "今日の午前の消印。"
      },
      {
        "id": "e1",
        "name": "日付印",
        "text": "印面が明日の日付に設定されている。"
      },
      {
        "id": "e2",
        "name": "案内の控え",
        "text": "本文と同じ文章。開催日は明日。"
      },
      {
        "id": "e3",
        "name": "配達表",
        "text": "今日の便に封筒が登録されている。"
      }
    ],
    "culprit": "s2",
    "proof": "e0",
    "secondProof": "e1",
    "followups": [
      {
        "person": "s3",
        "proof": "e0",
        "reply": "今日受け取った封筒だよ。"
      },
      {
        "person": "s2",
        "proof": "e1",
        "reply": "明日の案内用に印を合わせたままだった！"
      }
    ],
    "ending": "今日投函された案内に、明日の日付の印が押された。未来からの手紙ではない。",
    "choices": [
      {
        "label": "印を戻す",
        "text": "日付印の横に確認表を置いた。"
      },
      {
        "label": "明日の催しを楽しみにする",
        "text": "地球は未来の自分におやつを残した。"
      }
    ],
    "followup": {
      "person": "s3",
      "proof": "e0",
      "reply": "今日受け取った封筒だよ。"
    }
  },
  {
    "id": "kind-lie",
    "title": "第25話 優しい嘘",
    "intro": "展覧会の作品が取り下げられた。作者には「展示場所が足りない」と伝えられた。",
    "reward": 50,
    "difficulty": 3,
    "suspects": [
      {
        "id": "s0",
        "name": "アップル",
        "line": "場所が足りなかったと伝えたわ。",
        "image": 0
      },
      {
        "id": "s1",
        "name": "地球",
        "line": "作品は展示したかったよ。",
        "image": 3
      },
      {
        "id": "s2",
        "name": "ユニコーン",
        "line": "作品の台がぐらついていたよ。",
        "image": 2
      },
      {
        "id": "s3",
        "name": "展示係",
        "line": "空き台は一つあったよ。"
      },
      {
        "id": "s4",
        "name": "修理係",
        "line": "台の修理を頼まれたよ。"
      }
    ],
    "clues": [
      {
        "id": "e0",
        "name": "会場図",
        "text": "空き台が一つある。"
      },
      {
        "id": "e1",
        "name": "点検票",
        "text": "作品の台に破損。展示には修理が必要。"
      },
      {
        "id": "e2",
        "name": "修理依頼",
        "text": "アップルが修理を依頼した記録。"
      },
      {
        "id": "e3",
        "name": "作者の希望メモ",
        "text": "修理が必要なら自分にも相談してほしい。"
      }
    ],
    "culprit": "s0",
    "proof": "e0",
    "secondProof": "e1",
    "followups": [
      {
        "person": "s4",
        "proof": "e2",
        "reply": "アップルは作者が落ち込むのを心配していたよ。"
      },
      {
        "person": "s0",
        "proof": "e0",
        "reply": "本当は台が壊れていたの。傷つけたくなくて場所のせいにしたわ。"
      }
    ],
    "ending": "場所不足は事実ではなかった。アップルは作者を傷つけたくなくて、台の破損を隠した。",
    "choices": [
      {
        "label": "本人と話す機会を提案する",
        "text": "地球は修理を一緒にしたいと言った。アップルは少し黙ってから工具を渡した。"
      },
      {
        "label": "まずアップルの気持ちを聞く",
        "text": "アップルは何を伝えるか考えた。探偵は作者の希望も伝え、話す時期を二人に任せた。"
      }
    ],
    "followup": {
      "person": "s4",
      "proof": "e2",
      "reply": "アップルは作者が落ち込むのを心配していたよ。"
    }
  }
]);
export const followupList=c=>c.followups||[c.followup];
export function challengeIndex(c,seen,person,proof){return followupList(c).findIndex(f=>f.person===person&&f.proof===proof&&seen.includes(person)&&seen.includes(proof));}
export function canChallenge(c,seen,person,proof){return challengeIndex(c,seen,person,proof)>=0;}
export function verdict(c,seen,suspect,proof,secondProof){if(![...c.suspects,...c.clues].every(x=>seen.includes(x.id)))return 'incomplete';return suspect===c.culprit&&proof===c.proof&&(!c.secondProof||secondProof===c.secondProof)?'correct':'wrong';}
export function claimReward(data,c){const claims=Array.isArray(data.detectiveClaims)?data.detectiveClaims:[];if(claims.includes(c.id))return 0;data.detectiveClaims=[...claims,c.id];const before=data.coins;data.coins=Math.min(999999,before+c.reward);return data.coins-before;}

export const difficulty = c => c.difficulty ?? (['right','nobody','apology','effort'].includes(c.id)||/第(11|13)話/.test(c.title)?3:['snack','pudding'].includes(c.id)?1:2);
export function detectiveHint(c,seen,challenged){const missing=[...c.suspects,...c.clues].find(x=>!seen.includes(x.id));if(missing)return `まだ「${missing.name}」を調べていないよ。`;if(!challenged)return `「${c.suspects.find(x=>x.id===c.followup.person).name}」の証言と「${c.clues.find(x=>x.id===c.followup.proof).name}」を照らし合わせよう。`;return '追加証言と決め手になる証拠を証拠手帳で確認しよう。';}
export function savedChoice(c,records){const i=records?.[c.id];return Number.isInteger(i)?c.choices?.[i]:undefined;}

cases.push(...[
  {
    "id": "town-shop",
    "title": "第26話 閉まったままのお店",
    "intro": "パン屋が三日間閉まっている。",
    "reward": 50,
    "difficulty": 2,
    "suspects": [
      {
        "id": "s0",
        "name": "アップル",
        "line": "毎朝パンを焼いていたわ。"
      },
      {
        "id": "s1",
        "name": "地球",
        "line": "最近は開店前にも注文が来ていたよ。"
      },
      {
        "id": "s2",
        "name": "ユニコーン",
        "line": "小麦粉は届けたよ。"
      }
    ],
    "clues": [
      {
        "id": "e0",
        "name": "注文表",
        "text": "早朝から深夜まで注文が埋まっている。"
      },
      {
        "id": "e1",
        "name": "休業札",
        "text": "店主本人が休業と記入した。"
      },
      {
        "id": "e2",
        "name": "納品票",
        "text": "小麦粉は十分に届いている。"
      }
    ],
    "culprit": "s0",
    "proof": "e0",
    "followup": {
      "person": "s0",
      "proof": "e1",
      "reply": "休業札を見せると、アップルは休む時間がなかったと話した。"
    },
    "ending": "材料不足ではなく、店主が休むために閉店していた。",
    "choices": [
      {
        "label": "注文を減らす相談をする",
        "text": "翌週、パン屋は週三日だけ開いた。"
      },
      {
        "label": "再開を本人に任せる",
        "text": "地球は休業札の隣に「またね」と書いた。"
      }
    ]
  },
  {
    "id": "town-square",
    "title": "第27話 誰も来なくなった広場",
    "intro": "パン屋の休業後、広場も静かになった。",
    "reward": 50,
    "difficulty": 2,
    "suspects": [
      {
        "id": "s0",
        "name": "地球",
        "line": "広場には毎日行っていたよ。"
      },
      {
        "id": "s1",
        "name": "アップル",
        "line": "休業中は家にいるわ。"
      },
      {
        "id": "s2",
        "name": "ユニコーン",
        "line": "最近は参加表が気になっていたよ。"
      }
    ],
    "clues": [
      {
        "id": "e0",
        "name": "参加表",
        "text": "欠席者の名前に赤丸が付いている。"
      },
      {
        "id": "e1",
        "name": "旧案内",
        "text": "参加は自由と書いてある。"
      },
      {
        "id": "e2",
        "name": "天気表",
        "text": "晴天が続いている。"
      }
    ],
    "culprit": "s2",
    "proof": "e0",
    "followup": {
      "person": "s2",
      "proof": "e0",
      "reply": "ユニコーンは欠席すると責められそうで、広場を避けていたと話した。"
    },
    "ending": "自由だった集まりが、いつの間にか義務のようになっていた。",
    "choices": [
      {
        "label": "参加表を見直す",
        "text": "参加表は希望者だけの予定表になった。"
      },
      {
        "label": "別の居場所も考える",
        "text": "川辺に小さなベンチが置かれた。"
      }
    ]
  },
  {
    "id": "town-rumor",
    "title": "第28話 噂を広めたのは誰だ？",
    "intro": "広場に来ない仲間が町を嫌っているという噂が流れた。",
    "reward": 50,
    "difficulty": 2,
    "suspects": [
      {
        "id": "s0",
        "name": "地球",
        "line": "聞いた話を伝えただけだよ。"
      },
      {
        "id": "s1",
        "name": "アップル",
        "line": "そんなことは言っていないわ。"
      },
      {
        "id": "s2",
        "name": "ユニコーン",
        "line": "少し休みたいと言ったよ。"
      }
    ],
    "clues": [
      {
        "id": "e0",
        "name": "最初の伝言",
        "text": "ユニコーンは少し休みたいと書いている。"
      },
      {
        "id": "e1",
        "name": "回覧メモ",
        "text": "地球の転記で「町が嫌い」に変わっている。"
      },
      {
        "id": "e2",
        "name": "掲示板",
        "text": "回覧後に同じ噂が増えた。"
      }
    ],
    "culprit": "s0",
    "proof": "e1",
    "followup": {
      "person": "s0",
      "proof": "e1",
      "reply": "地球は休みたいという言葉を、自分の解釈で書き換えたと認めた。"
    },
    "ending": "地球の解釈が事実として広がった。",
    "choices": [
      {
        "label": "訂正を提案する",
        "text": "地球は回覧板に訂正文を載せた。"
      },
      {
        "label": "本人の希望を聞く",
        "text": "ユニコーンは詳しい事情を公開しないでほしいと頼んだ。"
      }
    ]
  },
  {
    "id": "town-feelings",
    "title": "第29話 言えなかった本当の気持ち",
    "intro": "町の会議では全員が賛成したはずなのに、活動が続かない。",
    "reward": 50,
    "difficulty": 2,
    "suspects": [
      {
        "id": "s0",
        "name": "アップル",
        "line": "会議では賛成したわ。"
      },
      {
        "id": "s1",
        "name": "地球",
        "line": "反対意見はなかったよ。"
      },
      {
        "id": "s2",
        "name": "ユニコーン",
        "line": "みんなの前では話しにくかった。"
      }
    ],
    "clues": [
      {
        "id": "e0",
        "name": "議事録",
        "text": "全員賛成と記録されている。"
      },
      {
        "id": "e1",
        "name": "匿名アンケート",
        "text": "開催頻度を減らしたいという回答が複数ある。"
      },
      {
        "id": "e2",
        "name": "会議案内",
        "text": "反対意見を匿名で出す方法はなかった。"
      }
    ],
    "culprit": "s2",
    "proof": "e1",
    "followup": {
      "person": "s2",
      "proof": "e1",
      "reply": "ユニコーンは反対すると仲間をがっかりさせると思っていたと話した。"
    },
    "ending": "表向きの賛成と実際の希望には違いがあった。",
    "choices": [
      {
        "label": "匿名の意見箱を提案する",
        "text": "意見箱には「月一回なら行きたい」と書かれた。"
      },
      {
        "label": "少人数で話す機会を提案する",
        "text": "三人はお茶を飲みながら、別々の希望を話した。"
      }
    ]
  },
  {
    "id": "town-smiles",
    "title": "第30話 笑顔が戻る日",
    "intro": "町を元に戻そうという計画が出た。これまでの事件を振り返ろう。",
    "reward": 50,
    "difficulty": 3,
    "suspects": [
      {
        "id": "s0",
        "name": "以前と同じ生活に戻す案",
        "line": "毎日全員で集まる計画だ。"
      },
      {
        "id": "s1",
        "name": "それぞれの希望を尊重する案",
        "line": "参加も休息も選べる計画だ。"
      },
      {
        "id": "s2",
        "name": "広場を閉鎖する案",
        "line": "集まりをすべて中止する計画だ。"
      }
    ],
    "clues": [
      {
        "id": "e0",
        "name": "パン屋の記録",
        "text": "休息を確保すると営業を再開できた。"
      },
      {
        "id": "e1",
        "name": "広場と噂の記録",
        "text": "欠席への非難と誤解が参加を難しくした。"
      },
      {
        "id": "e2",
        "name": "会議の記録",
        "text": "住人の希望は一つではなかった。"
      }
    ],
    "culprit": "s1",
    "proof": "e1",
    "followup": {
      "person": "s1",
      "proof": "e2",
      "reply": "希望を聞くと、毎日集まりたい住人も、時々だけ参加したい住人もいた。"
    },
    "ending": "町の問題は一人の責任ではなかった。違う希望を持つ住人が共に暮らせる方法を考えた。",
    "choices": [
      {
        "label": "自由参加の広場を開く",
        "text": "広場に笑い声が戻った。来なかったポンポンも、家で好きな本を読んでいた。"
      },
      {
        "label": "小さな集まりから始める",
        "text": "町にはいくつもの小さな居場所ができた。パン屋の休業札もそのままだった。"
      }
    ]
  }
]);

export function caseGenre(i){return i<8?'basic':i<14?'heart':i<20?'comedy':i<25?'mystery':'long';}
export function restoreInvestigation(c,raw){const ids=new Set([...c.suspects,...c.clues].map(x=>x.id));const seen=[...new Set(Array.isArray(raw?.seen)?raw.seen.filter(x=>ids.has(x)):[])];const challenged=[...new Set(Array.isArray(raw?.challenged)?raw.challenged.filter(i=>Number.isInteger(i)&&followupList(c)[i]&&seen.includes(followupList(c)[i].person)&&seen.includes(followupList(c)[i].proof)):[])];return {seen,challenged,mode:['talk','clues','book','challenge','guess','archive','deduce','timeline'].includes(raw?.mode)?raw.mode:'talk'};}
export function detectiveRank(n){return n>=30?'心に寄り添う名探偵':n>=20?'決めつけない探偵':n>=10?'小さな声を聞く探偵':n>=5?'町の探偵':'見習い探偵';}

const links={okay:['proof','report','連続した当番と休憩の空欄から、負担が続いていたことが分かる。'],help:['report','proof','設計図と作業写真から、本人が試す前に車輪が取り付けられたと分かる。'],sorry:['proof','report','手紙は届いていた。返事ができないという意思を尊重する必要がある。'],alone:['proof','note','一人の時間と共同作業の両方を本人が選んでいる。'],sock:['note','report','似た袋が並んでいたことから、取り違えの可能性がある。'],wig:['report','note','風向きと窓の毛糸から、窓の外を探す理由がある。'],snack:['bag','cup','袋の開封記録とトレーの食べかすが台所での出来事を裏付ける。'],'locked-cake':['e1','e2','白い箱は冷蔵保存のために運ばれた可能性がある。'],'false-clock':['e0','e1','本物の鐘は鳴らせず、録音が再生されていた。'],'three-photos':['e2','e3','傷の一致と受付票から修理台の時計を特定できる。'],'future-letter':['e0','e1','今日の消印と明日の日付印は両立する。'],'kind-lie':['e0','e1','空き台があり、別の理由として台の破損が確認できる。']};
export function combineEvidence(c,seen,a,b){const link=links[c.id];if(!link||a===b||!seen.includes(a)||!seen.includes(b))return null;return [a,b].includes(link[0])&&[a,b].includes(link[1])?link[2]:null;}
export function hasCombination(c){return Object.hasOwn(links,c.id);}
export function checkTimeline(c,seen,order){return c.id==='three-photos'&&['e0','e1','e2'].every((id,i)=>seen.includes(id)&&order[i]===id)&&order.length===3;}

// Scene layout is deterministic and does not alter evidence identifiers.
export function sceneSpots(c){return c.clues.map((x,i)=>({id:x.id,name:x.name,x:20+(i%3)*30,y:i<3?30:72}));}
export function revealSteps(c){return [...followupList(c).map(f=>f.reply),c.ending];}

export function sceneSetting(c){if(['snack','pudding','sock','locked-cake'].includes(c.id))return 'kitchen';if(['song','pot','right','nobody','alone','wig'].includes(c.id))return 'garden';if(['help','effort','three-photos','false-clock'].includes(c.id))return 'workshop';return 'office';}

const revisedClues=[["pudding", "地球", "冷蔵庫の扉", "扉の内側に醤油の小さな滴が残っている。", "庭の時計", "おやつ前の写真に地球とユニコーンが写っている。"], ["song", "アップル", "広場のベンチ", "ベンチに歌詞を書いた紙が置かれていた。", "窓辺の記録", "住人が歌を聞いた時刻は毎晩ほぼ同じだった。"], ["pot", "地球", "鉢の破片", "掃除用の台車の横に破片が集まっている。", "庭の写真", "割れた時刻に地球とユニコーンが庭の反対側にいた。"], ["gift", "地球", "誕生日の机", "贈り物を置く場所には宛名の札だけが残っている。", "配達の控え", "包みは会場に届けられていなかった。"], ["party", "ユニコーン", "参加表", "地球の席は予約されたままだった。", "連絡の記録", "開始前に地球からの連絡は届いていない。"], ["right", "ユニコーン", "予約台帳", "演奏会の予約は正式に受理されていた。", "掲示板の写真", "静かに過ごせる時間の案内も取り下げられていなかった。"], ["nobody", "アップル", "飾りのひも", "ひもが切れ、柱に結び目だけが残っている。", "清掃経路", "清掃係は風の強かった朝に広場を巡回した。"]];
for(const [id,requester,rn,rt,nn,nt] of revisedClues){const c=cases.find(x=>x.id===id);Object.assign(c.clues.find(x=>x.id==='report'),{name:rn,text:rt});Object.assign(c.clues.find(x=>x.id==='note'),{name:nn,text:nt});}
const requesters=["ユニコーン", "地球", "アップル", "地球", "地球", "ユニコーン", "ユニコーン", "アップル", "アップル", "ユニコーン", "アップル", "ユニコーン", "アップル", "ユニコーン", "アップル", "地球", "アップル", "ユニコーン", "地球", "アップル", "地球", "ユニコーン", "地球", "アップル", "地球", "ユニコーン", "アップル", "地球", "ユニコーン", "町の住人"];
for(const [i,c] of cases.entries())c.requester=requesters[i];

const openings=["おやつの時間を知らせる鐘が鳴った。机には空のお皿だけ。", "スプーンを持った地球が、ひと口食べて首をかしげた。", "窓を閉めても、遠くから同じ旋律が聞こえてくる。", "庭に集まった住人は、破片よりも地球の顔を見ていた。", "誕生日の机には、名前を書いた札だけが残っていた。", "三つの席のうち、一つだけケーキが手つかずだった。", "広場の入口で、楽器を持つ仲間と本を持つ仲間が立ち止まった。", "朝の広場では、柱の飾りが一つ足りなかった。", "開店のベルが鳴っても、いつもの当番の姿がない。", "工作台の上には、きれいに完成した作品が置かれていた。", "郵便受けに、見覚えのある封筒が戻ってきた。", "昨日の笑い声が残る部屋に、今日は空席があった。", "集合の鐘が鳴り、住人たちは時計を見上げた。", "昼休みの庭には、いつも同じ場所に座る仲間がいた。", "野菜室を開けたアップルは、そっと扉を閉め直した。", "かずじぃは鏡を見て、帽子を深くかぶった。", "夜の台所から、お腹の鳴るような音が聞こえた。", "拾った紙には、見慣れない住所欄があった。", "ケーキの前で、主役だけが不思議そうな顔をしていた。", "探偵事務所に依頼人が来た。今日は探偵自身にも質問があるらしい。", "厨房の前には、鍵を確認する住人たちが集まっていた。", "鐘の話を聞くたびに、少しずつ違う時刻が出てきた。", "展示台には丸い跡が残り、写真が三枚並んでいた。", "郵便受けから取り出した封筒の日付に、みんなが目を丸くした。", "展覧会の準備が進む中、一つの作品だけが見当たらない。", "朝の通りには、焼きたてのパンの香りがなかった。", "広場のベンチには、風だけが通り抜けていた。", "同じ話が、住人から住人へ少しずつ形を変えて伝わった。", "会議の机には、全員の丸印が並んでいた。", "探偵はこれまでの手帳を開いた。町の住人たちも集まってきた。"];
for(const [i,c] of cases.entries())c.opening=openings[i];
export function characterSpeech(x){const prefix={アップル:"ええ、",地球:"うーん、",ユニコーン:"そうだね。"}[x.name];return prefix?prefix+x.line:x.line;}
export function cardCollection(solved){return cases.filter(c=>solved(c.id));}

// Optional epilogues are shown only after a case is solved.
const epilogues=[
'翌日、アップルは小皿を三枚用意した。自分の皿だけ少し大きかった。',
'冷蔵庫に二種類のプリンが並んだ。地球は迷わず普通の方を取った。',
'翌晩、広場は静かだった。昼にはユニコーンの歌が聞こえた。',
'地球は新しい鉢を眺めた。まだ少し怒っていたが、水やりは手伝った。',
'包みはまだ机の引き出しにある。渡す日は本人が決めることになった。',
'翌朝、地球の家に短い手紙が届いた。「また今度ね」とだけ書いてあった。',
'広場の掲示板には二つの予定が並んだ。まだ時間の相談は続いている。',
'新しい飾りが風に揺れた。探偵は犯人欄に横線を引いた。',
'当番表に空欄ができた。地球はその日、久しぶりに昼寝をした。',
'工作台に外した車輪が置かれた。地球は自分の手で取り付け直した。',
'返事のない日が続いた。探偵は手帳を閉じ、次の依頼へ向かった。',
'次の集まりで地球は少し口数が減った。隣の席は空けておいた。',
'朝の集合に間に合わない日もある。住人たちは別の時間も試し始めた。',
'庭のベンチで地球は本を読んだ。遠くから仲間が手を振った。',
'冷蔵庫に「食べ物専用」の札が貼られた。地球は靴下にも札を付けた。',
'かずじぃは帽子を押さえて散歩した。鳥は別の枝に巣を作った。',
'昼の試食会に湯気が立った。地球は食べるかどうか自分で決めた。',
'履歴書は持ち主に戻った。宇宙人歓迎の看板だけはしばらく残った。',
'手帳に丸が付いた。ユニコーンは来年も忘れそうだと笑った。',
'探偵は自分の机にも整理用の箱を置いた。まず自分から始めるらしい。',
'冷蔵室からケーキが戻った。箱には大きく「ケーキ」と書かれた。',
'録音には新しい札が付いた。今度は誰も本物の鐘と間違えなかった。',
'修理された時計が展示台に戻った。三枚の写真も手帳に残った。',
'翌日、案内どおり催しが開かれた。探偵は日付を二度確認した。',
'壊れた台の前で二人は話し始めた。展示するかどうかはまだ決まっていない。',
'パン屋の休業札はそのまま。通りを歩く住人は静かに通り過ぎた。',
'広場に来る住人も、来ない住人もいた。参加表は以前より短くなった。',
'訂正を聞いてもすぐには納得しない住人がいた。話は少しずつ続いた。',
'会議の机に白紙が置かれた。何も書かずに帰る住人もいた。',
'広場の灯りがともった。窓の向こうで一人静かに過ごす住人もいた。'];
export function caseEpilogue(c,solved){return solved?epilogues[cases.indexOf(c)]||'':'';}
export function detectiveReflection(c){return ['pot','right','help','sorry','detective-accused','town-rumor'].includes(c.id)?'探偵「最初に思ったことが、いつも正しいとは限らないな。もう一度、話を聞いてみよう。」':'探偵「分かったことと、まだ分からないことを分けて手帳に書こう。」';}

export function guidedHint(c,seen,challenged,level=0){
 const missing=[...c.suspects,...c.clues].find(x=>!seen.includes(x.id));
 const pending=followupList(c).find((_,i)=>!challenged.includes(i));
 if(level<=0)return missing?'聞き込みと現場調査を進めよう。':pending?'証言と証拠の食い違いを探そう。':'証拠手帳で追加証言を読み直そう。';
 if(level===1)return detectiveHint({...c,followup:pending||c.followup},seen,!pending);
 if(missing||pending)return detectiveHint({...c,followup:pending||c.followup},seen,!pending);
 return '決め手の証拠：'+[c.proof,c.secondProof].filter(Boolean).map(id=>c.clues.find(x=>x.id===id).name).join('、');
}
export function seasonComplete(isSolved){return cases.every(c=>isSolved(c.id));}
