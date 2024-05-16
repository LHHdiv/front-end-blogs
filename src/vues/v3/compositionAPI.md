---
title: 组合式API
order: 1
index: true
icon: laptop-code
category:
  - Vue
---

## 什么是 Composition API(组合式)

#### 选项式 API

- 基于对象: 组件的各个方面都是在一个对象中进行声明,如 data、methods、computed、watch 等
- 逻辑分散: 相关的逻辑可能在不同的选项中分散，难以迅速理解组件的整体逻辑
- 语法较早：这是 Vue.js 最早期的编写组件的方式，现在仍然支持

#### 组合式 API

- 基于函数：组件的逻辑被封装在函数中，称为 "Composition Function"
- 逻辑集中：相关逻辑可以在同一个 Composition Function 中进行组合，提高了代码的可读性和维护性
- 更灵活：可以更方便地共享逻辑、重用代码，以及在不同组件之间更容易地组织和调整代码

::: vue-playground setup 写在 script 标签中
@file App.vue

```vue
<script setup>
// 响应式ref、reactive、生命周期、计算属性等等都需要从vue中引入
import { ref, onMounted } from "vue";
// 定义响应式数据count
const count = ref(0);
// 定义操作数据的increment方法
function increment() {
  count.value++;
}
// mounted生命周期方法
onMounted(() => {
  console.log("[onMounted]", count);
});
</script>
<template>
  <div>{{ count }}</div>
  <button @click="increment">点击修改count</button>
</template>
```

:::

<!-- setup 不写在 script 标签中 -->

::: vue-playground setup 不写在 script 标签中
@file App.vue

```vue
<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({ msg: "hello" });
    const handleClick = () => {
      state.msg += "，world";
    };
    // setup以调用的方式执行时，需要把变量、方法等return出去
    return {
      state,
      handleClick,
    };
  },
};
</script>
<template>
  <div>{{ state.msg }}</div>
  <button @click="handleClick">点击</button>
</template>
```

:::

## 选项式 vs 组合式(状态与事件)

## 常用 Composition API

#### setup()

:::note 解释：setup()钩子是在组件中使用组合式 API 的入口

==使用场景：==

1. 需要在非单文件组件中使用组合式 API 时
2. 需要在基于选项式 API 的组件中集成基于组合式 API 的代码时

:::

#### ref

:::info 官方概念：接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value。
:::

1. 使用 ref 给数据设置响应式

```vue
<script setup>
import { ref } from "vue";
const msg = ref("你好交互演示!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

#### relative

```vue
<script setup>
import { reactive } from "vue";
const msgObj = reactive({ typeName: "reactive" });
</script>

<template>
  <h1>{{ msgObj.typeName }}</h1>
  <input v-model="msgObj.typeName" />
</template>
```

#### computed

#### watchEffect、watchPostEffect、watchSyncEffect

#### watch

## ref 和 reactive 和 shallowRef 的区别

## setup 详解

## watchEffect 和 watch 的区别
