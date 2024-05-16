---
title: TS类型
index: true
icon: laptop-code
category:
  - Typescript
---

## TS 类型注解

:::info 内容

- TS 是 JS 的超集，提供了 JS 所有的功能，并且额外增加了**类型系统**
- TS 类型系统可以显示标记出代码中的意外行为，让开发者在开发过程中就可以看到错误并改正，从而降低运行时发生错误的可能性

```js
// 这里的:string就是类型注解，约定了变量name的类型只能是字符串格式
let name: string = "小L";
```

#### ts 基础语法

let 变量名:类型注解 = 变量值
示例：<font color="green">let num: number = 111</font>;

:::

## TS 类型分类

:::info 类型分类

1.JS 已有类型

- 原始类型：(number、string、boolean、null、undefined)
- 引用类型：(数组、对象、函数等)

2. TS 新增类型

- 联合类型
- 自定义类型
- 接口
- 元祖
- 字面量类型
- 枚举
- void

:::

## TS 类型别名

:::info 使用 type 为任意类型起别名 type（很灵活）

```js
// 假设要要定义多个同类型数组变量
let arr1: (number | string)[] = [1, 2, 3, "4"];
let arr2: (number | string)[] = [5, 6, 7, "8"];
// 可以使用以下方式把(number | string)[]类抽离出来单独定义，这样就可以复用该类型
// type就相当于let、const等关键字，ts中类型别名必须要用type关键字
type arrType = (number | string)[];
let arr3: arrType = [123, 123354, 566, "str", 324];

// 也可以这样写(把联合类型抽离出来去组合)
let baseType = number | string;
let arr4: baseType[] = [13, 5, "abc", "def"];
```

:::

## TS 数组类型

```js
// 声明一个number类型的数组arr，该arr内的数据必须都是number类型
// 写法1
let arr1: number[] = [1, 2, 3];
// 写法2(该数组可以定义number和string两种类型)
let arr2: Array<number | string> = [1,2,3，'Hi'];
```

## TS 联合类型

:::info 使用或运算符 | 关联

```js
// 该arr可以定义数字和字符串两种类型的值
let arr: (number | string)[] = [1, 2, 3, "字符串数据"];
// 这种情况下就可以不用加括号()
let timerId: number | null = null;
```

<font color="red">注意：或 | 运算符优先级较低，所有使用联合类型的时候要加个()包裹来提升优先级</font>
:::

## TS 函数类型

:::info 对函数的参数和返回值做类型约束，减少函数运行时错误
==1. 这里的笔记都是基于函数有 return 返回值的==
==2. JS 中函数没 return 返回值会返回 undefined==
==3. TS 中函数没 return 返回值会推断出 void 类型==

#### 函数的三种定义方式一（函数声明）

```js
// add函数的入参有两个，并且都是number类型，返回值也是number类型，(此时的返回值是自动推断的)
function add(a: number, b: number) {
  console.log(a, b, a + b);
  return a + b;
}
add(1, 2); //输出number类型的 3
// add函数的入参有两个，并且都是number类型，返回值也是number类型，(此时的返回值是手动指定的)
function minus(a: number, b: number): number {
  console.log(a, b, a + b);
  return a - b;
}
minus(10, 4); //输出number类型的 6
```

#### 函数的三种定义方式二（函数表达式）

```js
const fn = function (firstName: string, lastName: string): string {
  console.log(firstName + lastName);
  return firstName + lastName;
};
fn("程", "咬金"); //输出字符串类型的 程咬金
```

#### 函数的三种定义方式三（箭头函数）

```js
const sub = (a: number, b: number): number => {
  console.log(a + b);
  return a + b;
};
sub(10, 11); //输出number类型的 21
// 单个入参的写法(TS中也必须要加小括号)
const mul = (a: number): number => {
  console.log(a * b);
  return a * b;
};
mul(10, 10); //输出number类型的 100
```

#### 在函数中使用类型别名 type

```js
// 箭头函数的类型别名用法
type FnType = (a: number, b: number) => number;
/**
 * @param {type} 类型声明关键字
 * @param {FnType} 箭头函数名
 * @param {a:number} 参数a,类型为number
 * @param {b:number} 参数b,类型为number
 * @param {=> number} 该箭头函数返回值类型为number
 * @returns
 */
// 在箭头函数中使用函数的类型别名FnType
const fn: FnType = (a, b) => {
  return a + b;
};
// 在函数表达式中使用函数的类型别名FnType
const fn1: FnType = function (a, b) {
  return a - b;
};
```

#### 函数类型结论：

1. 返回值类型可以由函数自身推断，开发过程中可以不自定义
2. 如果自定义返回值类型，则自定义类型需要和返回值的 return 的数据类型一致，否则报错
3. JS 中的箭头函数，只有一个入参时，可以省略小括号()，<font color="red">在 TS 中不可以省略小括号()</font>
4. <font color="red">函数的类型别名，通常在箭头函数和函数表达式中使用，函数声明的方式不使用</font>

:::

## TS void 类型

:::info 函数无返回值，TS 中会推断出返回值类型为 void 类型

==1. 函数如果不写 return,默认是返回 undefined，但是 TS 推断出的类型为 void==
==2. 当你在 TS 中设置:undefined 时，则必须返回一个 undefined 类型==
==3. TS 提供了一个返回值类型 void：意思是没有返回值==

```js
// 该写法TS会提示：生命类型不为"void"或"any"的函数必须返回值，此时在函数内加上return undefined即可
const undef = (msg: string): undefined => {
  console.log(msg);
  // return undefined
};
undef("Hi, 你好");
// void可以不定义，不定义的话，由于没有return，会默认推导返回类型为void
const voidFn = (msg1: string): void => {
  console.log(msg1);
};
voidFn("Hi, 你好");
```

:::

## TS 对象类型

:::info

==1. TS 对象类型的语法如 personObj==
==2. 变量后面，声明对象内的所有属性的类型==

```ts
let personObj: {
  name: string;
  age: number;
  hobby: string;
  fn: (content: string) => void;
} = {
  name: "程咬金",
  age: 18,
  hobby: "打野",
  fn: (content) => {
    console.log(content);
  },
};
personObj.fn("我是程咬金");
```

==对象类型别名==

```js
// 使用type定义了personType类型
type personType = {
  name: string,
  age: number,
  hobby?: string,
  fn: (content: string) => void,
  fn1:(text:string):void
};
// 使用personType类型定义personObj对象
let personObj: personType = {
  name: "项羽",
  age: 20,
  hobby: "战士",
  fn: (content) => {
    console.log(content);
  },
  fn1(text){
   console.log(text);
  }
};
personObj.fn("我是箭头函数的方式定义");
personObj.fn1("fn1是函数声明的方式定义");
// 使用personType类型定义personObj1对象
let personObj1: personType = {
  name: "虞姬",
  age: 20,
  fn: (content) => {
    console.log(content);
  },
};
personObj1.fn("我是虞姬");
// 由于hobby是可选参数，所以使用的时候需要判断
// 1. if判断
if(personObj1.hobby){
  let concatData = personObj1.hobby.concat("hobby属性执行concat")
  console.log(concatData)
}
// 2. &&与运算符
personObj1.hobby && personObj1.hobby.concat("hobby属性执行concat")
// 3. 可选链(?)
personObj1.hobby?.concat("hobby属性执行concat")
```

**1. 如果对象中的属性不是必须使用的，可以参考下面的可选参数，在对应的属性后面加上 ？ 即可**
**2. 例如上面 personType 中的 hobby 属性，就是一个可选属性**

:::

## TS 可选参数

:::info TS 可选参数 ? 的用法
TypeScript 里的每个函数参数都是必须的。这不是指不能传递 null 或 undefined 作为参数，而是说编译器检查用户是否为每个参数都传入了值。编译器还会假设只有这些参数会被传递进函数。简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。

==1. JS 中的函数，定义了形参，调用函数时，可以不传实参==
==2. TS 中的函数，调用函数时，形参和实参必须都要对应，实参可以传 undefined|null==
==3. TS 中，要使用可选参数，在形参后面加个问号 ? 即可，如 car 函数的 price 参数==
==4. TS 中，必选参数不能位于可选参数后面==

```js
// (name?: string, price: string)是错误的，此时必选参数price在可选参数name后面了
const car = (name: string, price?: string) => {
  console.log(name, price);
};
// 由于没传第二个参数price，car函数内的price为undefined
car("宝马");
```

:::

## TS 字面量类型

:::info
一个字面量是一个集体类型中更为具体的一种子类型。意思是："Hello World" 是一个 string，但是一个 string 不是类型系统中的 "Hello World"
==字面量：可以直接看到结果的都可以叫字面量：1,2,'hello',[],{name:'小王'},function(){},...等等==
==字面量类型：任意的 JS 字面量都可以当做类型使用==
==const str2 = "world"会被 TS 推断为 world 类型，这种类型就叫「字面量」类型==

```js
// 使用let声明的str1的类型会被自动推断为string
let str1 = "hello";
// 使用const声明的str2的类型却被推断为了 world
const str2 = "world";
```

#### 字面量应用模式和场景

- 使用模式：字面量类型配合联合类型一起使用
- 使用场景：用来表示一组明确的可选值列表

```js
// type定义的Direction类型列表就是字面量类型（上下左右四个类型，实参就只能传入这四个其中的一个）
type Direction = "上" | "下" | "左" | "右";
function changeDirection(direction: Direction) {
  console.log(direction);
}
changeDirection("上");
```

总结：简单说，字面量类型就是把字面量当做类型来使用
:::

## TS 接口类型

:::info 使用 interface 定义接口
语法：

```js
interface 接口名 {
  属性名: 类型;
}
```

示例：

```js
// 定义IPerson接口
interface IPerson {
  name: string;
  age: number;
  gender: string | boolean | number;
}
// 使用IPerson接口
const person: IPerson = {
  name: "安琪拉",
  age: 19,
  gender: "女",
};
console.log(person);
```

#### 接口继承（优点：可以抽离出公共的约束规则）

```js
// 定义基础的IPerson接口
interface IPerson {
  name: string;
  age: number;
  gender: string | boolean | number;
}
// 定义一个IStudent接口，并且继承IPerson接口的约束规则
interface IStudent extends IPerson {
  score: number;
  stuID: string;
}
// 创建一个stu对象，该对象就可以使用从IPerson接口继承来的约束规则
const stu: IStudent = {
  name: "庄周",
  age: 18,
  gender: "妖",
  score: 100,
  stuID: "001",
};
console.log(stu);
```

#### 使用 type 实现一个类似于 interface 的继承效果（注意：type 本身是没有继承的）

==交叉类型==

```js
// 使用type定义一个Person类型约束规则
type Person = {
  name: string,
  age: number,
};
// 使用type定义一个Stu类型约束规则
// 使用与运算符 & 来实现两个约束规则的合并（得到一个类似于interface效果的交叉类型）
// 也可是使用或运算符 |，此时就不是合并的方式了，有score属性或这有name和age
type Stu = {
  score: number,
} & Person;
// 此时Stu类型规则就是一个交叉类型，包含了Person和Stu内的所有约束规则
const testStu: Stu = {
  name: "小卤蛋",
  age: 99,
  score: 59,
};
```

:::

## TS 枚举类型

:::info 枚举(关键字：enum)
==数字枚举：枚举数字可以自增长==
==字符串枚举：每个枚举值都要有对应的内容，字符串不能自动增长==
==枚举可以通过 键找值，也可以通过 值找键！==

1. 使用枚举可以定义一些带名字的常量。
2. 使用枚举可以清晰地表达意图或创建一组有区别的用例。
3. TypeScript 支持数字的和基于字符串的枚举。
4. ==枚举：如果不设置值，则默认从 0 开始，后续成员依次增长==
   示例：

```js
// 不要加引号，直接写
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
function changeDirection(direction: Direction) {
  console.log(direction);
}
// 使用时使用点+属性的方式去传参
changeDirection(Direction.Up);    // 0
changeDirection(Direction.Down);  // 1
changeDirection(Direction.Left);  // 2
changeDirection(Direction.Right); // 3
```

==自定义枚举默认值==

```js
// 自定义枚举值，如果存在没定义的，则会根据上一个自动累加（自动累加的前提是枚举值是数字）
enum Direction {
  Up = 100,
  Down,
  Left = 200,
  Right,
}
function changeDirection(direction: Direction) {
  console.log(direction);
}
// 使用时使用点+属性的方式去传参
changeDirection(Direction.Up); // 100
changeDirection(Direction.Down); // 101
changeDirection(Direction.Left); // 200
changeDirection(Direction.Right); // 201
```

#### 字符串枚举示例

```js
// 用的字符串枚举，每个属性后面都要设置，否则会报错
enum Direction {
  Up = "上",
  Down = "下",
  Left = "左",
  Right = "右",
}
function changeDirection(direction: Direction) {
  console.log(direction);
}
// 使用时使用点+属性的方式去传参
changeDirection(Direction.Up);    // 上
changeDirection(Direction.Down);  // 下
changeDirection(Direction.Left);  // 左
changeDirection(Direction.Right); // 右
```

#### 键找值 && 值找键

```js
enum Direction {
  Up = "上",
  Down = "下",
  Left = "左",
  Right = "右",
}
console.log(Direction)
// 输出{"100": "Up","200": "Down","300": "Left","400": "Right","Up": 100,"Down": 200,"Left": 300,"Right": 400}
// Direction[100] = Up
// Direction['Up'] = 100
```

**描述：枚举与字面量类型+联合类型组合的功能类似，都是用来表示一组明确的可选值列表**
**推荐优先使用字面量类型+联合类型组合，这种方式更直观、简洁、高效**
:::

## TS any 类型

==不推荐使用 any 类型，会导致失去 TS 的保护优势==
==当使用 any 类型时，可以对该值进行任意操作，不再有 TS 的提示功能==

```js
let num: any = 1;
num = "string type"; //这里不会有报错提示,但实际上，num的类型已经被改变了
```

#### 以下方式声明的都是 any 类型

```js
// 形参a和b没有定义类型，此时会被赋予any类型
function (a,b){
  return a + b
};
// 声明变量没赋值，这个name也没有定义类型，会变成any类型
let name;
```

## TS 元组类型

:::info 元组（Tuple）元组类型表示一个已知元素数量和类型的数组，各元素的类型不必相同
==限制数组的数据长度和固定类型==

```js
// 该arr长度只能为2，第一个属性为number类型，第二个为string类型
let arr: [number, string] = [1, "元组数据"];
```

:::

## TS 类型推论

:::info TypeScript 里，在有些没有明确指出类型的地方，类型推论会帮助提供类型

==发生类型推论的常用场景==
==1. 声明变量并初始化的时候==
==2. 决定函数返回值的时候==
示例：

```js
let num = 3; //推断为number
let str = "str"; //推断为string
// 这里的add函数没有定义返回值类型，则会自动推断为number类型（简写）
function add(a: number, b: number) {
  return a + b;
}
// 这里的add函数定义了返回值类型number，则返回的就只能是number（全写）
function add(a: number, b: number): number {
  return a + b;
}
```

:::

## TS 类型断言

:::note 描述

1. 有时候你会比 TS 更了解某个值的详细信息。此时可以使用类型断言类指定更具体的类型
2. 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
3. 没有运行时的影响，只在编译阶段起作用。TS 会假设你（程序员）已经进行了必须的检查。
4. 当函数获取到的结果类型较为宽泛时，我们又知道具体类型，就可以使用断言强行指定类型

:::

:::warning 类型断言有两种写法

1. 尖括号<>语法
2. as 语法

:::

:::info 尖括号&lt &gt 语法

```js
// 定义一个any类型（宽泛）
let foo: any;
// bar指定了string类型
let bar = <string>foo;
```

:::

:::info as 语法（推荐优先使用 as 语法）
**比如通过 ID 获取 a 标签，返回值类型是 HTMLElement**
**实际上，a 标签的类型是 HTMLAnchorElement**
**HTMLElement 类型是标签的父级，a,p,div,span....等标签都是继承的该类型**

```js
/**
 * 此时的返回值aLink的类型是HTMLElement,该类型只包含所有html标签的公共属性或方法，不包含a标签独有的属性和方法
 * 这个HTMLElement太宽泛了(不够具体)
 * 解决方式：使用类型断言指定更加具体的类型
 */
// 不使用类型断言的方式（aLink.href会报错）
let aLink = document.getElementById("aLink");

/**
 * 1.使用 as 关键字实现类型断言
 * 2.关键字 as 后面的类型是一个更具体的类型(HTMLAnchorElement是HTMLElement的子类型)
 * 3.通过类型断言，aLink的类型变得更加具体，此时就可以访问a标签的属性和方法了
 *
*/
// 使用类型断言的方式 (as关键字)（此时可以正常调用aLink.href）
let aLink = document.getElementById("aLink") as HTMLAnchorElement;
```

:::

## interface VS type

:::warning 接口 interface 和 类型别名 type 对比

- 相同点：都可以给对象指定类型
- 不同点：

  - 接口(interface)：只能为对象指定类型
  - 类型别名(type)：不仅可以为对象指定类型，实际上可以为任意类型指定别名
  - interface 可以继承（extends）另一个 interface；也可以继承对象类型的 type

  ```js
  // interface的继承示例（Rect继承了Shape的x, y属性）
  interface Shape {
    x: number;
    y: number;
  }
  // 继承扩展
  interface Rect extends Shape {
    width: number;
    height: number;
  }
  const rect: Rect = { x: 0, y: 0, width: 0, height: 0 };
  ```

  - type 可以通过 & 的写法来继承 type 或 interface，得到一个交叉类型

  ```js
  type Shape = {
    x: number,
    y: number,
  };
  type Circle = Shape & { r: number };
  const circle: Circle = { x: 0, y: 0, r: 8 };
  ```

  - interface 支持声明合并，文件下多个同名的 interface，它们的属性会进行合并

  ```js
  interface Point {
    x: number;
  }
  interface Point {
    y: number;
  }
  const point: Point = { x: 10, y: 30 };
  // 注意：声明合并的时候，同名属性的不能进行类型覆盖修改，如果再声明Point接口,x属性的类型还得是number,保持一致
  ```

  - type 不支持声明合并，一个作用域内不允许有多个同名 type, type 和 interface 也不可以同名

- 一般情况下，能使用 type 的就使用 type

:::
