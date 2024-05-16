## 两种响应式对比

#### :woman_astronaut: Vue2: Object.defineProperty

```js
// 简单的使用
const initData = {
  value: 1,
};
const data = {};
Object.keys(initData).forEach((key) => {
  Object.defineProperty(data, key, {
    get() {
      console.log("访问：", key);
      return initData[key];
    },
    set(val) {
      console.log("修改", key);
      initData[key] = val;
    },
  });
});
console.log(data.value); // 输出 访问：value
data.value = 2; // 输出 修改：value
```

#### :woman_astronaut: Vue3: Proxy & Reflect
