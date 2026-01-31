// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://indigo165e83.com',
	integrations: [
		starlight({
			title: 'Indigo Works',
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
			customCss: ['./src/styles/custom.css'],	//customCss のパスを追加
			social: [
				{ 
					icon: 'github',
					href: 'https://github.com/indigo165e83/indigo-works',
					label: 'GitHub'
				 }],
			sidebar: [
				{
					label: 'Overview',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About', slug: 'about' },
						{ label: 'Works', slug: 'works' },
					],
				},
				{
					label: 'お問い合わせ Contact',
					items: [
						{ label: 'プライバシーポリシー', slug: 'privacy' },
						{ 
							label: 'お問い合わせ', 
							link: 'https://docs.google.com/forms/d/e/1FAIpQLSfWK-b7UUl3oYis1MyrF7_51YlSi-NXmJ3izsFViIUpD_mqfg/viewform?usp=header',
							attrs: { target: '_blank', rel: 'noopener' }
						},
					],					
				},
			],
		}),
	],
});
