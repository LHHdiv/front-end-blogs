---
title: 手写js方法
index: true
icon: laptop-code
category:
  - Javascript
---

## 手写 call 方法（myCall）

:::info 回顾 call() 用法
**1. 改变 this 指向，接收多个参数，其中第一个参数是代表 this 的指向，剩余参数都是函数的参数**
**2. 如下示例：test.call(obj)，此时 test 的调用方是 obj 对象，所以 this 指向 obj**
**3. 非严格模式下，第一个参数为 null/undefined 时，this 指向 window**

```js
let obj = {
  value: "call用法",
};
// 可以用形参的方式接收参数，也可以用arguments接收参数
// function test() {
//   console.log(this.value, ...arguments);
//   console输出：call用法 测试传递参数1 传递参数2
// }
function test(arg1, arg2) {
  console.log(this.value, arg1, arg2);
  // console输出：call用法 测试传递参数1 传递参数2
}
test.call(obj, "测试传递参数1", "传递参数2");
```

**上述示例等同于如下写法,把 test 方法指向到对象 obj 内部，使用 obj.test()去执行**

```js
let obj = {
  value: "call用法",
  test: function () {
    console.log(this.value);
  },
};
obj.test();
```

:::

:::info 实现 myCall 方法

**步骤一：将函数设为对象的属性**

```js
Function.prototype.myCall = function (context) {
  // 兼容第一个参数为null的情况，把this指向window
  let context = context || window;
  // 获取到调用myCall的函数，可以通过this获取
  context.fn = this;
  // 调用函数
  context.fn();
  // 执行完毕后，删除对象中这是的这个函数
  delete context.fn;
};
// 简易版，无参数的myCall写完，测试一下
let foo = {
  value: "myCall test",
};
function bar() {
  console.log(this.value);
}
bar.myCall(foo);
// 此时bar函数的this指向foo对象，输出的结果：myCall test
```

**步骤二：传入参数**

```js
Function.prototype.myCall = function (context) {
  let context = context || window;
  context.fn = this;
  // 截取掉arguments第一个参数得到新的arg数组，因为第一个是指定this的
  let arg = [...arguments].slice(1);
  // 使用解构，把arg的参数传递给fn函数调用
  context.fn(...arg);
  delete context.fn;
};
// 测试传递参数的myCall
let foo = {
  value: "myCall传递参数",
};
function bar(name, age) {
  console.log(this.value, name, age);
}
bar.myCall(foo, "狂徒张三", 18);
// 输出：myCall传递参数，狂徒张三，18
```

**步骤三：处理带 return 返回值的函数**

```js
Function.prototype.myCall = function (cxt) {
  let context = cxt || window;
  context.fn = this;
  let arg = [...arguments].slice(1);
  // 接收fn调用后的返回值
  let result = context.fn(...arg);
  delete context.fn;
  // 把返回的结果return出去
  return result;
};
// 测试带返回值的函数
let foo = {
  value: "测试带返回值的函数",
};
function bar(name) {
  return {
    value: this.value,
    name,
  };
}
bar.myCall(foo, "法外狂徒");
// 返回值是个对象对象：{value: '测试带返回值的函数', name: '法外狂徒'}

// ===========测试下第一个入参为null的情况==========
var str = "测试参数为null的返回值";
function bar2() {
  console.log(this.str);
}
bar2.myCall(null);
// 此时的this指向是window，输出结果：测试参数为null的返回值
```

==最终实现 myCall 的完整代码==

```js
Function.prototype.myCall = function (context, ...args) {
  // 判断是否是undefined和null
  if (typeof context === "undefined" || context === null) {
    context = window;
  }
  let fnSymbol = Symbol();
  context[fnSymbol] = this;
  let result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};
```

:::

## 手写 myApply

:::info 回顾 apply() 用法(和 call 类似，接收两个参数，第二个参数是个数组)

```js
let foo = {
  value: "apply用法",
};
function bar() {
  console.log(this.value, ...arguments);
}
bar.apply(foo, ["法外狂徒", 18]);
// 输出：apply用法 法外狂徒 18
```

:::

:::info 实现 myApply

```js
Function.prototype.myApply = function (context, args = []) {
  if (typeof context === "undefined" || context === null) {
    context = window;
  }
  let fnSymbol = Symbol();
  context[fnSymbol] = this;
  let result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};
```

:::

## 手写 bind

**1. bind()方法会创建一个函数**
**2. 当新函数被调用时，bind()的第一个参数将作为它运行时的 this，之后的一系列参数将会在传递的实参前传入作为它的参数**
==bind 特点 1：返回一个函数==
==bind 特点 2：可以传入参数==
==bind 特点 3：bind 的返回函数可以作为构造函数使用，此时 bind 指定的 this 失效，但是传入的参数可以用

:::info 原生 bind() 的用法

```js
let foo = {
  value: "bind用法",
};
function bar() {
  console.log(this.value);
}
let res = bar.bind(foo);
console.log(res); //输出的是bar函数，this指向foo
console.log(res()); //输出的结果是：1，this指向foo
```

:::

:::info 实现 myBind() 简易版（不考虑构造函数的情况）

```js
Function.prototype.myBind = function (context) {
  // 判断是否是undefined 和 null
  if (typeof context === "undefined" || context === null) {
    context = window;
  }
  self = this;
  return function (...args) {
    return self.apply(context, args);
  };
};
```

:::

:::info 实现 myBind() 完整版

```js
// 可以利用call和apply来实现
Function.prototype.myBind = function (context) {
  // 先判断调用myBind方法的是个函数
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  // 这里存的是调用myBind方法的函数的this
  var self = this;
  // 存一份首次调用myBind的参数，要除去第一个
  var args = Array.prototype.slice.call(arguments, 1);
  // 定义一个空函数，这里是用来中转构造函数原型prototype的
  var fNOP = function () {};
  // fBound函数是myBind要返回的函数
  var fBound = function () {
    // 这个是调用myBind后，获取返回的fBound函数调用时候又传递的参数bindArgs（这个参数都是有效参数）
    var bindArgs = Array.prototype.slice.call(arguments);
    // this instanceof fNOP用来判断myBind返回值是否来作为构造函数，此时的this指向此构造函数生成的实例
    // 如果不是作为构造函数使用，则直接返回context，也就是myBind传入的第一个参数的this位置
    // args.concat(bindArgs)为myBind最终触发的所有参数
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };
  // 修改fBound的原型而不影响调用myBind的函数的原型
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};

// =================测试=================
let value = "this is window value";
let foo = {
  value: "this is foo value",
};
function bar(name, age) {
  this.habit = "打官司";
  console.log(this.value); //返回：undefined
  console.log(name); //返回：狂徒
  console.log(age); //返回：18
}
bar.prototype.friend = "张三";
let bindFoo = bar.myBind(foo, "狂徒");
let obj = new bindFoo(18);
console.log(obj.habit); //返回：打官司
console.log(obj.friend); //返回：张三
// 可以发现，构造函数中的this是失效的，即使全局和foo内部都定义了value，但是this.value获取不到，返回了undefined
```

:::

## 手写 new

:::info 回顾 new 的用法

```js
// 定义一个Person的构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.test = "这个属性没有放在返回值里面";
  // 可以有return返回值，如果是对象，则返回这个对象，否则返回所有参数组成的实例对象
  return {
    name,
    age,
  };
}
let p = new Person("法外狂徒", 18);
console.log(p); //返回 {name: '法外狂徒', age: 18},没有返回test的值，因为该属性不在return的对象内
console.log(p.test); //返回 undefined
console.log(p.name); //返回 '法外狂徒'
console.log(p.age); //返回 18
```

:::
:::info 使用一个 objectFactory 方法，模拟实现 new 关键字的功能
==objectFactory 的 arguments 接收的第一个参数是构造函数，后面是其他需要使用的参数，这一点和 new 关键字有点区别==

```js
function objectFactory() {
  // 1. 因为new返回的是个对象，所以这里先使用new Object()创建一个对象，并且等下返回这个对象
  let obj = new Object();
  /**
   * [].shift，调用数组的shift方法，截取数组的第一项并返回该项，原数组会被改变
   * [].shift.call(arguments)，使用call把this指向给参数arguments
   * 由于arguments得到的是一个类数组，本身没有shift方法，所以这里的转换是为了能让arguments调用数组shift方法
   * 此时得到的Constructor是objectFactory函数的第一个入参，也就是一个构造函数
   */
  let Constructor = [].shift.call(arguments);
  // 把第一步生成的对象，指向到传入的构造函数的原型上，obj和构造函数做关联
  obj.__proto__ = Constructor.prototype;
  // 存储arguments除第一项的剩余参数，并且指给obj
  let result = Constructor.apply(obj, arguments);
  // 处理return返回值，如果result得到的是个非object类型，那么直接返回obj，否则返回result
  return typeof result === "object" ? result : obj;
}

// ============ 测试：没有return情况 ============
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.habit = "旅游";
}
let p = objectFactory(Person, "张三", 20);
console.log(p); //返回 {name: '张三', age: 20, habit: '旅游'}
console.log(p.habit); //返回 旅游
console.log(p.name); //返回 '张三'
console.log(p.age); //返回 20
```

:::
