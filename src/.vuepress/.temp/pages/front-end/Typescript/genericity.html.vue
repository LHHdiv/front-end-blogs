<template><div><h2 id="泛型概念" tabindex="-1"><a class="header-anchor" href="#泛型概念" aria-hidden="true">#</a> 泛型概念</h2>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<ul>
<li>泛型是可以在保证类型安全的前提下，让函数等与多种类型一起工作，从而实现复用</li>
<li>常用于函数、接口、class 中</li>
</ul>
<p>示例：定义一个 getValue 方法，传入一个值，返回这个值</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 1. getValue函数此时只能传number类型的参数,失去了通用性
 * 2. 但是如果把number改为any类型，返回值也变成了any，失去了TS的安全性
 */</span>
<span class="token keyword">function</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">getValue</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>使用泛型解决上面 getValue 的问题</mark></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 语法：在函数名和参数的括号之间写一个&lt;T></span>

<span class="token comment"># 在声明的时候，变量T的类型是不知道的</span>
<span class="token comment"># {&lt;T>}：声明泛型(通常使用T)</span>
<span class="token comment"># {val: T}  使用泛型</span>
<span class="token comment"># 调用getValue 函数时，传入泛型指定的具体类型</span>
<span class="token keyword">function</span> getValue<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">(</span>val: T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console.log<span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token builtin class-name">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
getValue<span class="token operator">&lt;</span>number<span class="token operator">></span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment"># 输出number类型的123</span>
getValue<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span> <span class="token comment"># 输出string类型的abc</span>
getValue<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment"># 输出boolean类型的false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="泛型函数-简化函数" tabindex="-1"><a class="header-anchor" href="#泛型函数-简化函数" aria-hidden="true">#</a> 泛型函数 (简化函数)</h2>
<div class="hint-container info">
<p class="hint-container-title">调用时的类型，是可以省略的，因为 TS 会根据入参自动推断</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">function</span> getValue<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">(</span>val: T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console.log<span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
getValue<span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>   <span class="token comment">#输出number类型的123</span>
getValue<span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span>   <span class="token comment">#输出string类型的abc</span>
getValue<span class="token punctuation">(</span>false<span class="token punctuation">)</span>   <span class="token comment">#输出boolean类型的false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="泛型-类型约束" tabindex="-1"><a class="header-anchor" href="#泛型-类型约束" aria-hidden="true">#</a> 泛型--类型约束</h2>
<ul>
<li>默认情况下，泛型 T，代表多个类型的集合，会导致在 getValue 函数内部无法访问 val 的任何属性</li>
<li>因为 T 是动态改变的</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">基本类型约束</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token keyword">function</span> getValue<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">(</span>val: T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># 虽然调用的时候传了string类型，但是这里依然不能使用字符串类型的方法</span>
  <span class="token comment"># 因为此时的泛型T是一个未知的类型，无法保证一定会存在length方法,比如number类型就没有length</span>
  console.log<span class="token punctuation">(</span>val.length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
getValue<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container info">
<p class="hint-container-title">复杂类型约束（指定更加具体的类型）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># val:T[] --> 约束入参val的值必须是T类型的数组</span>
<span class="token keyword">function</span> getCardList<span class="token operator">&lt;</span>T<span class="token operator">></span><span class="token punctuation">(</span>val: T<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># 这里的val.length不会报错，因为val: T[]已经知道val是个数组类型了</span>
  console.log<span class="token punctuation">(</span>val.length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin class-name">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
getCardList<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">#此时的返回值是number类型的数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="添加约束" tabindex="-1"><a class="header-anchor" href="#添加约束" aria-hidden="true">#</a> 添加约束</h2>
<p><mark>给泛型加父类做约束</mark></p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义接口(接口可以定义各种基础约束)</span>
<span class="token keyword">interface</span> <span class="token class-name">ILength</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">length</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 添加约束(T extends ILength：继承，意思是T是接口ILength的子类)</span>
<span class="token comment">// 该方法的解释：传入的val的类型必须满足接口ILength的需求，必须要有一个number类型的length属性</span>
<span class="token keyword">function</span> getId<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">ILength</span><span class="token operator">></span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
getId<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">"10"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
getId<span class="token operator">&lt;</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
getId<span class="token operator">&lt;</span><span class="token punctuation">(</span>string<span class="token operator">|</span>number<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'abc'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="泛型-多个类型变量" tabindex="-1"><a class="header-anchor" href="#泛型-多个类型变量" aria-hidden="true">#</a> 泛型--多个类型变量</h2>
<div class="hint-container info">
<p class="hint-container-title">多个类型变量</p>
<ul>
<li>举个例子：定义一个函数，传入一个对象，再传入一个字符串属性名，返回属性值</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Error 示例（此时的obj对象,key,obj[key]均为any类型）</span>
<span class="token keyword">function</span> <span class="token function">getParams</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 使用keyof语法
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>O<span class="token punctuation">}</span></span> <span class="token parameter">第一个参数约束的类型，这里代表是个对象</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>K<span class="token punctuation">}</span></span> <span class="token parameter">第二个参数约束的类型，这里代表一个单独的键名</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>K <span class="token keyword">extends</span> <span class="token keyword">keyof</span> O<span class="token punctuation">}</span></span>,因为K无法确保key在O中存在，使用keyof做约束，必须是O中存在的key，才可传入
 */</span>
<span class="token keyword">function</span> getProps<span class="token operator">&lt;</span><span class="token constant">O</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">O</span><span class="token operator">></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">O</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>keyof 常规用法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义一个Friend类型</span>
type Friend <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">hobby</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 使用keyof，需要传递当前Friend内的某个键名，此时的key是个属性</span>
<span class="token keyword">let</span> <span class="token literal-property property">key</span><span class="token operator">:</span> keyof Friend <span class="token operator">=</span> <span class="token string">"name"</span><span class="token punctuation">;</span>
<span class="token comment">// 不使用keyof，需要给Friend的每个键赋值，此时的key1是个对象</span>
<span class="token keyword">let</span> <span class="token literal-property property">key1</span><span class="token operator">:</span> Friend <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"keyof测试"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">"打球"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出 keyof测试</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出对象 {"name": "1","age": 18,"hobby": "打球"}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ts-定义数组对象" tabindex="-1"><a class="header-anchor" href="#ts-定义数组对象" aria-hidden="true">#</a> TS 定义数组对象</h4>
<ol>
<li>声明指定 key 的数组对象</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> Student<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"hello"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"world"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"🚀 ~ file: main.ts:242 ~ obj:"</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- 2. 声明任意类型的对象数组

```js
let objects: { [key: string]: any }[];
const obj: Student[] = [
  { id: 1, name: "hello" },
  { id: 2, name: "world" },
];
console.log("🚀 ~ file: main.ts:242 ~ obj:", obj);
``` -->
</div>
<h2 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口" aria-hidden="true">#</a> 泛型接口</h2>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Student&lt;T>, T就是传入的时候定义的泛型，该接口内可以使用这个泛型
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span> <span class="token parameter">name使用了泛型T，则name在传入的时候可以指定类型</span>
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Student</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用，这里传入的泛型T是string类型</span>
<span class="token keyword">const</span> <span class="token literal-property property">ob1</span><span class="token operator">:</span> Student<span class="token operator">&lt;</span>string<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"hello"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 使用，这里传入的泛型T是number类型</span>
<span class="token keyword">const</span> <span class="token literal-property property">obj2</span><span class="token operator">:</span> Student<span class="token operator">&lt;</span>number<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ob1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出 {"id": 1,"name": "hello"}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出 {"id": 1,"name": 11}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div></template>


