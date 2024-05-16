---
title: Mixin(混入) & Transition(过渡)
index: true
icon: vue
category:
  - vue
---

:::tip mixin(混入) 是什么
混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。(可以理解为，把vue组件中的script内容提出来了一份js文件，拥有vue的生命周期、数据状态)
:::

## 基础示例

```js
// 定义一个myMixin混入对象
let myMixin = {
  created: function () {
    this.hello();
  },
  methods: {
    hello: function () {
      console.log("hello,I am myMixin");
    },
  },
};
// 定义一个使用混入对象的组件
let Component = Vue.extend({
  mixin: [myMixin],
});
let component = new Component()
// 会在加载结束后，created声明周期输出内容hello,I am myMixin
```
* 组件内使用mixin时，是一个方法和方法、状态与状态的合并操作
* 如果有同名钩子函数，或者同名数据，合并时，以组件内的方法和数据为主，覆盖mixin定义的同名方法和数据
* 组件内引入mixin的方式是：mixins:[mixin1,mixin2,...]
* 组件内引入了mixin之后，可以在当前组件直接使用mixin中的数据、方法等


## 全局混入mixin
:::warning
注意：混入也可以进行全局注册，但是一旦全局混入后，将会影响每一个之后创建的vue实例，一般不使用全局方式，而是选择和组件搭配
:::
```js
// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  created:function(){
    let myOption = this.$options.myOption
    if(myOption){
      console.log(myOption)
    }
  }
})
new Vue({
  myOption:"全局注入mixin"
})
```

## mixin缺点
1. 命名冲突（多个组件，多个mixin之间命名相同时，会出现名米相同、覆盖的情况）
2. 依赖不透明（排查问题时，会增加难度，不能直观的定位问题）


## Transition过渡

#### Vue 提供了 transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡
1. 条件渲染（v-if）
2. 条件展示（v-show）
3. 动态组件
4. 组件根节点

:::tip 基础示例

```js
// 一个vue组件
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
```

1. 使用Vue提供的transition包裹元素，使用v-if或v-show控制元素的动作
2. transition的name属性对应的是style的类名，支持自定义，如：name="rich"，则style中的类名为rich-enter-active，把fade替换为rich即可
:::