import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    // docsSchema の extend を使って blogSchema を統合します
    schema: docsSchema({
      extend: (context) => blogSchema(context),
    }),
  }),
};