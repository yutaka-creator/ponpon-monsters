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

Ver.0.9.19.2: 下部ナビのイベント委譲、ゴルフ3D標準起動。実機未検証。

## 0.9.20.1
Camera transitions, aim at cup, follow toggle. Syntax and DOM references checked; regression and save tests run. Browser/iPhone rendering not tested.

## 0.9.20.1.1
- Fixed viewport layout, isolated canvas dimensions, added loading/error overlay and home button.
- iPhone/WebGL rendering not verified on device.

Ver.0.9.20.1.2: マイルームの固定表示・選択タブ追加。構文、既存回帰テスト、HTML ID確認。iPhone実機未確認。

## Ver.0.9.20.2
Three-press timing meter, automatic endpoint selection, impact angle error, reset on exit. Fixed loading overlay hidden CSS. Syntax and existing regression/save tests passed; browser and iPhone not tested.

## 0.9.20.3
風・地形・パター・飛距離表示を追加。構文、既存回帰、保存、4地形の停止計算を確認。実機未確認。

## 0.9.20.4
樹木・花・岩をインスタンス描画、芝色の微細変化、旗の揺れを追加。物理変更なし。変更JS構文・保存・回帰テスト合格。WebGL/iPhone実機未検証。

## 0.9.20.5
Quality presets, render throttling, minimap and landscape layout added. Syntax, quality preset, regression and save tests passed. Browser/iPhone rendering and frame rates not measured.

## 0.9.20.6
WebGL初期化の軽量化、ミニマップ取得失敗時の保護、ResizeObserver代替、起動エラー詳細と2Dへの直接退避を追加。iPhone実機およびCDN接続は未確認。
