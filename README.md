# ComfortablePandATS
PandAを快適にするブラウザ拡張機能です．

# ダウンロードリンク
- [Google Chrome](https://chrome.google.com/webstore/detail/comfortable-panda/cecjhdkagakhonnmddjgncmdldmppnoe)
- [Firefox](https://tinaxd.github.io/comfortable-panda-firefox-updates/index.html)
- [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/njbljhcmnodocldppoiejkcmcebpmljc)

# 使い方
1. 拡張機能をブラウザにインストールします．
1. PandAにログインします．
1. PandAの右上に☰ボタンが追加されていたら導入成功です．

# 機能紹介
## タブの色付け
課題やクイズの締め切り期日に応じて講義タブが色付けされます．
- ![#f03c15](https://via.placeholder.com/15/e85555/000000?text=+)
  締め切り24時間以内
- ![#f03c15](https://via.placeholder.com/15/d7aa57/000000?text=+)
  締め切り5日以内
- ![#f03c15](https://via.placeholder.com/15/62b665/000000?text=+)
  締め切り14日以内

## 新規課題通知
前回アクセス時から新たに追加された課題があった場合，講義タブの左上に赤丸の通知バッジを表示します．
通知バッジが表示されているサイトを開くと通知バッジは消えます．

## miniPandA
右上の☰を押すとminiPandAが開きます.
公開されている課題とクイズの一覧が表示されます．
また，メモ機能を使うことでminiPandA上に課題メモを追加することができます．


# キャッシュ機能
PandAへの負荷を軽減するために課題・クイズ取得にキャッシュ機能を導入しています．
デフォルトのキャッシュ間隔は以下のとおりです．
- 課題取得---2分間
- クイズ取得---10分間  
キャッシュ時間は設定から変更することができます


# Screenshot
![](https://user-images.githubusercontent.com/41512077/90533356-5504e080-e1b3-11ea-8065-bc10ec624ddf.png)

# 更新履歴
- 2020/05/20 v0.9.0 Prototype release
- 2020/05/21 v1.0.0 一般公開
- 2020/05/22 v1.0.1 小さなバグを修正。
- 2020/05/26 v1.0.2 通知バッジに関するバグを修正。
- 2020/06/10 v1.1.0 全ての課題を表示するサイドメニューを追加。
- 2020/06/11 v1.1.3 小さなバグを修正。
- 2020/06/13 v1.2.0 課題チェックボタンを追加。
- 2020/06/23 v1.3.0 クイズ・試験タブを追加。
- 2020/06/24 v1.3.1 バグを修正。
- 2020/06/30 v1.4.0 カスタムToDo機能を追加。
- 2020/08/16 v1.4.1 冗長な行を削除。
- 2020/08/17 v1.5.0 relax PandA と更新中インジケーターを追加。
- 2020/10/02 v1.5.2 通知バッジがリセットされるバグを修正。
- 2020/10/25 v1.6.0 キャッシュを使用するようになった。
- 2020/10/28 v1.6.1 Storage アクセスを非同期化。
- 2020/12/22 v1.7.0 締め切り順に課題がソートされるようになった。
- 2021/03/28 v2.0.0 Sakai 21 のサポート
- 2021/04/10 v2.1.0 エラー修正。
- 2021/04/13 v3.0.0 Typescript で一から作り直し。
- 2021/04/13 v3.0.4 バグ修正。
- 2021/04/13 v3.1.0 バグ修正。
- 2021/05/05 v3.2.0 SubPandA 実装。
- 2021/05/15 v3.3.0 クイズを取得可能にした。
- 2021/05/16 v3.4.0 設定画面を追加。
- 2021/05/16 v3.4.1 小さなバグを修正。
- 2021/05/16 v3.4.3 小さなバグを修正。
- 2021/05/17 v3.5.0 カラーユニバーサルデザインに対応
- 2021/05/17 v3.5.2 締切が14日以上の課題も色付けするように

# コンパイル方法
Run
```
npx webpack
```

# License
Apache-2.0 License
