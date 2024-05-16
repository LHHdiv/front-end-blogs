import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/git/": "structure",
  // 前端开发侧边栏
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
    "前端面试",
  ],
  // 前端基建侧边栏
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
  // 前端进阶侧边栏
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
  // 计算机科学与技术侧边栏
  "/computer/": [
    {
      text: "操作系统概论",
      icon: "laptop-code",
      collapsible: true,
      prefix: "操作系统概论/",
      children: "structure",
    },
    {
      text: "管理经济学",
      icon: "laptop-code",
      collapsible: true,
      prefix: "管理经济学/",
      // link: "/expand/算法/sort.md", //点击选项卡时，默认选中第一项
      children: "structure",
    },
    {
      text: "管理信息系统",
      icon: "laptop-code",
      collapsible: true,
      prefix: "管理信息系统/",
      children: "structure",
    },
    {
      text: "计算机网络原理",
      icon: "laptop-code",
      collapsible: true,
      prefix: "计算机网络原理/",
      children: "structure",
    },
    {
      text: "马克思主义基本原理概论",
      icon: "laptop-code",
      collapsible: true,
      prefix: "马克思主义基本原理概论/",
      children: "structure",
    },
    {
      text: "软件开发工具",
      icon: "laptop-code",
      collapsible: true,
      prefix: "软件开发工具/",
      children: "structure",
    },
    {
      text: "数据结构导论",
      icon: "laptop-code",
      collapsible: true,
      prefix: "数据结构导论/",
      children: "structure",
    },
    {
      text: "数据库系统原理",
      icon: "laptop-code",
      collapsible: true,
      prefix: "数据库系统原理/",
      children: "structure",
    },
    {
      text: "网络经济与企业管理",
      icon: "laptop-code",
      collapsible: true,
      prefix: "网络经济与企业管理/",
      children: "structure",
    },
    {
      text: "信息系统开发与管理",
      icon: "laptop-code",
      collapsible: true,
      prefix: "信息系统开发与管理/",
      children: "structure",
    },
    {
      text: "英语（二）",
      icon: "laptop-code",
      collapsible: true,
      prefix: "英语（二）/",
      children: "structure",
    },
    {
      text: "运筹学基础",
      icon: "laptop-code",
      collapsible: true,
      prefix: "运筹学基础/",
      children: "structure",
    },
    {
      text: "中国近现代史纲要",
      icon: "laptop-code",
      collapsible: true,
      prefix: "中国近现代史纲要/",
      children: "structure",
    },
    {
      text: "C++程序设计",
      icon: "laptop-code",
      collapsible: true,
      prefix: "C++程序设计/",
      children: "structure",
    },
  ],
});
