# Ver.0.9.19 総合テスト（一次）
- Node.js: tests/save-test.mjs、tests/regression.mjs 合格。
- ゴルフ初回報酬・再クリア・ホールインワン・10打報酬の重複防止、30件の記録、セリフ600件×10のID、通常会話100回×10の連続重複防止、隠し13体の発言を確認。
- 30コースのデータ構造を確認。全コースの実プレイは未検証。
- 修正：無効なゴルフ記録を達成数に含めない、セリフ候補が空の場合の保護、3D起動中に別画面へ移動した場合の停止、SNSメタデータの絶対URL化。
- Chromium実行を試みたが、環境のアクセス制限（ERR_BLOCKED_BY_ADMINISTRATOR）によりローカルページを開けなかった。実機、WebGL、Supabase、クレーン、部屋、劇場、旅行、博物館の操作確認は未完了。
- SQL変更なし。正式公開前に RELEASE-CHECKLIST.md を確認すること。
## 再実行
node --experimental-default-type=module tests/save-test.mjs
node --experimental-default-type=module tests/regression.mjs

## 0.9.19.1
独り言6300件（話題と反応の組み合わせ）、寝言、仲間の反応、表示切替。実機未検証。
