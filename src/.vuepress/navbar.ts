import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  "/css-md/",
  "/javascript/handwriting",
  "/typescript/",
  {
    text: "vue库",
    icon: "JavaScriptdaima",
    prefix: "/vues/",
    link: "/vues/v2/computed", //点击navbar时，可以直接定位到computed文章页面
  },
  "/reacts/",
  "/nodes/",
  {
    text: "打包构建",
    icon: "webpack",
    prefix: "/package-build/",
    children: [
      {
        text: "Rollup",
        icon: "JavaScriptdaima",
        prefix: "/rollup/",
        link: "rollup/",
      },
      {
        text: "Webpack",
        icon: "webpack",
        prefix: "/webpack/",
        link: "webpack/",
      },
    ],
  },
  {
    text: "拓展提升",
    icon: "JavaScriptdaima",
    prefix: "/expand/",
    link: "/expand/", //点击navbar时，可以直接定位到computed文章页面
  },
  "/project-config/",
  {
    text: "面试题",
    icon: "JavaScriptdaima",
    prefix: "/interviews.md",
    link: "/interviews.md", //点击navbar时，可以直接定位到computed文章页面
  },
  {
    text: "计算机笔记",
    icon: "JavaScriptdaima",
    prefix: "/universityNote/",
    link: "/universityNote/", //点击navbar时，可以直接定位到computed文章页面
  },
]);
