import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/css-md/": "structure",
  "/reacts/": "structure",
  "/nodes/": "structure",
  "/javascript/": "structure",
  "/typescript/": "structure",
  "/vues/": "structure",
  "/package-build/": [
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
      // link: "/es6/",
      children: "structure",
    },
  ],
  "/expand/": [
    "SOLID.md",
    {
      text: "设计模式",
      icon: "laptop-code",
      collapsible: true,
      prefix: "designPatterns/",
      // link: "/expand/designPatterns/SOLID.md", //点击选项卡时，默认选中第一项
      children: [
        {
          text: "创建型设计模式",
          icon: "laptop-code",
          collapsible: true,
          prefix: "designPatterns/creationalDesignPatterns/",
          children: "structure",
        },
        {
          text: "结构型设计模式",
          icon: "laptop-code",
          collapsible: true,
          prefix: "designPatterns/structuralDesignPatterns/",
          children: "structure",
        },
        {
          text: "行为型设计模式",
          icon: "laptop-code",
          collapsible: true,
          prefix: "designPatterns/behavioralDesignPatterns/",
          children: "structure",
        },
      ],
    },
    {
      text: "算法",
      icon: "laptop-code",
      collapsible: true,
      prefix: "算法/",
      link: "/expand/算法/sort.md", //点击选项卡时，默认选中第一项
      children: "structure",
    },
  ],
  "/universityNote/": [
    {
      text: "数据库系统原理",
      icon: "JavaScriptdaima",
      collapsible: true,
      prefix: "database/",
      children: "structure",
    },
  ],
});
