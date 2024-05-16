<template><div><h2 id="vue2-vs-vue3-对比" tabindex="-1"><a class="header-anchor" href="#vue2-vs-vue3-对比" aria-hidden="true">#</a> vue2 vs vue3 对比</h2>
<table>
<thead>
<tr>
<th>vue2</th>
<th>vue3</th>
</tr>
</thead>
<tbody>
<tr>
<td>beforeCreate、created</td>
<td>setup,在 beforeCreate 和 created 前，因此一般在组合式 API 中使用它做一些前置处理</td>
</tr>
<tr>
<td>beforeMount</td>
<td>onBeforeMount</td>
</tr>
<tr>
<td>mounted</td>
<td>onMounted</td>
</tr>
<tr>
<td>beforeUpdate</td>
<td>onBeforeUpdate</td>
</tr>
<tr>
<td>updated</td>
<td>onUpdated</td>
</tr>
<tr>
<td>beforeUnMount</td>
<td>onBeforeUnMount</td>
</tr>
<tr>
<td>unmounted</td>
<td>onUnmounted</td>
</tr>
</tbody>
</table>
</div></template>


