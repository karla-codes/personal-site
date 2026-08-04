// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Karla',
      cssVariable: '--font-azaret-mono',
      weights: ['200 800'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Karla',
      cssVariable: '--font-heading',
      weights: ['200 800'],
      styles: ['normal'],
    },
  ],
});
