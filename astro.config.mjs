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
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6897468555074184',
            crossorigin: 'anonymous',
          },
        },
      ],
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
          label: 'JSTQB',
          items: [
            { link: 'jstqb/', label: 'Index' },
            {
              label: 'Overview',
              link: '/jstqb/overview/',
            },
            {
              label: 'Foundation Level シラバス 要約',
              link: '/jstqb/foundation-v4/',
            },
            {
              label: 'Advanced Level テスト自動化エンジニア(TAE) シラバス 要約',
              link: '/jstqb/advanced-tae/',
            },
            {
              label: 'Foundation Level AIテスティング(CT-AI) シラバス 要約',
              link: '/jstqb/foundation-ctai/',
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