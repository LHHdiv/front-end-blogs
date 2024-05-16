import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // 示例：在每个页面上禁用注入基本的`base.css`导入。
      // 如果你需要定义或导入你自己的 "base.css"，这很有用。
      applyBaseStyles: false,
    }),
  ],
});