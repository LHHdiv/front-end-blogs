---
title: Vue3生命周期
order: 2
index: true
icon: laptop-code
category:
  - Vue
---

## vue2 vs vue3 对比

| vue2                  | vue3                                                                             |
| --------------------- | -------------------------------------------------------------------------------- |
| beforeCreate、created | setup,在 beforeCreate 和 created 前，因此一般在组合式 API 中使用它做一些前置处理 |
| beforeMount           | onBeforeMount                                                                    |
| mounted               | onMounted                                                                        |
| beforeUpdate          | onBeforeUpdate                                                                   |
| updated               | onUpdated                                                                        |
| beforeUnMount         | onBeforeUnMount                                                                  |
| unmounted             | onUnmounted                                                                      |
