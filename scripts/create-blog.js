// scripts/create-blog.js
import fs from 'fs';
import path from 'path';

// 引数からタイトルとスラッグを取得
const title = process.argv[2];
const slug = process.argv[3];

if (!title || !slug) {
  console.error('\n❌ エラー: タイトルまたはスラッグが指定されていません。');
  console.log('💡 使い方: npm run blog "記事のタイトル" "url-slug"');
  process.exit(1);
}

// 現在の日付を取得 (JST)
const now = new Date();
const jstOffset = 9 * 60 * 60 * 1000;
const localTime = new Date(now.getTime() + jstOffset);

const year = localTime.getUTCFullYear().toString();
const month = String(localTime.getUTCMonth() + 1).padStart(2, '0');
const day = String(localTime.getUTCDate()).padStart(2, '0');
const dateStr = `${year}-${month}-${day}`;

// ファイル名と保存先ディレクトリの作成
const fileName = `${year}${month}${day}-${slug}.mdx`;
// process.cwd() を使ってプロジェクトのルートディレクトリを取得します
const dirPath = path.join(process.cwd(), 'src', 'content', 'docs', 'blog', year, month);

// フォルダが存在しない場合は作成
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

const filePath = path.join(dirPath, fileName);

// すでに同名ファイルが存在する場合はエラー
if (fs.existsSync(filePath)) {
  console.error(`\n❌ エラー: 既にファイルが存在します (${filePath})`);
  process.exit(1);
}

const content = `---
title: ${title}
date: ${dateStr}
slug: blog/${slug}
description: ""
tags: []
featured: false
draft: false
---

## はじめに

ここに本文を書く...
`;

// ファイルの書き込み
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n✨ ブログ記事のひな形を作成しました！`);
console.log(`📂 パス: ${filePath}\n`);