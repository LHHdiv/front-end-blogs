<template><div><h2 id="什么是-composition-api-组合式" tabindex="-1"><a class="header-anchor" href="#什么是-composition-api-组合式" aria-hidden="true">#</a> 什么是 Composition API(组合式)</h2>
<h4 id="选项式-api" tabindex="-1"><a class="header-anchor" href="#选项式-api" aria-hidden="true">#</a> 选项式 API</h4>
<ul>
<li>基于对象: 组件的各个方面都是在一个对象中进行声明,如 data、methods、computed、watch 等</li>
<li>逻辑分散: 相关的逻辑可能在不同的选项中分散，难以迅速理解组件的整体逻辑</li>
<li>语法较早：这是 Vue.js 最早期的编写组件的方式，现在仍然支持</li>
</ul>
<h4 id="组合式-api" tabindex="-1"><a class="header-anchor" href="#组合式-api" aria-hidden="true">#</a> 组合式 API</h4>
<ul>
<li>基于函数：组件的逻辑被封装在函数中，称为 &quot;Composition Function&quot;</li>
<li>逻辑集中：相关逻辑可以在同一个 Composition Function 中进行组合，提高了代码的可读性和维护性</li>
<li>更灵活：可以更方便地共享逻辑、重用代码，以及在不同组件之间更容易地组织和调整代码</li>
</ul>
<VuePlayground title="setup%20%E5%86%99%E5%9C%A8%20script%20%E6%A0%87%E7%AD%BE%E4%B8%AD" key="77d6d2b2" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbi8vIOWTjeW6lOW8j3JlZuOAgXJlYWN0aXZl44CB55Sf5ZG95ZGo5pyf44CB6K6h566X5bGe5oCn562J562J6YO96ZyA6KaB5LuOdnVl5Lit5byV5YWlXG5pbXBvcnQgeyByZWYsIG9uTW91bnRlZCB9IGZyb20gXCJ2dWVcIjtcbi8vIOWumuS5ieWTjeW6lOW8j%2BaVsOaNrmNvdW50XG5jb25zdCBjb3VudCA9IHJlZigwKTtcbi8vIOWumuS5ieaTjeS9nOaVsOaNrueahGluY3JlbWVudOaWueazlVxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICBjb3VudC52YWx1ZSsrO1xufVxuLy8gbW91bnRlZOeUn%2BWRveWRqOacn%2BaWueazlVxub25Nb3VudGVkKCgpID0%2BIHtcbiAgY29uc29sZS5sb2coXCJbb25Nb3VudGVkXVwiLCBjb3VudCk7XG59KTtcbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8ZGl2Pnt7IGNvdW50IH19PC9kaXY%2BXG4gIDxidXR0b24gQGNsaWNrPVwiaW5jcmVtZW50XCI%2B54K55Ye75L%2Bu5pS5Y291bnQ8L2J1dHRvbj5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D">
</VuePlayground>
<!-- setup 不写在 script 标签中 -->
<VuePlayground title="setup%20%E4%B8%8D%E5%86%99%E5%9C%A8%20script%20%E6%A0%87%E7%AD%BE%E4%B8%AD" key="a16d1802" settings="%7B%7D" files="eyJBcHAudnVlIjoiPHNjcmlwdD5cbmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSBcInZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzZXR1cCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHJlYWN0aXZlKHsgbXNnOiBcImhlbGxvXCIgfSk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBzdGF0ZS5tc2cgKz0gXCLvvIx3b3JsZFwiO1xuICAgIH07XG4gICAgLy8gc2V0dXDku6XosIPnlKjnmoTmlrnlvI%2FmiafooYzml7bvvIzpnIDopoHmiorlj5jph4%2FjgIHmlrnms5XnrYlyZXR1cm7lh7rljrtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGUsXG4gICAgICBoYW5kbGVDbGljayxcbiAgICB9O1xuICB9LFxufTtcbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8ZGl2Pnt7IHN0YXRlLm1zZyB9fTwvZGl2PlxuICA8YnV0dG9uIEBjbGljaz1cImhhbmRsZUNsaWNrXCI%2B54K55Ye7PC9idXR0b24%2BXG48L3RlbXBsYXRlPlxuIn0%3D">
</VuePlayground>
<h2 id="选项式-vs-组合式-状态与事件" tabindex="-1"><a class="header-anchor" href="#选项式-vs-组合式-状态与事件" aria-hidden="true">#</a> 选项式 vs 组合式(状态与事件)</h2>
<h2 id="常用-composition-api" tabindex="-1"><a class="header-anchor" href="#常用-composition-api" aria-hidden="true">#</a> 常用 Composition API</h2>
<h4 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup()</h4>
<div class="hint-container note">
<p class="hint-container-title">解释：setup()钩子是在组件中使用组合式 API 的入口</p>
<p><mark>使用场景：</mark></p>
<ol>
<li>需要在非单文件组件中使用组合式 API 时</li>
<li>需要在基于选项式 API 的组件中集成基于组合式 API 的代码时</li>
</ol>
</div>
<h4 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h4>
<div class="hint-container info">
<p class="hint-container-title">官方概念：接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value。</p>
</div>
<ol>
<li>使用 ref 给数据设置响应式</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">"你好交互演示!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="relative" tabindex="-1"><a class="header-anchor" href="#relative" aria-hidden="true">#</a> relative</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> msgObj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">typeName</span><span class="token operator">:</span> <span class="token string">"reactive"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{ msgObj.typeName }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msgObj.typeName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h4>
<h4 id="watcheffect、watchposteffect、watchsynceffect" tabindex="-1"><a class="header-anchor" href="#watcheffect、watchposteffect、watchsynceffect" aria-hidden="true">#</a> watchEffect、watchPostEffect、watchSyncEffect</h4>
<h4 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h4>
<h2 id="ref-和-reactive-和-shallowref-的区别" tabindex="-1"><a class="header-anchor" href="#ref-和-reactive-和-shallowref-的区别" aria-hidden="true">#</a> ref 和 reactive 和 shallowRef 的区别</h2>
<h2 id="setup-详解" tabindex="-1"><a class="header-anchor" href="#setup-详解" aria-hidden="true">#</a> setup 详解</h2>
<h2 id="watcheffect-和-watch-的区别" tabindex="-1"><a class="header-anchor" href="#watcheffect-和-watch-的区别" aria-hidden="true">#</a> watchEffect 和 watch 的区别</h2>
</div></template>


