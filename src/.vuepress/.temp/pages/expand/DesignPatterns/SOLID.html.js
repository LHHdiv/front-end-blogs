export const data = JSON.parse("{\"key\":\"v-2811b600\",\"path\":\"/expand/designPatterns/SOLID.html\",\"title\":\"SOLID设计原则\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SOLID设计原则\",\"order\":0,\"description\":\"S：单⼀职责原则（Single Responsibility Principle） 提示 通过解耦让每一个模块职责更加独立 目标：一个功能模块只做一件事 示例 // create game store class PUBGManager { // 弹窗方法 openDialog(){ // 计算金额 setPrice() } } const game = new PUBGManager() game.openDialog() //弹窗之后计算金额，此时弹窗和计算金额 两个模块耦合\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://www.mashimaro.top/expand/designPatterns/SOLID.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SOLID设计原则\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"S：单⼀职责原则（Single Responsibility Principle） 提示 通过解耦让每一个模块职责更加独立 目标：一个功能模块只做一件事 示例 // create game store class PUBGManager { // 弹窗方法 openDialog(){ // 计算金额 setPrice() } } const game = new PUBGManager() game.openDialog() //弹窗之后计算金额，此时弹窗和计算金额 两个模块耦合\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"LJK\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"SOLID设计原则\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"LJK\\\",\\\"url\\\":\\\"http://www.mashimaro.top/\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"S：单⼀职责原则（Single Responsibility Principle）\",\"slug\":\"s-单一职责原则-single-responsibility-principle\",\"link\":\"#s-单一职责原则-single-responsibility-principle\",\"children\":[]},{\"level\":3,\"title\":\"O：开闭原则（Open Closed Principie）\",\"slug\":\"o-开闭原则-open-closed-principie\",\"link\":\"#o-开闭原则-open-closed-principie\",\"children\":[]},{\"level\":3,\"title\":\"L：⾥⽒替换原则（Liskov Substitution Principle）\",\"slug\":\"l-里氏替换原则-liskov-substitution-principle\",\"link\":\"#l-里氏替换原则-liskov-substitution-principle\",\"children\":[]},{\"level\":3,\"title\":\"I：接⼝隔离原则（Interface-segregation Principle）\",\"slug\":\"i-接口隔离原则-interface-segregation-principle\",\"link\":\"#i-接口隔离原则-interface-segregation-principle\",\"children\":[]},{\"level\":3,\"title\":\"D：依赖倒置原则（Dependency Inversion Principle）\",\"slug\":\"d-依赖倒置原则-dependency-inversion-principle\",\"link\":\"#d-依赖倒置原则-dependency-inversion-principle\",\"children\":[]}],\"readingTime\":{\"minutes\":0.44,\"words\":133},\"filePathRelative\":\"expand/designPatterns/SOLID.md\",\"excerpt\":\"<h3> S：单⼀职责原则（Single Responsibility Principle）</h3>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">提示</p>\\n<ul>\\n<li>通过解耦让每一个模块职责更加独立</li>\\n<li>目标：一个功能模块只做一件事</li>\\n</ul>\\n</div>\\n<div class=\\\"hint-container note\\\">\\n<p class=\\\"hint-container-title\\\">示例</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-ext=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token comment\\\">// create game store</span>\\n<span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">PUBGManager</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 弹窗方法</span>\\n  <span class=\\\"token function\\\">openDialog</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token comment\\\">// 计算金额</span>\\n    <span class=\\\"token function\\\">setPrice</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token keyword\\\">const</span> game <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">PUBGManager</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span>\\ngame<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">openDialog</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token comment\\\">//弹窗之后计算金额，此时弹窗和计算金额 两个模块耦合</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></div>\",\"autoDesc\":true}")

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
