// src/content.config.ts
import { defineCollection, z } from 'astro:content'; // 👈 z を追加インポート
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';

// ▼ タグの正式名称を管理する辞書（キーはすべて小文字で定義します）
// 主要な技術（辞書にあるもの）: [git, nextjs, react] （小文字・ケバブケースで書く → 辞書に従って変換される）
// マイナーな単語（辞書にないもの）: [VS Code, Docker, ベランダ菜園] （表示したい文字をそのまま書く → そのまま表示される）
const TAG_MAP: Record<string, string> = {
  'git': 'Git',
  'github': 'GitHub',
  'nextjs': 'Next.js',
  'next.js': 'Next.js', // 記号入りの表記揺れ対策
  'react': 'React',
  'typescript': 'TypeScript',
  'javascript': 'JavaScript',
  'astro': 'Astro',
  'starlight': 'Starlight',
  'ui-ux': 'UI/UX',
  'jstqb': 'JSTQB',
  'claude-code': 'Claude Code',
  'playwright': 'Playwright',
  'ai': 'AI',
  'notebooklm': 'NotebookLM',
  'qa': 'QA',
};

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      // docsSchema の extend を使って blogSchema を統合し、さらにタグを変換します
      extend: (context) => {
        // 1. まず starlight-blog のスキーマを読み込む
        const baseSchema = blogSchema(context);

        // 2. そのスキーマの `tags` フィールドの動作を上書き（拡張）する
        return baseSchema.extend({
          tags: z.array(z.string())
            .optional()
            .transform((tags) => {
              if (!tags) return undefined;
              
              return tags.map((tag) => {
                // 入力されたタグを小文字化してキーにする
                const key = tag.toLowerCase();
                // 辞書にあれば正式名称を、なければ入力された文字をそのまま返す
                return TAG_MAP[key] || tag;
              });
            }),
        });
      },
    }),
  }),
};