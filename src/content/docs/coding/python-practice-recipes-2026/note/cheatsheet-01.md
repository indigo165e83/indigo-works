---
title: "チート表"
description: "模擬試験で間違えた問題を整理したチート表"
---

### 統計
- 平均:statistics.mean()  ← averageではない
- 中央値:statistics.median()
- 分散:statistics.variance()
- 標準偏差:statistics.stdev()

### 日付・時刻
- 今日の日付:from datetime import date; date.today()
- 現在時刻:from datetime import datetime; datetime.now()

### ロギング優先度(高い順)
- CRITICAL(50)
- ERROR(40)
- WARNING(30)
- INFO(20)
- DEBUG(10)

### コマンドライン引数
- sys.argv  ← argsではない
- argparse モジュールも併用

### モジュールの中身確認
- dir(モジュール名)  ← モジュール内の名前一覧
- help(モジュール名)  ← ヘルプ表示