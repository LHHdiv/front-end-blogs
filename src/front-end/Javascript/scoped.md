---
title: this&原型
index: true
icon: laptop-code
order: 0
category:
  - Javascript
---

[[toc]]

## 原型&原型链

==每个函数都有一个 prototype 属性==
==null 为顶点，没有\_\_proto\_\_属性==
:::tip 什么是原型

1. 任何一个 JS 对象中创建时会关联的一个对象，null 除外（null 为顶点）
2. 任何根据原型的构造函数创建出来的对象，都会继承原型上的属性

:::

#### 示例：创建一个构造函数

```js
// 构造函数PersonFn
function PersonFn() {}
// 实例化一个对象person;
let person = new PersonFn();
person.name = "小王";
console.log("my name is", person.name); //输出 my name is 小王
// 构造函数原型上的的属性，可以被继承
PersonFn.prototype.age = 18;
console.log("my age is", person.age); //输出 my age is 18，这个age属性继承于PersonFn构造函数
console.log(person.__proto__ === PersonFn.prototype);
```

:::warning 构造函数、实例对象、原型之间的关系

```js
1. function PersonFn() {}，PersonFn 为构造函数
2. 通过 new 方法，实例化出一个 person 对象，此时 persons实例的原型是 PersonFn.prototype
3. 实例出的 person 对象需要通过__proto__方法去访问原型 PersonFn.prototype
4. person.__proto__ === PersonFn.prototype // 输出 true
// PersonFn.prototype 如何指向构造函数 PersonFn？(通过 constructor)
5. console.log(PersonFn === PersonFn.prototype.constructor) // 输出 true
// Object.getPrototypeOf(传入一个实例对象)，返回该实例对象的原型
6. console.log(Object.getPrototypeOf(person) === PersonFn.prototype)  // 输出true
// 那么该实例的__proto__也就等于Object.getPrototypeOf(实例对象)
7. console.log(Object.getPrototypeOf(person) === person.__proto__)  // 输出true
```

:::

:::tip 什么是原型链
**使用\_\_proto\_\_去查找原型上的属性，自下向上的顺序，直到查到 null 为止**

```js
//定义一个Car构造函数
function Car() {}
// 实例化aodi对象
let aodi = new Car();
aodi.price = "50万";
Car.prototype.name = "奥迪";
console.log(aodi.name);
// 此时实例对象aodi查找属性的顺序是
// 1. 查自身aodi有没有name属性
// 2. 没有则通过aodi.__proto__向上查,查到实例的原型Car.prototype，发现有name属性，则就返回对应的值 "奥迪"
// 3. 假入Car.prototype也没找到，此时就会继续通过aodi.__proto__.__proto__继续向上查找，aodi.__proto__.__proto__相当于Car.prototype.__proto__，此时指向的是Object.prototype
// 4. 如果依然没查到，继续向上查找，aodi.__proto__.__proto__.__proto__（此时返回的是null，已经是顶点了）
// 5. aodi.__proto__.__proto__.__proto__ === Car.prototype.__proto__.__proto__ === Object.prototype.__proto__ === null（这三种链路是相等的，这就是原型链的查找流程）
```

:::

:::info 总结

1. 实例通过\_\_proto\_\_属性,自下向上去查找，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，它来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.\_\_proto\_\_ 时，可以理解为返回了 Object.getPrototypeOf(obj)
2. Object.prototype 生成实例原型
3. 原型链的顶点是 null，除了 null 之外，函数都有 prototype 属性和 \_\_proto\_\_方法
4. Object.prototype 没有原型，因为 Object.prototype.\_\_proto\_\_ === null

:::

## 作用域

==1. 作用域是指程序源代码中定义变量的区域==

:::info 词法作用域（又叫静态作用域）

==1. JS 是词法作用域==
==2. 词法作用域：作用域在定义时就是已经确定的==

```js
// value此时的作用域是全局作用域
const value = 1;
function foo() {
  console.log(value);
}
function bar() {
  let value = 2;
  foo();
}
bar(); //输出 1
// bar函数先执行，然后bar内部的foo函数执行，此时foo打印了value，foo函数自身没有，则会向上去找，此时foo的上级作用域是全局，则输出value=1
// 因为js是静态的作用域，所有foo执行的时候是向上查找，而不是在bar函数的作用域内查找
```

:::

:::info 动态作用域

==1. 动态作用域：作用域是在调用时决定的==
==2. bash 就是动态作用域==
==3. 以下代码可以做验证，创建 scope.bash 文件，用命令行执行 bash ./scope.bash==

```bash
# 定义一个变量value = 1
value=1
# 定义foo函数，并打印value的值
function foo () {
    echo $value;
}
# 定义bar函数，函数内部重新定义value=2，并调用foo
function bar () {
    local value=2;
    foo;
}
bar; #输出2
# foo函数内找不到value的时候，会在调用foo函数的作用域内查找，这个时候查的就是bar函数内的数据，返回的就是2
```

:::

## 执行上下文

:::info 执行上下文

1. javascript 引擎并不是一行一行的分析和执行代码，而是一段一段的分析执行，当执行一段代码时，会进行一个准备工作
2. javascript 引擎遇到可执行代码的时候才会进入准备工作
3. 可执行代码类型有三种：全局代码、函数代码、eval 代码
4. 这个准备工作，在 js 中就叫<font color="red">可执行上下文</font>

:::

:::info 执行上下文栈（压入栈、先进后出）

1. JavaScript 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文
2. 当 JavaScript 开始要解释执行代码的时候，先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文 globalContext（处于栈底的位置）
3. 只有当整个应用程序结束的时候，整个执行上下文栈才会被清空
4. 执行上下文栈最底部永远有个 globalContext

```js
// 示例
function fn3() {
  console.log("fn3");
}
function fn2() {
  fn3();
}
function fn1() {
  fn2();
}
fn1();
// 模拟进栈出栈（可以用数组的push(添加到数组尾部,ECSstack.push()入栈),pop(删除数组的最后一项,ECSstack.pop()出栈)）
// 改代码的执行上下文流程如下，以ECSstack数组作为栈的存储状态，let ECSstack = []
// 1. 开始执行时，此时的ECSstack栈有一个全局上下文 ECSstack = [GlobalContext]
// 2. 调用fn1函数，此时会创建一个fn1的执行上下文放入栈内,并且在全局上下文的上面 ECSstack = [GlobalContext,fn1Context]
// 3. 调用fn2函数，此时会创建一个fn2的执行上下文放入栈内,并且在fn1上下文的上面 ECSstack = [GlobalContext,fn1Context,fn2Context]
// 3. 调用fn3函数，此时会创建一个fn3的执行上下文放入栈内,并且在fn2上下文的上面 ECSstack = [GlobalContext,fn1Context,fn2Context,fn3Context]
// 4. 输出fn2之后，整个js代码执行完，此时ECSstack开始出栈，按照从上往下（或者先进后出）的方式，依次释放fn3Context,fn2Context,fn1Context,GlobalContext,此时该代码块全部执行完毕
```

:::

:::info 变量对象

==每个执行上下文，都有三个重要属性==

1. 变量对象（Variable Object）VO

- 变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明

2. 作用域链（Scope Chain）
3. this

:::

## This

## 闭包

:::info 定义

1. 闭包是指那些能够访问自由变量的函数
2. 闭包 = 函数 + 函数外可访问到的变量

:::
