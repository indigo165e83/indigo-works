import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.indigo165e83.com',
  integrations: [
    starlight({
      title: 'Indigo Works',
      pagination: false,
      components: {
        Head: './src/components/Head.astro',
      },
      plugins: [
        starlightBlog({
          title: 'Blog',
          recentPostCount: 10,
          authors: {
            indigo: {
              name: 'Indigo',
              url: 'https://indigo165e83.com',
            },
          },
        }),
      ],
      head: [],
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          label: 'GitHub',
          icon: 'github',
          href: 'https://github.com/indigo165e83/indigo-works',
        }
      ],
      sidebar: [
        {
          label: 'About',
          link: '/about/',
        },
        {
          label: 'My Works',
          link: '/works/',
        },
        {
          label: 'Essential Scrum',
          link: '/design/essential-scrum/',
        },
        {
          label: 'TypeScript for Professionals',
          link: '/coding/typescript-for-professionals/',
        },
        {
          label: 'Introducing Python 3',
          link: '/coding/introducing-python-3/',
        },
        {
          label: 'JSTQB',
          items: [
            {
              label: 'Overview',
              link: '/jstqb/overview/',
            },
            {
              label: 'Core-Foundation Level シラバス 要約',
              link: '/jstqb/core/foundation/',
            },
            {
              label: 'Core-Advanced Level テストアナリスト (AL-TA) シラバス 要約',
              link: '/jstqb/core/advanced-ta/',
            },
            {
              label: 'Core-Advanced Level テストアナリスト (AL-TA) 例題・演習（v3.1）',
              link: '/jstqb/core/advanced-ta/exercises/',
            },
            {
              label: 'Core-Advanced Level テストマネージャ (AL-TM) シラバス 要約',
              link: '/jstqb/core/advanced-tm/',
            },
            {
              label: 'Agile-Foundation Level シラバス 要約',
              link: '/jstqb/agile/foundation/',
            },
            {
              label: 'Specialist-Advanced Level テスト自動化エンジニア(TAE) シラバス 要約',
              link: '/jstqb/specialist/advanced-tae/',
            },
            {
              label: 'Specialist-Foundation Level AIテスティング(CT-AI) シラバス 要約',
              link: '/jstqb/specialist/foundation-ctai/',
            },
          ],
        },
        {
          label: 'Tech Blog',
          link: '/blog/',
        },
        {
          label: 'お問い合わせ Contact',
          items: [
            { label: 'プライバシーポリシー', link: '/privacy' },
            { label: '利用規約', link: '/terms' },
            {
              label: 'お問い合わせ',
              link: 'https://docs.google.com/forms/d/e/1FAIpQLSfWK-b7UUl3oYis1MyrF7_51YlSi-NXmJ3izsFViIUpD_mqfg/viewform?usp=header',
              attrs: { target: '_blank', rel: 'noopener' },
            },
          ],
        },
      ],
    }),
    sitemap(),
    react(),
  ],
});