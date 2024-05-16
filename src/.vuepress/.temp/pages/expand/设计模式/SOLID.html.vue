<template><div><h2 id="s-单一职责原则-single-responsibility-principle" tabindex="-1"><a class="header-anchor" href="#s-单一职责原则-single-responsibility-principle" aria-hidden="true">#</a> S：单⼀职责原则（Single Responsibility Principle）</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li>通过解耦让每一个模块职责更加独立</li>
<li>目标：一个功能模块只做一件事</li>
</ul>
</div>
<div class="hint-container note">
<p class="hint-container-title">示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// create game store</span>
<span class="token keyword">class</span> <span class="token class-name">PUBGManager</span> <span class="token punctuation">{</span>
  <span class="token comment">// 弹窗方法</span>
  <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 计算金额</span>
    <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PUBGManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
game<span class="token punctuation">.</span><span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//弹窗之后计算金额，此时弹窗和计算金额 两个模块耦合</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="o-开闭原则-open-closed-principie" tabindex="-1"><a class="header-anchor" href="#o-开闭原则-open-closed-principie" aria-hidden="true">#</a> O：开闭原则（Open Closed Principie）</h2>
<h2 id="l-里氏替换原则-liskov-substitution-principle" tabindex="-1"><a class="header-anchor" href="#l-里氏替换原则-liskov-substitution-principle" aria-hidden="true">#</a> L：⾥⽒替换原则（Liskov Substitution Principle）</h2>
<h2 id="i-接口隔离原则-interface-segregation-principle" tabindex="-1"><a class="header-anchor" href="#i-接口隔离原则-interface-segregation-principle" aria-hidden="true">#</a> I：接⼝隔离原则（Interface-segregation Principle）</h2>
<h2 id="d-依赖倒置原则-dependency-inversion-principle" tabindex="-1"><a class="header-anchor" href="#d-依赖倒置原则-dependency-inversion-principle" aria-hidden="true">#</a> D：依赖倒置原则（Dependency Inversion Principle）</h2>
</div></template>


