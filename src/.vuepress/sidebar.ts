import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/git/": "structure",
  "/front-end/": [
    {
      text: "HTML-CSS",
      icon: "JavaScriptdaima",
      collapsible: true,
      prefix: "HTML-CSS/",
      children: "structure",
    },
    {
      text: "Javascript",
      icon: "JavaScriptdaima",
      collapsible: true,
      prefix: "Javascript/",
      children: "structure",
    },
    {
      text: "Vue",
      icon: "JavaScriptdaima",
      collapsible: true,
      prefix: "Vue/",
      children: "structure",
    },
    {
      text: "React",
      icon: "JavaScriptdaima",
      collapsible: true,
      prefix: "React/",
      children: "structure",
    },
    {
      text: "NodeJS",
      icon: "JavaScriptdaima",
      collapsible: true,
      prefix: "NodeJS/",
      children: "structure",
    },
    {
      text: "Typescript",
      icon: "JavaScriptdaima",
      collapsible: true,
      prefix: "Typescript/",
      children: "structure",
    },
  ],
  "/front-end-infrastructure/": [
    {
      text: "Rollup打包工具",
      icon: "JavaScriptdaima",
      collapsible: true,
      prefix: "rollup/",
      children: "structure",
    },
    {
      text: "Webpack打包工具",
      icon: "webpack",
      collapsible: true,
      prefix: "webpack/",
      children: "structure",
    },
  ],
  "/advanced-program/": [
    {
      text: "设计模式",
      icon: "laptop-code",
      collapsible: true,
      prefix: "设计模式/",
      children: "structure",
    },
    {
      text: "算法",
      icon: "laptop-code",
      collapsible: true,
      prefix: "算法/",
      // link: "/expand/算法/sort.md", //点击选项卡时，默认选中第一项
      children: "structure",
    },
    {
      text: "数据结构",
      icon: "laptop-code",
      collapsible: true,
      prefix: "数据结构/",
      children: "structure",
    },
  ],
});
