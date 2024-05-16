<template><div><nav class="table-of-contents"><ul><li><router-link to="#原型-原型链">原型&amp;原型链</router-link></li><li><router-link to="#作用域">作用域</router-link></li><li><router-link to="#执行上下文">执行上下文</router-link></li><li><router-link to="#this">This</router-link></li><li><router-link to="#闭包">闭包</router-link></li></ul></nav>
<h2 id="原型-原型链" tabindex="-1"><a class="header-anchor" href="#原型-原型链" aria-hidden="true">#</a> 原型&amp;原型链</h2>
<p><mark>每个函数都有一个 prototype 属性</mark><br>
<mark>null 为顶点，没有__proto__属性</mark></p>
<div class="hint-container tip">
<p class="hint-container-title">什么是原型</p>
<ol>
<li>任何一个 JS 对象中创建时会关联的一个对象，null 除外（null 为顶点）</li>
<li>任何根据原型的构造函数创建出来的对象，都会继承原型上的属性</li>
</ol>
</div>
<h4 id="示例-创建一个构造函数" tabindex="-1"><a class="header-anchor" href="#示例-创建一个构造函数" aria-hidden="true">#</a> 示例：创建一个构造函数</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 构造函数PersonFn</span>
<span class="token keyword">function</span> <span class="token function">PersonFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 实例化一个对象person;</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PersonFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"小王"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"my name is"</span><span class="token punctuation">,</span> person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出 my name is 小王</span>
<span class="token comment">// 构造函数原型上的的属性，可以被继承</span>
<span class="token class-name">PersonFn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"my age is"</span><span class="token punctuation">,</span> person<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出 my age is 18，这个age属性继承于PersonFn构造函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">PersonFn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">构造函数、实例对象、原型之间的关系</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token number">1.</span> <span class="token keyword">function</span> <span class="token function">PersonFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>，PersonFn 为构造函数
<span class="token number">2.</span> 通过 <span class="token keyword">new</span> 方法，实例化出一个 person 对象，此时 persons实例的原型是 <span class="token class-name">PersonFn</span><span class="token punctuation">.</span>prototype
<span class="token number">3.</span> 实例出的 person 对象需要通过__proto__方法去访问原型 <span class="token class-name">PersonFn</span><span class="token punctuation">.</span>prototype
<span class="token number">4.</span> person<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">PersonFn</span><span class="token punctuation">.</span>prototype <span class="token comment">// 输出 true</span>
<span class="token comment">// PersonFn.prototype 如何指向构造函数 PersonFn？(通过 constructor)</span>
<span class="token number">5.</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>PersonFn <span class="token operator">===</span> <span class="token class-name">PersonFn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span> <span class="token comment">// 输出 true</span>
<span class="token comment">// Object.getPrototypeOf(传入一个实例对象)，返回该实例对象的原型</span>
<span class="token number">6.</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">PersonFn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>  <span class="token comment">// 输出true</span>
<span class="token comment">// 那么该实例的__proto__也就等于Object.getPrototypeOf(实例对象)</span>
<span class="token number">7.</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token operator">===</span> person<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span>  <span class="token comment">// 输出true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">什么是原型链</p>
<p><strong>使用__proto__去查找原型上的属性，自下向上的顺序，直到查到 null 为止</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//定义一个Car构造函数</span>
<span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 实例化aodi对象</span>
<span class="token keyword">let</span> aodi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
aodi<span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token string">"50万"</span><span class="token punctuation">;</span>
<span class="token class-name">Car</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"奥迪"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aodi<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 此时实例对象aodi查找属性的顺序是</span>
<span class="token comment">// 1. 查自身aodi有没有name属性</span>
<span class="token comment">// 2. 没有则通过aodi.__proto__向上查,查到实例的原型Car.prototype，发现有name属性，则就返回对应的值 "奥迪"</span>
<span class="token comment">// 3. 假入Car.prototype也没找到，此时就会继续通过aodi.__proto__.__proto__继续向上查找，aodi.__proto__.__proto__相当于Car.prototype.__proto__，此时指向的是Object.prototype</span>
<span class="token comment">// 4. 如果依然没查到，继续向上查找，aodi.__proto__.__proto__.__proto__（此时返回的是null，已经是顶点了）</span>
<span class="token comment">// 5. aodi.__proto__.__proto__.__proto__ === Car.prototype.__proto__.__proto__ === Object.prototype.__proto__ === null（这三种链路是相等的，这就是原型链的查找流程）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container info">
<p class="hint-container-title">总结</p>
<ol>
<li>实例通过__proto__属性,自下向上去查找，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，它来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.__proto__ 时，可以理解为返回了 Object.getPrototypeOf(obj)</li>
<li>Object.prototype 生成实例原型</li>
<li>原型链的顶点是 null，除了 null 之外，函数都有 prototype 属性和 __proto__方法</li>
<li>Object.prototype 没有原型，因为 Object.prototype.__proto__ === null</li>
</ol>
</div>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<p><mark>1. 作用域是指程序源代码中定义变量的区域</mark></p>
<div class="hint-container info">
<p class="hint-container-title">词法作用域（又叫静态作用域）</p>
<p><mark>1. JS 是词法作用域</mark><br>
<mark>2. 词法作用域：作用域在定义时就是已经确定的</mark></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// value此时的作用域是全局作用域</span>
<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出 1</span>
<span class="token comment">// bar函数先执行，然后bar内部的foo函数执行，此时foo打印了value，foo函数自身没有，则会向上去找，此时foo的上级作用域是全局，则输出value=1</span>
<span class="token comment">// 因为js是静态的作用域，所有foo执行的时候是向上查找，而不是在bar函数的作用域内查找</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container info">
<p class="hint-container-title">动态作用域</p>
<p><mark>1. 动态作用域：作用域是在调用时决定的</mark><br>
<mark>2. bash 就是动态作用域</mark><br>
<mark>3. 以下代码可以做验证，创建 scope.bash 文件，用命令行执行 bash ./scope.bash</mark></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 定义一个变量value = 1</span>
<span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># 定义foo函数，并打印value的值</span>
<span class="token keyword">function</span> <span class="token function-name function">foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 定义bar函数，函数内部重新定义value=2，并调用foo</span>
<span class="token keyword">function</span> <span class="token function-name function">bar</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
    foo<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
bar<span class="token punctuation">;</span> <span class="token comment">#输出2</span>
<span class="token comment"># foo函数内找不到value的时候，会在调用foo函数的作用域内查找，这个时候查的就是bar函数内的数据，返回的就是2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="执行上下文" tabindex="-1"><a class="header-anchor" href="#执行上下文" aria-hidden="true">#</a> 执行上下文</h2>
<div class="hint-container info">
<p class="hint-container-title">执行上下文</p>
<ol>
<li>javascript 引擎并不是一行一行的分析和执行代码，而是一段一段的分析执行，当执行一段代码时，会进行一个准备工作</li>
<li>javascript 引擎遇到可执行代码的时候才会进入准备工作</li>
<li>可执行代码类型有三种：全局代码、函数代码、eval 代码</li>
<li>这个准备工作，在 js 中就叫<font color="red">可执行上下文</font></li>
</ol>
</div>
<div class="hint-container info">
<p class="hint-container-title">执行上下文栈（压入栈、先进后出）</p>
<ol>
<li>JavaScript 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文</li>
<li>当 JavaScript 开始要解释执行代码的时候，先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文 globalContext（处于栈底的位置）</li>
<li>只有当整个应用程序结束的时候，整个执行上下文栈才会被清空</li>
<li>执行上下文栈最底部永远有个 globalContext</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 示例</span>
<span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"fn3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 模拟进栈出栈（可以用数组的push(添加到数组尾部,ECSstack.push()入栈),pop(删除数组的最后一项,ECSstack.pop()出栈)）</span>
<span class="token comment">// 改代码的执行上下文流程如下，以ECSstack数组作为栈的存储状态，let ECSstack = []</span>
<span class="token comment">// 1. 开始执行时，此时的ECSstack栈有一个全局上下文 ECSstack = [GlobalContext]</span>
<span class="token comment">// 2. 调用fn1函数，此时会创建一个fn1的执行上下文放入栈内,并且在全局上下文的上面 ECSstack = [GlobalContext,fn1Context]</span>
<span class="token comment">// 3. 调用fn2函数，此时会创建一个fn2的执行上下文放入栈内,并且在fn1上下文的上面 ECSstack = [GlobalContext,fn1Context,fn2Context]</span>
<span class="token comment">// 3. 调用fn3函数，此时会创建一个fn3的执行上下文放入栈内,并且在fn2上下文的上面 ECSstack = [GlobalContext,fn1Context,fn2Context,fn3Context]</span>
<span class="token comment">// 4. 输出fn2之后，整个js代码执行完，此时ECSstack开始出栈，按照从上往下（或者先进后出）的方式，依次释放fn3Context,fn2Context,fn1Context,GlobalContext,此时该代码块全部执行完毕</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container info">
<p class="hint-container-title">变量对象</p>
<p><mark>每个执行上下文，都有三个重要属性</mark></p>
<ol>
<li>变量对象（Variable Object）VO</li>
</ol>
<ul>
<li>变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明</li>
</ul>
<ol start="2">
<li>作用域链（Scope Chain）</li>
<li>this</li>
</ol>
</div>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> This</h2>
<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2>
<div class="hint-container info">
<p class="hint-container-title">定义</p>
<ol>
<li>闭包是指那些能够访问自由变量的函数</li>
<li>闭包 = 函数 + 函数外可访问到的变量</li>
</ol>
</div>
</div></template>


