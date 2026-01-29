// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://indigo165e83.com',
	integrations: [
		starlight({
			title: 'Indigo Works',
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
						{ label: '自己紹介・レジュメ', slug: 'about' },
					],
				},
				{
					label: 'Works (Subdomains)',
					items: [
						{ label: 'Free Images', link: 'https://free-images.indigo165e83.com' },
						{ label: '4Testing', link: 'https://4testing.indigo165e83.com' },
					],					
				},
			],
		}),
	],
});
