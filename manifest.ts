import { ManifestOptions } from "vite-plugin-pwa";

export const manifest = {
  name: "Sour Dough Calculator",
  short_name: "Udo Calculator",
  description: "Calculate your sour dough recipe",
  theme_color: "#882c00",
  icons: [
    {
      src: "/sourdough/icon.png",
      sizes: "800x800",
      type: "image/png",
    },
  ],
  display: "standalone",
} satisfies Partial<ManifestOptions>;
