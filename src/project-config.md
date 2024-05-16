---
title: MD语法
index: false
icon: webpack
order: 0
category:
  - config
tag:
  - MD文件配置
---

## markdown 文件的 YAML 配置相关

**注意：如果单个 md 文件不使用 YAML 语法，则需要使用# + title 的方式开始，这样可以识别#后的内容作为侧边栏内容**

| 字段     | type    | 说明                                           |
| -------- | ------- | ---------------------------------------------- |
| title    | string  | 当前 md 文件的名称，会显示在侧边栏             |
| index    | boolean | 控制当前 md 文件是否会显示在侧边栏             |
| icon     | string  | 当前 md 文件名称的图标，提前引入图表库在线资源 |
| category | string  | 当前 md 文件分类                               |
| tag      | string  | 当前 md 文件的标签                             |
| order    | number  | 文章顺序，数字最小级别越高                     |

## 容器语法

| type | 值      | 示例       |
| ---- | ------- | ---------- |
| 信息 | info    | :::info    |
| 笔记 | note    | :::note    |
| 提示 | tip     | :::tip     |
| 危险 | danger  | :::danger  |
| 细节 | details | :::details |

## 文本块语法

:::info 一个没有绑定 id 的选项卡列表示例:
::: tabs
@tab apple
Apple
@tab banana
Banana
@tab orange
Orange
:::
语法：

```bash
::: tabs
@tab apple
Apple
@tab banana
Banana
@tab orange
Orange
:::
```

:::info 在 tabs 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件:
::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange
:::
语法：

```bash
::: tabs#fruit
@tab apple
Apple
@tab banana
Banana
@tab orange
Orange
:::
```

## :speech_balloon:如何禁用【在 GitHub 上编辑此页的文案】

:::tip
单个文件禁用： 在当前 md 文件中的 YAML 语法中配置 editLink: false
全局禁用：theme.ts 配置文件中，设置 editLink: false
:::

## 交互演示语法

:::tip 要使用交互演示，你应该使用一个名为 playground#preset 的容器（有 3 个指令）。

```bash
1. @file fileName 紧跟文件的代码块
2. @import importMapFileName 紧跟一个自定义“导入映射”的 json 代码块
3. @setting 紧跟一个自定义设置的 json 代码块
```

:::

::: playground#vue 使用自定义导入的 Vue 案例

@file App.vue

```vue
<script setup>
import { ref } from "vue";
const msg = ref("Hello World!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
  <!-- <Comp /> -->
  <div class="radius"></div>
</template>
<style>
.radius {
  width: 200px;
  height: 200px;
  background-color: #fac;
  border-radius: 50%;
}
</style>
```

<!--
@file Comp.vue

```vue
<template>
  <div>Comp</div>
</template>
``` -->

@import

```json
{
  "imports": {
    "vue": "https://sfc.vuejs.org/vue.runtime.esm-browser.js"
  }
}
```
