<template><div><h2 id="ts-类型注解" tabindex="-1"><a class="header-anchor" href="#ts-类型注解" aria-hidden="true">#</a> TS 类型注解</h2>
<div class="hint-container info">
<p class="hint-container-title">内容</p>
<ul>
<li>TS 是 JS 的超集，提供了 JS 所有的功能，并且额外增加了<strong>类型系统</strong></li>
<li>TS 类型系统可以显示标记出代码中的意外行为，让开发者在开发过程中就可以看到错误并改正，从而降低运行时发生错误的可能性</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 这里的:string就是类型注解，约定了变量name的类型只能是字符串格式</span>
<span class="token keyword">let</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">"小L"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ts-基础语法" tabindex="-1"><a class="header-anchor" href="#ts-基础语法" aria-hidden="true">#</a> ts 基础语法</h4>
<p>let 变量名:类型注解 = 变量值<br>
示例：<font color="green">let num: number = 111</font>;</p>
</div>
<h2 id="ts-类型分类" tabindex="-1"><a class="header-anchor" href="#ts-类型分类" aria-hidden="true">#</a> TS 类型分类</h2>
<div class="hint-container info">
<p class="hint-container-title">类型分类</p>
<p>1.JS 已有类型</p>
<ul>
<li>原始类型：(number、string、boolean、null、undefined)</li>
<li>引用类型：(数组、对象、函数等)</li>
</ul>
<ol start="2">
<li>TS 新增类型</li>
</ol>
<ul>
<li>联合类型</li>
<li>自定义类型</li>
<li>接口</li>
<li>元祖</li>
<li>字面量类型</li>
<li>枚举</li>
<li>void</li>
</ul>
</div>
<h2 id="ts-类型别名" tabindex="-1"><a class="header-anchor" href="#ts-类型别名" aria-hidden="true">#</a> TS 类型别名</h2>
<div class="hint-container info">
<p class="hint-container-title">使用 type 为任意类型起别名 type（很灵活）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 假设要要定义多个同类型数组变量</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr1</span><span class="token operator">:</span> <span class="token punctuation">(</span>number <span class="token operator">|</span> string<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"4"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr2</span><span class="token operator">:</span> <span class="token punctuation">(</span>number <span class="token operator">|</span> string<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">"8"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 可以使用以下方式把(number | string)[]类抽离出来单独定义，这样就可以复用该类型</span>
<span class="token comment">// type就相当于let、const等关键字，ts中类型别名必须要用type关键字</span>
type arrType <span class="token operator">=</span> <span class="token punctuation">(</span>number <span class="token operator">|</span> string<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr3</span><span class="token operator">:</span> arrType <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">123354</span><span class="token punctuation">,</span> <span class="token number">566</span><span class="token punctuation">,</span> <span class="token string">"str"</span><span class="token punctuation">,</span> <span class="token number">324</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 也可以这样写(把联合类型抽离出来去组合)</span>
<span class="token keyword">let</span> baseType <span class="token operator">=</span> number <span class="token operator">|</span> string<span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr4</span><span class="token operator">:</span> baseType<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token string">"def"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="ts-数组类型" tabindex="-1"><a class="header-anchor" href="#ts-数组类型" aria-hidden="true">#</a> TS 数组类型</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 声明一个number类型的数组arr，该arr内的数据必须都是number类型</span>
<span class="token comment">// 写法1</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr1</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 写法2(该数组可以定义number和string两种类型)</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr2</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number <span class="token operator">|</span> string<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span>，<span class="token string">'Hi'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts-联合类型" tabindex="-1"><a class="header-anchor" href="#ts-联合类型" aria-hidden="true">#</a> TS 联合类型</h2>
<div class="hint-container info">
<p class="hint-container-title">使用或运算符 | 关联</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 该arr可以定义数字和字符串两种类型的值</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">(</span>number <span class="token operator">|</span> string<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"字符串数据"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 这种情况下就可以不用加括号()</span>
<span class="token keyword">let</span> <span class="token literal-property property">timerId</span><span class="token operator">:</span> number <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><font color="red">注意：或 | 运算符优先级较低，所有使用联合类型的时候要加个()包裹来提升优先级</font></div>
<h2 id="ts-函数类型" tabindex="-1"><a class="header-anchor" href="#ts-函数类型" aria-hidden="true">#</a> TS 函数类型</h2>
<div class="hint-container info">
<p class="hint-container-title">对函数的参数和返回值做类型约束，减少函数运行时错误</p>
<p><mark>1. 这里的笔记都是基于函数有 return 返回值的</mark><br>
<mark>2. JS 中函数没 return 返回值会返回 undefined</mark><br>
<mark>3. TS 中函数没 return 返回值会推断出 void 类型</mark></p>
<h4 id="函数的三种定义方式一-函数声明" tabindex="-1"><a class="header-anchor" href="#函数的三种定义方式一-函数声明" aria-hidden="true">#</a> 函数的三种定义方式一（函数声明）</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// add函数的入参有两个，并且都是number类型，返回值也是number类型，(此时的返回值是自动推断的)</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出number类型的 3</span>
<span class="token comment">// add函数的入参有两个，并且都是number类型，返回值也是number类型，(此时的返回值是手动指定的)</span>
<span class="token keyword">function</span> <span class="token function">minus</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">minus</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出number类型的 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数的三种定义方式二-函数表达式" tabindex="-1"><a class="header-anchor" href="#函数的三种定义方式二-函数表达式" aria-hidden="true">#</a> 函数的三种定义方式二（函数表达式）</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">firstName</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstName <span class="token operator">+</span> lastName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> firstName <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">"程"</span><span class="token punctuation">,</span> <span class="token string">"咬金"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出字符串类型的 程咬金</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数的三种定义方式三-箭头函数" tabindex="-1"><a class="header-anchor" href="#函数的三种定义方式三-箭头函数" aria-hidden="true">#</a> 函数的三种定义方式三（箭头函数）</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> sub <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">number</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">sub</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出number类型的 21</span>
<span class="token comment">// 单个入参的写法(TS中也必须要加小括号)</span>
<span class="token keyword">const</span> mul <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">number</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">*</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">mul</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出number类型的 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在函数中使用类型别名-type" tabindex="-1"><a class="header-anchor" href="#在函数中使用类型别名-type" aria-hidden="true">#</a> 在函数中使用类型别名 type</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 箭头函数的类型别名用法</span>
type <span class="token function-variable function">FnType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> number<span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>type<span class="token punctuation">}</span></span> <span class="token parameter">类型声明关键字</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>FnType<span class="token punctuation">}</span></span> <span class="token parameter">箭头函数名</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>a<span class="token operator">:</span>number<span class="token punctuation">}</span></span> 参数a,类型为number
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>b<span class="token operator">:</span>number<span class="token punctuation">}</span></span> 参数b,类型为number
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">=></span> number<span class="token punctuation">}</span></span> <span class="token parameter">该箭头函数返回值类型为number</span>
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token comment">// 在箭头函数中使用函数的类型别名FnType</span>
<span class="token keyword">const</span> <span class="token literal-property property">fn</span><span class="token operator">:</span> <span class="token function-variable function">FnType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 在函数表达式中使用函数的类型别名FnType</span>
<span class="token keyword">const</span> <span class="token literal-property property">fn1</span><span class="token operator">:</span> <span class="token function-variable function">FnType</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数类型结论" tabindex="-1"><a class="header-anchor" href="#函数类型结论" aria-hidden="true">#</a> 函数类型结论：</h4>
<ol>
<li>返回值类型可以由函数自身推断，开发过程中可以不自定义</li>
<li>如果自定义返回值类型，则自定义类型需要和返回值的 return 的数据类型一致，否则报错</li>
<li>JS 中的箭头函数，只有一个入参时，可以省略小括号()，<font color="red">在 TS 中不可以省略小括号()</font></li>
<li>
<font color="red">函数的类型别名，通常在箭头函数和函数表达式中使用，函数声明的方式不使用</font></li>
</ol>
</div>
<h2 id="ts-void-类型" tabindex="-1"><a class="header-anchor" href="#ts-void-类型" aria-hidden="true">#</a> TS void 类型</h2>
<div class="hint-container info">
<p class="hint-container-title">函数无返回值，TS 中会推断出返回值类型为 void 类型</p>
<p><mark>1. 函数如果不写 return,默认是返回 undefined，但是 TS 推断出的类型为 void</mark><br>
<mark>2. 当你在 TS 中设置:undefined 时，则必须返回一个 undefined 类型</mark><br>
<mark>3. TS 提供了一个返回值类型 void：意思是没有返回值</mark></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 该写法TS会提示：生命类型不为"void"或"any"的函数必须返回值，此时在函数内加上return undefined即可</span>
<span class="token keyword">const</span> undef <span class="token operator">=</span> <span class="token punctuation">(</span>msg<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">undefined</span></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// return undefined</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">undef</span><span class="token punctuation">(</span><span class="token string">"Hi, 你好"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// void可以不定义，不定义的话，由于没有return，会默认推导返回类型为void</span>
<span class="token keyword">const</span> voidFn <span class="token operator">=</span> <span class="token punctuation">(</span>msg1<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">voidFn</span><span class="token punctuation">(</span><span class="token string">"Hi, 你好"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="ts-对象类型" tabindex="-1"><a class="header-anchor" href="#ts-对象类型" aria-hidden="true">#</a> TS 对象类型</h2>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><mark>1. TS 对象类型的语法如 personObj</mark><br>
<mark>2. 变量后面，声明对象内的所有属性的类型</mark></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> personObj<span class="token operator">:</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  hobby<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span>content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"程咬金"</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  hobby<span class="token operator">:</span> <span class="token string">"打野"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span>content<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
personObj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">"我是程咬金"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>对象类型别名</mark></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用type定义了personType类型</span>
type personType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  hobby<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">content</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fn1</span><span class="token operator">:</span><span class="token punctuation">(</span>text<span class="token operator">:</span>string<span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 使用personType类型定义personObj对象</span>
<span class="token keyword">let</span> <span class="token literal-property property">personObj</span><span class="token operator">:</span> personType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"项羽"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">"战士"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
personObj<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">"我是箭头函数的方式定义"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
personObj<span class="token punctuation">.</span><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token string">"fn1是函数声明的方式定义"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用personType类型定义personObj1对象</span>
<span class="token keyword">let</span> <span class="token literal-property property">personObj1</span><span class="token operator">:</span> personType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"虞姬"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
personObj1<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">"我是虞姬"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 由于hobby是可选参数，所以使用的时候需要判断</span>
<span class="token comment">// 1. if判断</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>personObj1<span class="token punctuation">.</span>hobby<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> concatData <span class="token operator">=</span> personObj1<span class="token punctuation">.</span>hobby<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">"hobby属性执行concat"</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>concatData<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2. &amp;&amp;与运算符</span>
personObj1<span class="token punctuation">.</span>hobby <span class="token operator">&amp;&amp;</span> personObj1<span class="token punctuation">.</span>hobby<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">"hobby属性执行concat"</span><span class="token punctuation">)</span>
<span class="token comment">// 3. 可选链(?)</span>
personObj1<span class="token punctuation">.</span>hobby<span class="token operator">?.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">"hobby属性执行concat"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1. 如果对象中的属性不是必须使用的，可以参考下面的可选参数，在对应的属性后面加上 ？ 即可</strong><br>
<strong>2. 例如上面 personType 中的 hobby 属性，就是一个可选属性</strong></p>
</div>
<h2 id="ts-可选参数" tabindex="-1"><a class="header-anchor" href="#ts-可选参数" aria-hidden="true">#</a> TS 可选参数</h2>
<div class="hint-container info">
<p class="hint-container-title">TS 可选参数 ? 的用法</p>
<p>TypeScript 里的每个函数参数都是必须的。这不是指不能传递 null 或 undefined 作为参数，而是说编译器检查用户是否为每个参数都传入了值。编译器还会假设只有这些参数会被传递进函数。简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。</p>
<p><mark>1. JS 中的函数，定义了形参，调用函数时，可以不传实参</mark><br>
<mark>2. TS 中的函数，调用函数时，形参和实参必须都要对应，实参可以传 undefined|null</mark><br>
<mark>3. TS 中，要使用可选参数，在形参后面加个问号 ? 即可，如 car 函数的 price 参数</mark><br>
<mark>4. TS 中，必选参数不能位于可选参数后面</mark></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// (name?: string, price: string)是错误的，此时必选参数price在可选参数name后面了</span>
<span class="token keyword">const</span> <span class="token function-variable function">car</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> price<span class="token operator">?</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 由于没传第二个参数price，car函数内的price为undefined</span>
<span class="token function">car</span><span class="token punctuation">(</span><span class="token string">"宝马"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="ts-字面量类型" tabindex="-1"><a class="header-anchor" href="#ts-字面量类型" aria-hidden="true">#</a> TS 字面量类型</h2>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>一个字面量是一个集体类型中更为具体的一种子类型。意思是：&quot;Hello World&quot; 是一个 string，但是一个 string 不是类型系统中的 &quot;Hello World&quot;<br>
<mark>字面量：可以直接看到结果的都可以叫字面量：1,2,'hello',[],{name:'小王'},function(){},...等等</mark><br>
<mark>字面量类型：任意的 JS 字面量都可以当做类型使用</mark><br>
<mark>const str2 = &quot;world&quot;会被 TS 推断为 world 类型，这种类型就叫「字面量」类型</mark></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用let声明的str1的类型会被自动推断为string</span>
<span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token comment">// 使用const声明的str2的类型却被推断为了 world</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字面量应用模式和场景" tabindex="-1"><a class="header-anchor" href="#字面量应用模式和场景" aria-hidden="true">#</a> 字面量应用模式和场景</h4>
<ul>
<li>使用模式：字面量类型配合联合类型一起使用</li>
<li>使用场景：用来表示一组明确的可选值列表</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// type定义的Direction类型列表就是字面量类型（上下左右四个类型，实参就只能传入这四个其中的一个）</span>
type Direction <span class="token operator">=</span> <span class="token string">"上"</span> <span class="token operator">|</span> <span class="token string">"下"</span> <span class="token operator">|</span> <span class="token string">"左"</span> <span class="token operator">|</span> <span class="token string">"右"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">changeDirection</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">direction</span><span class="token operator">:</span> Direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span><span class="token string">"上"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：简单说，字面量类型就是把字面量当做类型来使用</p>
</div>
<h2 id="ts-接口类型" tabindex="-1"><a class="header-anchor" href="#ts-接口类型" aria-hidden="true">#</a> TS 接口类型</h2>
<div class="hint-container info">
<p class="hint-container-title">使用 interface 定义接口</p>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> 接口名 <span class="token punctuation">{</span>
  <span class="token literal-property property">属性名</span><span class="token operator">:</span> 类型<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义IPerson接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> string <span class="token operator">|</span> boolean <span class="token operator">|</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用IPerson接口</span>
<span class="token keyword">const</span> <span class="token literal-property property">person</span><span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"安琪拉"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"女"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接口继承-优点-可以抽离出公共的约束规则" tabindex="-1"><a class="header-anchor" href="#接口继承-优点-可以抽离出公共的约束规则" aria-hidden="true">#</a> 接口继承（优点：可以抽离出公共的约束规则）</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义基础的IPerson接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> string <span class="token operator">|</span> boolean <span class="token operator">|</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 定义一个IStudent接口，并且继承IPerson接口的约束规则</span>
<span class="token keyword">interface</span> <span class="token class-name">IStudent</span> <span class="token keyword">extends</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">score</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">stuID</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 创建一个stu对象，该对象就可以使用从IPerson接口继承来的约束规则</span>
<span class="token keyword">const</span> <span class="token literal-property property">stu</span><span class="token operator">:</span> IStudent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"庄周"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">"妖"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">stuID</span><span class="token operator">:</span> <span class="token string">"001"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-type-实现一个类似于-interface-的继承效果-注意-type-本身是没有继承的" tabindex="-1"><a class="header-anchor" href="#使用-type-实现一个类似于-interface-的继承效果-注意-type-本身是没有继承的" aria-hidden="true">#</a> 使用 type 实现一个类似于 interface 的继承效果（注意：type 本身是没有继承的）</h4>
<p><mark>交叉类型</mark></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用type定义一个Person类型约束规则</span>
type Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 使用type定义一个Stu类型约束规则</span>
<span class="token comment">// 使用与运算符 &amp; 来实现两个约束规则的合并（得到一个类似于interface效果的交叉类型）</span>
<span class="token comment">// 也可是使用或运算符 |，此时就不是合并的方式了，有score属性或这有name和age</span>
type Stu <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">score</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">&amp;</span> Person<span class="token punctuation">;</span>
<span class="token comment">// 此时Stu类型规则就是一个交叉类型，包含了Person和Stu内的所有约束规则</span>
<span class="token keyword">const</span> <span class="token literal-property property">testStu</span><span class="token operator">:</span> Stu <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小卤蛋"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
  <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">59</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="ts-枚举类型" tabindex="-1"><a class="header-anchor" href="#ts-枚举类型" aria-hidden="true">#</a> TS 枚举类型</h2>
<div class="hint-container info">
<p class="hint-container-title">枚举(关键字：enum)</p>
<p><mark>数字枚举：枚举数字可以自增长</mark><br>
<mark>字符串枚举：每个枚举值都要有对应的内容，字符串不能自动增长</mark><br>
<mark>枚举可以通过 键找值，也可以通过 值找键！</mark></p>
<ol>
<li>使用枚举可以定义一些带名字的常量。</li>
<li>使用枚举可以清晰地表达意图或创建一组有区别的用例。</li>
<li>TypeScript 支持数字的和基于字符串的枚举。</li>
<li><mark>枚举：如果不设置值，则默认从 0 开始，后续成员依次增长</mark><br>
示例：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 不要加引号，直接写</span>
<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up<span class="token punctuation">,</span>
  Down<span class="token punctuation">,</span>
  Left<span class="token punctuation">,</span>
  Right<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">changeDirection</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">direction</span><span class="token operator">:</span> Direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用时使用点+属性的方式去传参</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 0</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Down<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Left<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>自定义枚举默认值</mark></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 自定义枚举值，如果存在没定义的，则会根据上一个自动累加（自动累加的前提是枚举值是数字）</span>
<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
  Down<span class="token punctuation">,</span>
  Left <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span>
  Right<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">changeDirection</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">direction</span><span class="token operator">:</span> Direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用时使用点+属性的方式去传参</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Down<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 101</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Left<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 200</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 201</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字符串枚举示例" tabindex="-1"><a class="header-anchor" href="#字符串枚举示例" aria-hidden="true">#</a> 字符串枚举示例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 用的字符串枚举，每个属性后面都要设置，否则会报错</span>
<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up <span class="token operator">=</span> <span class="token string">"上"</span><span class="token punctuation">,</span>
  Down <span class="token operator">=</span> <span class="token string">"下"</span><span class="token punctuation">,</span>
  Left <span class="token operator">=</span> <span class="token string">"左"</span><span class="token punctuation">,</span>
  Right <span class="token operator">=</span> <span class="token string">"右"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">changeDirection</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">direction</span><span class="token operator">:</span> Direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用时使用点+属性的方式去传参</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 上</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Down<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 下</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Left<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 左</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 右</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="键找值-值找键" tabindex="-1"><a class="header-anchor" href="#键找值-值找键" aria-hidden="true">#</a> 键找值 &amp;&amp; 值找键</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up <span class="token operator">=</span> <span class="token string">"上"</span><span class="token punctuation">,</span>
  Down <span class="token operator">=</span> <span class="token string">"下"</span><span class="token punctuation">,</span>
  Left <span class="token operator">=</span> <span class="token string">"左"</span><span class="token punctuation">,</span>
  Right <span class="token operator">=</span> <span class="token string">"右"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">)</span>
<span class="token comment">// 输出{"100": "Up","200": "Down","300": "Left","400": "Right","Up": 100,"Down": 200,"Left": 300,"Right": 400}</span>
<span class="token comment">// Direction[100] = Up</span>
<span class="token comment">// Direction['Up'] = 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>描述：枚举与字面量类型+联合类型组合的功能类似，都是用来表示一组明确的可选值列表</strong><br>
<strong>推荐优先使用字面量类型+联合类型组合，这种方式更直观、简洁、高效</strong></p>
</div>
<h2 id="ts-any-类型" tabindex="-1"><a class="header-anchor" href="#ts-any-类型" aria-hidden="true">#</a> TS any 类型</h2>
<p><mark>不推荐使用 any 类型，会导致失去 TS 的保护优势</mark><br>
<mark>当使用 any 类型时，可以对该值进行任意操作，不再有 TS 的提示功能</mark></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">num</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
num <span class="token operator">=</span> <span class="token string">"string type"</span><span class="token punctuation">;</span> <span class="token comment">//这里不会有报错提示,但实际上，num的类型已经被改变了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="以下方式声明的都是-any-类型" tabindex="-1"><a class="header-anchor" href="#以下方式声明的都是-any-类型" aria-hidden="true">#</a> 以下方式声明的都是 any 类型</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 形参a和b没有定义类型，此时会被赋予any类型</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 声明变量没赋值，这个name也没有定义类型，会变成any类型</span>
<span class="token keyword">let</span> name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts-元组类型" tabindex="-1"><a class="header-anchor" href="#ts-元组类型" aria-hidden="true">#</a> TS 元组类型</h2>
<div class="hint-container info">
<p class="hint-container-title">元组（Tuple）元组类型表示一个已知元素数量和类型的数组，各元素的类型不必相同</p>
<p><mark>限制数组的数据长度和固定类型</mark></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 该arr长度只能为2，第一个属性为number类型，第二个为string类型</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> string<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"元组数据"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="ts-类型推论" tabindex="-1"><a class="header-anchor" href="#ts-类型推论" aria-hidden="true">#</a> TS 类型推论</h2>
<div class="hint-container info">
<p class="hint-container-title">TypeScript 里，在有些没有明确指出类型的地方，类型推论会帮助提供类型</p>
<p><mark>发生类型推论的常用场景</mark><br>
<mark>1. 声明变量并初始化的时候</mark><br>
<mark>2. 决定函数返回值的时候</mark><br>
示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">//推断为number</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"str"</span><span class="token punctuation">;</span> <span class="token comment">//推断为string</span>
<span class="token comment">// 这里的add函数没有定义返回值类型，则会自动推断为number类型（简写）</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这里的add函数定义了返回值类型number，则返回的就只能是number（全写）</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="ts-类型断言" tabindex="-1"><a class="header-anchor" href="#ts-类型断言" aria-hidden="true">#</a> TS 类型断言</h2>
<div class="hint-container note">
<p class="hint-container-title">描述</p>
<ol>
<li>有时候你会比 TS 更了解某个值的详细信息。此时可以使用类型断言类指定更具体的类型</li>
<li>类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。</li>
<li>没有运行时的影响，只在编译阶段起作用。TS 会假设你（程序员）已经进行了必须的检查。</li>
<li>当函数获取到的结果类型较为宽泛时，我们又知道具体类型，就可以使用断言强行指定类型</li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">类型断言有两种写法</p>
<ol>
<li>尖括号&lt;&gt;语法</li>
<li>as 语法</li>
</ol>
</div>
<div class="hint-container info">
<p class="hint-container-title">尖括号&lt &gt 语法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义一个any类型（宽泛）</span>
<span class="token keyword">let</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
<span class="token comment">// bar指定了string类型</span>
<span class="token keyword">let</span> bar <span class="token operator">=</span> <span class="token operator">&lt;</span>string<span class="token operator">></span>foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container info">
<p class="hint-container-title">as 语法（推荐优先使用 as 语法）</p>
<p><strong>比如通过 ID 获取 a 标签，返回值类型是 HTMLElement</strong><br>
<strong>实际上，a 标签的类型是 HTMLAnchorElement</strong><br>
<strong>HTMLElement 类型是标签的父级，a,p,div,span....等标签都是继承的该类型</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 此时的返回值aLink的类型是HTMLElement,该类型只包含所有html标签的公共属性或方法，不包含a标签独有的属性和方法
 * 这个HTMLElement太宽泛了(不够具体)
 * 解决方式：使用类型断言指定更加具体的类型
 */</span>
<span class="token comment">// 不使用类型断言的方式（aLink.href会报错）</span>
<span class="token keyword">let</span> aLink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"aLink"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 1.使用 as 关键字实现类型断言
 * 2.关键字 as 后面的类型是一个更具体的类型(HTMLAnchorElement是HTMLElement的子类型)
 * 3.通过类型断言，aLink的类型变得更加具体，此时就可以访问a标签的属性和方法了
 *
*/</span>
<span class="token comment">// 使用类型断言的方式 (as关键字)（此时可以正常调用aLink.href）</span>
<span class="token keyword">let</span> aLink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"aLink"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLAnchorElement<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="interface-vs-type" tabindex="-1"><a class="header-anchor" href="#interface-vs-type" aria-hidden="true">#</a> interface VS type</h2>
<div class="hint-container warning">
<p class="hint-container-title">接口 interface 和 类型别名 type 对比</p>
<ul>
<li>
<p>相同点：都可以给对象指定类型</p>
</li>
<li>
<p>不同点：</p>
<ul>
<li>接口(interface)：只能为对象指定类型</li>
<li>类型别名(type)：不仅可以为对象指定类型，实际上可以为任意类型指定别名</li>
<li>interface 可以继承（extends）另一个 interface；也可以继承对象类型的 type</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// interface的继承示例（Rect继承了Shape的x, y属性）</span>
<span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 继承扩展</span>
<span class="token keyword">interface</span> <span class="token class-name">Rect</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">rect</span><span class="token operator">:</span> Rect <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>type 可以通过 &amp; 的写法来继承 type 或 interface，得到一个交叉类型</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>type Shape <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
type Circle <span class="token operator">=</span> Shape <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token literal-property property">r</span><span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">circle</span><span class="token operator">:</span> Circle <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>interface 支持声明合并，文件下多个同名的 interface，它们的属性会进行合并</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">point</span><span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 注意：声明合并的时候，同名属性的不能进行类型覆盖修改，如果再声明Point接口,x属性的类型还得是number,保持一致</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>type 不支持声明合并，一个作用域内不允许有多个同名 type, type 和 interface 也不可以同名</li>
</ul>
</li>
<li>
<p>一般情况下，能使用 type 的就使用 type</p>
</li>
</ul>
</div>
</div></template>


