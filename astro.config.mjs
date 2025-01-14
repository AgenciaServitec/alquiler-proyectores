import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react(), netlify()],
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  output: "server",
  adapter: netlify(),
});
