// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://tollmanufacturing.id",
  vite: {
    plugins: [
      tailwindcss(),
      imagetools({
        defaultDirectives: (url) => {
          if (url.searchParams.has("webp")) {
            return new URLSearchParams({
              format: "webp",
              w: "800;1200;1600",
            });
          }
          return new URLSearchParams();
        },
      }),
    ],
  },
  output: "static",

  integrations: [sitemap(), icon()],
});
