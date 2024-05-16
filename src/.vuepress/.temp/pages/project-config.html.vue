<template><div><h2 id="markdown-文件的-yaml-配置相关" tabindex="-1"><a class="header-anchor" href="#markdown-文件的-yaml-配置相关" aria-hidden="true">#</a> markdown 文件的 YAML 配置相关</h2>
<p><strong>注意：如果单个 md 文件不使用 YAML 语法，则需要使用# + title 的方式开始，这样可以识别#后的内容作为侧边栏内容</strong></p>
<table>
<thead>
<tr>
<th>字段</th>
<th>type</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>string</td>
<td>当前 md 文件的名称，会显示在侧边栏</td>
</tr>
<tr>
<td>index</td>
<td>boolean</td>
<td>控制当前 md 文件是否会显示在侧边栏</td>
</tr>
<tr>
<td>icon</td>
<td>string</td>
<td>当前 md 文件名称的图标，提前引入图表库在线资源</td>
</tr>
<tr>
<td>category</td>
<td>string</td>
<td>当前 md 文件分类</td>
</tr>
<tr>
<td>tag</td>
<td>string</td>
<td>当前 md 文件的标签</td>
</tr>
<tr>
<td>order</td>
<td>number</td>
<td>文章顺序，数字最小级别越高</td>
</tr>
</tbody>
</table>
<h2 id="容器语法" tabindex="-1"><a class="header-anchor" href="#容器语法" aria-hidden="true">#</a> 容器语法</h2>
<table>
<thead>
<tr>
<th>type</th>
<th>值</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>信息</td>
<td>info</td>
<td>:::info</td>
</tr>
<tr>
<td>笔记</td>
<td>note</td>
<td>:::note</td>
</tr>
<tr>
<td>提示</td>
<td>tip</td>
<td>:::tip</td>
</tr>
<tr>
<td>危险</td>
<td>danger</td>
<td>:::danger</td>
</tr>
<tr>
<td>细节</td>
<td>details</td>
<td>:::details</td>
</tr>
</tbody>
</table>
<h2 id="文本块语法" tabindex="-1"><a class="header-anchor" href="#文本块语法" aria-hidden="true">#</a> 文本块语法</h2>
<div class="hint-container info">
<p class="hint-container-title">一个没有绑定 id 的选项卡列表示例:</p>
<Tabs id="168" :data='[{"id":"apple"},{"id":"banana"},{"id":"orange"}]'>
<template #title0="{ value, isActive }">apple</template>
<template #title1="{ value, isActive }">banana</template>
<template #title2="{ value, isActive }">orange</template>
<template #tab0="{ value, isActive }">
<p>Apple</p>
</template>
<template #tab1="{ value, isActive }">
<p>Banana</p>
</template>
<template #tab2="{ value, isActive }">
<p>Orange</p>
</template>
</Tabs>
</div>
<p>语法：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>::: tabs
@tab apple
Apple
@tab banana
Banana
@tab orange
Orange
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">在 tabs 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件:</p>
<Tabs id="191" :data='[{"id":"apple"},{"id":"banana"},{"id":"orange"}]' tab-id="fruit">
<template #title0="{ value, isActive }">apple</template>
<template #title1="{ value, isActive }">banana</template>
<template #title2="{ value, isActive }">orange</template>
<template #tab0="{ value, isActive }">
<p>Apple</p>
</template>
<template #tab1="{ value, isActive }">
<p>Banana</p>
</template>
<template #tab2="{ value, isActive }">
<p>Orange</p>
</template>
</Tabs>
</div>
<p>语法：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>::: tabs<span class="token comment">#fruit</span>
@tab apple
Apple
@tab banana
Banana
@tab orange
Orange
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何禁用【在-github-上编辑此页的文案】" tabindex="-1"><a class="header-anchor" href="#如何禁用【在-github-上编辑此页的文案】" aria-hidden="true">#</a> 💬如何禁用【在 GitHub 上编辑此页的文案】</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>单个文件禁用： 在当前 md 文件中的 YAML 语法中配置 editLink: false<br>
全局禁用：theme.ts 配置文件中，设置 editLink: false</p>
</div>
<h2 id="交互演示语法" tabindex="-1"><a class="header-anchor" href="#交互演示语法" aria-hidden="true">#</a> 交互演示语法</h2>
<div class="hint-container tip">
<p class="hint-container-title">要使用交互演示，你应该使用一个名为 playground#preset 的容器（有 3 个指令）。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token number">1</span>. @file fileName 紧跟文件的代码块
<span class="token number">2</span>. @import importMapFileName 紧跟一个自定义“导入映射”的 json 代码块
<span class="token number">3</span>. @setting 紧跟一个自定义设置的 json 代码块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<Playground key="725de06a" title="%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AF%BC%E5%85%A5%E7%9A%84%20Vue%20%E6%A1%88%E4%BE%8B" link="https%3A%2F%2Fsfc.vuejs.org%2F%23eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcbmNvbnN0IG1zZyA9IHJlZihcIkhlbGxvIFdvcmxkIVwiKTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU%2BXG4gIDxoMT57eyBtc2cgfX08L2gxPlxuICA8aW5wdXQgdi1tb2RlbD1cIm1zZ1wiIC8%2BXG4gIDwhLS0gPENvbXAgLz4gLS0%2BXG4gIDxkaXYgY2xhc3M9XCJyYWRpdXNcIj48L2Rpdj5cbjwvdGVtcGxhdGU%2BXG48c3R5bGU%2BXG4ucmFkaXVzIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG48L3N0eWxlPlxuIiwiQ29tcC52dWUiOiI8dGVtcGxhdGU%2BXG4gIDxkaXY%2BQ29tcDwvZGl2PlxuPC90ZW1wbGF0ZT5cbmBgYCAtLT5cblxuQGltcG9ydFxuXG5gYGBqc29uXG57XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJ2dWVcIjogXCJodHRwczovL3NmYy52dWVqcy5vcmcvdnVlLnJ1bnRpbWUuZXNtLWJyb3dzZXIuanNcIlxuICB9XG59XG4ifQ%3D%3D">
</Playground>
</div></template>


