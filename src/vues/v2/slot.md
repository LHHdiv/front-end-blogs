---
title: 插槽slot（Vue2）
---

[[toc]]

## 基础用法

:::tip
插槽分为具名插槽和非具名插槽
:::

#### 使用 slot 标签定义一个非具名插槽

```js
// vue项目中创建一个components/SlotComp.vue插槽组件
<div>
  <slot>我是插槽的占位数据</slot>
</div>
```

#### 使用定义好的 slot 插槽

```js
// vue项目中创建一个components/SlotDemo.vue，引入SlotComp组件
<template>
  <div>
    {/* 使用SlotComp插槽组件 */}
    <SlotComp>
      <h2>我是父组件的数据</h2>
    </SlotComp>
  </div>
</template>
<script>
{/* 引入SlotComp插槽组件 */}
import SlotComp from "./SlotComp.vue";
export default {
  components: {
    SlotComp
  }
}
{/* 此时浏览器页面会输出：我是父组件的数据 */}
```

<font color="#1280FA">以上为基础用法，slot 组件的默认数据会被父组件的数据覆盖</font>

## 具名插槽

#### 修改 SlotComp.vue 组件

```js
// 给components/SlotComp.vue插槽组件添加一个name属性
<div>
  <div>
    <slot name="header" :slotMsg="msg">我是插槽内部的头部数据</slot>
  </div>
  <div>
    <slot name="default">我是插槽内部的默认数据</slot>
    {/* 如果是default，也可以不写name属性 */}
    {/* <slot>我是插槽内部的默认数据</slot> */}
  </div>
  <div>
    <slot name="footer" :slotMsg="msg">我是插槽内部的尾部数据</slot>
  </div>
</div>
```

#### 具名插槽 SlotComp 组件调用

:::warning 除了 default 之外，header 和 footer 可以定义任意名称，和 slot 的 name 属性名保持一致即可
:::

```js
// components/SlotDemo.vue修改为以下代码
<SlotComp>
  {/* 数据会被插入到header位置 */}
  <template v-slot:header>
    <h4>我是外面传入的头部数据</h4>
  </template>
  {/* 数据会被插入到default位置，如果不写v-slot:default，也会默认插入到default */}
  <template v-slot:default>
    <h4>我是外面传入的默认数据</h4>
  </template>
  {/* 数据会被插入到footer位置 */}
  <template v-slot:footer>
    <h4>我是外面传入的尾部数据</h4>
  </template>
</SlotComp>
```

![<font color="red">具名插槽输出结果</font>](/assets/images/slot.png)

## 使用插槽内数据

#### 修改 components/SlotComp.vue 插槽组件

```js
// 添加自定义的slotMsg属性，取组件内定义的msg数据
<div>
  <slot name="header" :slotHeadMsg="msg">我是插槽内部的头部数据</slot>
</div>
<div>
  <slot name="default">我是插槽内部的默认数据</slot>
</div>
<div>
  <slot name="footer" :slotFootMsg="msg1">我是插槽内部的尾部数据</slot>
</div>
export default {
  data() {
    return {
      msg: "插槽内的数据被外部使用",
      msg1: "插槽内的尾部数据被外部使用",
    };
  }
};
```

#### 修改 components/SlotDemo.vue 组件

:::note headProps 和 footProps 是对应的具名插槽属性名，可以通过 headProps.[插槽内部定义的属性]来获取插槽内的数据
:::

```js
<SlotComp>
  <template v-slot:header="headProps">
    <h4>我是外面传入的头部数据 --- {{ headProps.slotHeadMsg }}</h4>
  </template>
  <template v-slot:default>
    <h4>我是外面传入的默认数据</h4>
  </template>
  <template v-slot:footer="footProps">
    <h4>我是外面传入的尾部数据 --- {{ footProps.slotFootMsg }}</h4>
  </template>
</SlotComp>
```

![<font color="red">使用插槽内数据</font>](/assets/images/slot1.png)

## 插槽原理（vm.$slots）

#### 作用域插槽（$scopedSlots）

#### 默认插槽（$slots）

## 插件机制

<!-- ## 总结

#### 插槽两种写法（ v-slot 和 # 等价）

```js
// 使用 v-slot 属性的方式
<template v-slot:header>
  <p>该数据会被插入到插槽名称属性为header的位置</p>
</template>
// 使用#的方式
<template #header>
  <p>该数据会被插入到插槽名称属性为header的位置</p>
</template>
```

#### default 默认名称（以下写法等价）

```js
// 写法一
<template #default></template>
// 写法二
<template v-slot:default></template>
``` -->
