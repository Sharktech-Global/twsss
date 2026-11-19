// @ts-check
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    // Inline component/page CSS into the HTML instead of emitting
    // render-blocking /_astro/*.css <link> requests.
    inlineStylesheets: 'always',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: @import "src/styles/global.scss";
        }
      }
    },
    build: {
      sourcemap: false, // disables .map files in DevTools
    },
  },
  integrations: [react()],
  output: "server",
  adapter: vercel({}),
});
