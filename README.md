# Indigo Works

個人サイト「Indigo Works」のソースコードです。Astro + Starlight で構築しています。

🌐 **https://www.indigo165e83.com**


## 概要

- ポートフォリオ・作品紹介（My Works）
- 技術ブログ（Tech Blog）
- 書籍ノート（Essential Scrum / TypeScript / Python）
- JSTQB シラバス要約（Foundation / Advanced / Agile / Specialist）

## 技術スタック

- [Astro](https://astro.build) v5
- [Starlight](https://starlight.astro.build) — ドキュメントフレームワーク
- [starlight-blog](https://github.com/HiDeoo/starlight-blog) — ブログ機能
- React / Lucide React — インタラクティブコンポーネント

## プロジェクト構造

```
src/
├── content/docs/
│   ├── about/        # 自己紹介
│   ├── works/        # ポートフォリオ
│   ├── blog/         # ブログ記事
│   ├── coding/       # 技術書ノート
│   ├── design/       # デザイン・スクラムノート
│   └── jstqb/        # JSTQB シラバス要約
├── components/       # カスタムコンポーネント
└── styles/           # カスタム CSS
scripts/
└── create-blog.js    # ブログ記事作成スクリプト
```

## コマンド

| コマンド          | 内容                                |
| :---------------- | :---------------------------------- |
| `npm install`     | 依存関係のインストール              |
| `npm run dev`     | 開発サーバー起動（localhost:4321）  |
| `npm run build`   | 本番ビルド（`./dist/` に出力）      |
| `npm run preview` | ビルド結果のプレビュー              |
| `npm run blog`    | 新しいブログ記事の雛形を作成        |
