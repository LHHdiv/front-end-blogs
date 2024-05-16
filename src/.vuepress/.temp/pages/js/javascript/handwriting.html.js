export const data = JSON.parse("{\"key\":\"v-246e9d41\",\"path\":\"/js/javascript/handwriting.html\",\"title\":\"手写js方法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"手写js方法\",\"index\":true,\"icon\":\"laptop-code\",\"category\":[\"Javascript\"],\"description\":\"手写 call 方法（myCall） 回顾 call() 用法 1. 改变 this 指向，接收多个参数，其中第一个参数是代表 this 的指向，剩余参数都是函数的参数 2. 如下示例：test.call(obj)，此时 test 的调用方是 obj 对象，所以 this 指向 obj 3. 非严格模式下，第一个参数为 null/undefined 时，this 指向 window let obj = { value: \\\"call用法\\\", }; // 可以用形参的方式接收参数，也可以用arguments接收参数 // function test() { // console.log(this.value, ...arguments); // console输出：call用法 测试传递参数1 传递参数2 // } function test(arg1, arg2) { console.log(this.value, arg1, arg2); // console输出：call用法 测试传递参数1 传递参数2 } test.call(obj, \\\"测试传递参数1\\\", \\\"传递参数2\\\"); 上述示例等同于如下写法,把 test 方法指向到对象 obj 内部，使用 obj.test()去执行 let obj = { value: \\\"call用法\\\", test: function () { console.log(this.value); }, }; obj.test();\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://www.mashimaro.top/js/javascript/handwriting.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"手写js方法\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"手写 call 方法（myCall） 回顾 call() 用法 1. 改变 this 指向，接收多个参数，其中第一个参数是代表 this 的指向，剩余参数都是函数的参数 2. 如下示例：test.call(obj)，此时 test 的调用方是 obj 对象，所以 this 指向 obj 3. 非严格模式下，第一个参数为 null/undefined 时，this 指向 window let obj = { value: \\\"call用法\\\", }; // 可以用形参的方式接收参数，也可以用arguments接收参数 // function test() { // console.log(this.value, ...arguments); // console输出：call用法 测试传递参数1 传递参数2 // } function test(arg1, arg2) { console.log(this.value, arg1, arg2); // console输出：call用法 测试传递参数1 传递参数2 } test.call(obj, \\\"测试传递参数1\\\", \\\"传递参数2\\\"); 上述示例等同于如下写法,把 test 方法指向到对象 obj 内部，使用 obj.test()去执行 let obj = { value: \\\"call用法\\\", test: function () { console.log(this.value); }, }; obj.test();\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"LJK\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"手写js方法\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"LJK\\\",\\\"url\\\":\\\"http://www.mashimaro.top/\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"手写 call 方法（myCall）\",\"slug\":\"手写-call-方法-mycall\",\"link\":\"#手写-call-方法-mycall\",\"children\":[]},{\"level\":2,\"title\":\"手写 myApply\",\"slug\":\"手写-myapply\",\"link\":\"#手写-myapply\",\"children\":[]},{\"level\":2,\"title\":\"手写 bind\",\"slug\":\"手写-bind\",\"link\":\"#手写-bind\",\"children\":[]},{\"level\":2,\"title\":\"手写 new\",\"slug\":\"手写-new\",\"link\":\"#手写-new\",\"children\":[]}],\"readingTime\":{\"minutes\":6.5,\"words\":1949},\"filePathRelative\":\"js/javascript/handwriting.md\",\"excerpt\":\"<h2> 手写 call 方法（myCall）</h2>\\n<div class=\\\"hint-container info\\\">\\n<p class=\\\"hint-container-title\\\">回顾 call() 用法</p>\\n<p><strong>1. 改变 this 指向，接收多个参数，其中第一个参数是代表 this 的指向，剩余参数都是函数的参数</strong><br>\\n<strong>2. 如下示例：test.call(obj)，此时 test 的调用方是 obj 对象，所以 this 指向 obj</strong><br>\\n<strong>3. 非严格模式下，第一个参数为 null/undefined 时，this 指向 window</strong></p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">let</span> obj <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token literal-property property\\\">value</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"call用法\\\"</span><span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">// 可以用形参的方式接收参数，也可以用arguments接收参数</span>\\n<span class=\\\"token comment\\\">// function test() {</span>\\n<span class=\\\"token comment\\\">//   console.log(this.value, ...arguments);</span>\\n<span class=\\\"token comment\\\">//   console输出：call用法 测试传递参数1 传递参数2</span>\\n<span class=\\\"token comment\\\">// }</span>\\n<span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">test</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">arg1<span class=\\\"token punctuation\\\">,</span> arg2</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>value<span class=\\\"token punctuation\\\">,</span> arg1<span class=\\\"token punctuation\\\">,</span> arg2<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token comment\\\">// console输出：call用法 测试传递参数1 传递参数2</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token function\\\">test</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">call</span><span class=\\\"token punctuation\\\">(</span>obj<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"测试传递参数1\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"传递参数2\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div><p><strong>上述示例等同于如下写法,把 test 方法指向到对象 obj 内部，使用 obj.test()去执行</strong></p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">let</span> obj <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token literal-property property\\\">value</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"call用法\\\"</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token function-variable function\\\">test</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token keyword\\\">function</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    console<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>value<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\nobj<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">test</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></div>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
