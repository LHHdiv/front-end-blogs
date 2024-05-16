import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// 自动目录页生成
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
// 将博客主页的背景替换为每日的必应壁纸
import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Victor+Mono:wght@100;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  base: "/",

  lang: "zh-CN",
  title: "博客",
  description: "基于vuepress-theme-hope搭建的个人博客",

  theme,
  plugins: [
    autoCatalogPlugin({
      // 排除页面
      exclude: [""],
    }),
  ],
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },
});
