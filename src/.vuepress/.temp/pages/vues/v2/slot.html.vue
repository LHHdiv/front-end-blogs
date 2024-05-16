<template><div><nav class="table-of-contents"><ul><li><router-link to="#基础用法">基础用法</router-link></li><li><router-link to="#具名插槽">具名插槽</router-link></li><li><router-link to="#使用插槽内数据">使用插槽内数据</router-link></li><li><router-link to="#插槽原理-vm-slots">插槽原理（vm.$slots）</router-link></li><li><router-link to="#插件机制">插件机制</router-link></li></ul></nav>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>插槽分为具名插槽和非具名插槽</p>
</div>
<h4 id="使用-slot-标签定义一个非具名插槽" tabindex="-1"><a class="header-anchor" href="#使用-slot-标签定义一个非具名插槽" aria-hidden="true">#</a> 使用 slot 标签定义一个非具名插槽</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// vue项目中创建一个components/SlotComp.vue插槽组件</span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>slot<span class="token operator">></span>我是插槽的占位数据<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用定义好的-slot-插槽" tabindex="-1"><a class="header-anchor" href="#使用定义好的-slot-插槽" aria-hidden="true">#</a> 使用定义好的 slot 插槽</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// vue项目中创建一个components/SlotDemo.vue，引入SlotComp组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token comment">/* 使用SlotComp插槽组件 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>SlotComp<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>我是父组件的数据<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>SlotComp<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token punctuation">{</span><span class="token comment">/* 引入SlotComp插槽组件 */</span><span class="token punctuation">}</span>
<span class="token keyword">import</span> SlotComp <span class="token keyword">from</span> <span class="token string">"./SlotComp.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    SlotComp
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token comment">/* 此时浏览器页面会输出：我是父组件的数据 */</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color="#1280FA">以上为基础用法，slot 组件的默认数据会被父组件的数据覆盖</font><h2 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a> 具名插槽</h2>
<h4 id="修改-slotcomp-vue-组件" tabindex="-1"><a class="header-anchor" href="#修改-slotcomp-vue-组件" aria-hidden="true">#</a> 修改 SlotComp.vue 组件</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 给components/SlotComp.vue插槽组件添加一个name属性</span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"header"</span> <span class="token operator">:</span>slotMsg<span class="token operator">=</span><span class="token string">"msg"</span><span class="token operator">></span>我是插槽内部的头部数据<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"default"</span><span class="token operator">></span>我是插槽内部的默认数据<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token punctuation">{</span><span class="token comment">/* 如果是default，也可以不写name属性 */</span><span class="token punctuation">}</span>
    <span class="token punctuation">{</span><span class="token comment">/* &lt;slot>我是插槽内部的默认数据&lt;/slot> */</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"footer"</span> <span class="token operator">:</span>slotMsg<span class="token operator">=</span><span class="token string">"msg"</span><span class="token operator">></span>我是插槽内部的尾部数据<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="具名插槽-slotcomp-组件调用" tabindex="-1"><a class="header-anchor" href="#具名插槽-slotcomp-组件调用" aria-hidden="true">#</a> 具名插槽 SlotComp 组件调用</h4>
<div class="hint-container warning">
<p class="hint-container-title">除了 default 之外，header 和 footer 可以定义任意名称，和 slot 的 name 属性名保持一致即可</p>
</div>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// components/SlotDemo.vue修改为以下代码</span>
<span class="token operator">&lt;</span>SlotComp<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token comment">/* 数据会被插入到header位置 */</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>header<span class="token operator">></span>
    <span class="token operator">&lt;</span>h4<span class="token operator">></span>我是外面传入的头部数据<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token comment">/* 数据会被插入到default位置，如果不写v-slot:default，也会默认插入到default */</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span><span class="token keyword">default</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h4<span class="token operator">></span>我是外面传入的默认数据<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token comment">/* 数据会被插入到footer位置 */</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>footer<span class="token operator">></span>
    <span class="token operator">&lt;</span>h4<span class="token operator">></span>我是外面传入的尾部数据<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>SlotComp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="/assets/images/slot.png" alt="具名插槽输出结果" tabindex="0" loading="lazy"><figcaption><font color="red">具名插槽输出结果</font></figcaption></figure>
<h2 id="使用插槽内数据" tabindex="-1"><a class="header-anchor" href="#使用插槽内数据" aria-hidden="true">#</a> 使用插槽内数据</h2>
<h4 id="修改-components-slotcomp-vue-插槽组件" tabindex="-1"><a class="header-anchor" href="#修改-components-slotcomp-vue-插槽组件" aria-hidden="true">#</a> 修改 components/SlotComp.vue 插槽组件</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 添加自定义的slotMsg属性，取组件内定义的msg数据</span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"header"</span> <span class="token operator">:</span>slotHeadMsg<span class="token operator">=</span><span class="token string">"msg"</span><span class="token operator">></span>我是插槽内部的头部数据<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"default"</span><span class="token operator">></span>我是插槽内部的默认数据<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"footer"</span> <span class="token operator">:</span>slotFootMsg<span class="token operator">=</span><span class="token string">"msg1"</span><span class="token operator">></span>我是插槽内部的尾部数据<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"插槽内的数据被外部使用"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">msg1</span><span class="token operator">:</span> <span class="token string">"插槽内的尾部数据被外部使用"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改-components-slotdemo-vue-组件" tabindex="-1"><a class="header-anchor" href="#修改-components-slotdemo-vue-组件" aria-hidden="true">#</a> 修改 components/SlotDemo.vue 组件</h4>
<div class="hint-container note">
<p class="hint-container-title">headProps 和 footProps 是对应的具名插槽属性名，可以通过 headProps.[插槽内部定义的属性]来获取插槽内的数据</p>
</div>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>SlotComp<span class="token operator">></span>
  <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>header<span class="token operator">=</span><span class="token string">"headProps"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h4<span class="token operator">></span>我是外面传入的头部数据 <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> headProps<span class="token punctuation">.</span>slotHeadMsg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span><span class="token keyword">default</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h4<span class="token operator">></span>我是外面传入的默认数据<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span>footer<span class="token operator">=</span><span class="token string">"footProps"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h4<span class="token operator">></span>我是外面传入的尾部数据 <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> footProps<span class="token punctuation">.</span>slotFootMsg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>SlotComp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="/assets/images/slot1.png" alt="使用插槽内数据" tabindex="0" loading="lazy"><figcaption><font color="red">使用插槽内数据</font></figcaption></figure>
<h2 id="插槽原理-vm-slots" tabindex="-1"><a class="header-anchor" href="#插槽原理-vm-slots" aria-hidden="true">#</a> 插槽原理（vm.$slots）</h2>
<h4 id="作用域插槽-scopedslots" tabindex="-1"><a class="header-anchor" href="#作用域插槽-scopedslots" aria-hidden="true">#</a> 作用域插槽（$scopedSlots）</h4>
<h4 id="默认插槽-slots" tabindex="-1"><a class="header-anchor" href="#默认插槽-slots" aria-hidden="true">#</a> 默认插槽（$slots）</h4>
<h2 id="插件机制" tabindex="-1"><a class="header-anchor" href="#插件机制" aria-hidden="true">#</a> 插件机制</h2>
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
</div></template>


