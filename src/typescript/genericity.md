---
title: TS泛型
index: true
icon: laptop-code
category:
  - Typescript
---

## 泛型概念

:::info

- 泛型是可以在保证类型安全的前提下，让函数等与多种类型一起工作，从而实现复用
- 常用于函数、接口、class 中

示例：定义一个 getValue 方法，传入一个值，返回这个值

```js
/**
 * 1. getValue函数此时只能传number类型的参数,失去了通用性
 * 2. 但是如果把number改为any类型，返回值也变成了any，失去了TS的安全性
 */
function getValue(value: number) {
  return value;
}
getValue(123);
```

==使用泛型解决上面 getValue 的问题==

```bash
# 语法：在函数名和参数的括号之间写一个<T>

# 在声明的时候，变量T的类型是不知道的
# {<T>}：声明泛型(通常使用T)
# {val: T}  使用泛型
# 调用getValue 函数时，传入泛型指定的具体类型
function getValue<T>(val: T) {
  console.log(val)
  return val;
}
getValue<number>(123) # 输出number类型的123
getValue<string>('abc') # 输出string类型的abc
getValue<boolean>(false) # 输出boolean类型的false
```

:::

## 泛型函数 (简化函数)

:::info 调用时的类型，是可以省略的，因为 TS 会根据入参自动推断

```bash
function getValue<T>(val: T) {
  console.log(val);
  return val;
}
getValue(123)   #输出number类型的123
getValue('abc')   #输出string类型的abc
getValue(false)   #输出boolean类型的false
```

:::

## 泛型--类型约束

- 默认情况下，泛型 T，代表多个类型的集合，会导致在 getValue 函数内部无法访问 val 的任何属性
- 因为 T 是动态改变的

:::info 基本类型约束

```bash
function getValue<T>(val: T) {
  # 虽然调用的时候传了string类型，但是这里依然不能使用字符串类型的方法
  # 因为此时的泛型T是一个未知的类型，无法保证一定会存在length方法,比如number类型就没有length
  console.log(val.length);
  return val;
}
getValue<string>('abc')
```

:::

:::info 复杂类型约束（指定更加具体的类型）

```bash
# val:T[] --> 约束入参val的值必须是T类型的数组
function getCardList<T>(val: T[]) {
  # 这里的val.length不会报错，因为val: T[]已经知道val是个数组类型了
  console.log(val.length);
  return val;
}
getCardList([1, 2, 3]); #此时的返回值是number类型的数组
```

:::

## 添加约束

==给泛型加父类做约束==
:::info

```js
// 定义接口(接口可以定义各种基础约束)
interface ILength {
  length: number;
}
// 添加约束(T extends ILength：继承，意思是T是接口ILength的子类)
// 该方法的解释：传入的val的类型必须满足接口ILength的需求，必须要有一个number类型的length属性
function getId<T extends ILength>(val: T) {
  console.log(val.length);
  return val;
}
getId<string>("10");
getId<number[]>([1, 3]);
getId<(string|number)[]>([1, 'abc']);
```

:::

## 泛型--多个类型变量

:::info 多个类型变量

- 举个例子：定义一个函数，传入一个对象，再传入一个字符串属性名，返回属性值

```js
// Error 示例（此时的obj对象,key,obj[key]均为any类型）
function getParams(obj, key) {
  return obj[key];
}
/**
 * 使用keyof语法
 * @param {O} 第一个参数约束的类型，这里代表是个对象
 * @param {K} 第二个参数约束的类型，这里代表一个单独的键名
 * @param {K extends keyof O},因为K无法确保key在O中存在，使用keyof做约束，必须是O中存在的key，才可传入
 */
function getProps<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}
```

- keyof 常规用法

```js
// 定义一个Friend类型
type Friend = {
  name: string;
  age: number;
  hobby: string;
};
// 使用keyof，需要传递当前Friend内的某个键名，此时的key是个属性
let key: keyof Friend = "name";
// 不使用keyof，需要给Friend的每个键赋值，此时的key1是个对象
let key1: Friend = {
  name: "keyof测试",
  age: 18,
  hobby: "打球",
};
console.log(key); //输出 keyof测试
console.log(key1); //输出对象 {"name": "1","age": 18,"hobby": "打球"}
```

#### TS 定义数组对象

1. 声明指定 key 的数组对象

```js
interface Student {
  id: number;
  name: string;
}
const obj: Student[] = [
  { id: 1, name: "hello" },
  { id: 2, name: "world" },
];
console.log("🚀 ~ file: main.ts:242 ~ obj:", obj);
```

<!-- 2. 声明任意类型的对象数组

```js
let objects: { [key: string]: any }[];
const obj: Student[] = [
  { id: 1, name: "hello" },
  { id: 2, name: "world" },
];
console.log("🚀 ~ file: main.ts:242 ~ obj:", obj);
``` -->

:::

## 泛型接口

:::info

```js
/**
 * Student<T>, T就是传入的时候定义的泛型，该接口内可以使用这个泛型
 * @param {name} name使用了泛型T，则name在传入的时候可以指定类型
 */
interface Student<T> {
  id: number;
  name: T;
}
// 使用，这里传入的泛型T是string类型
const ob1: Student<string> = {
  id: 1,
  name: "hello",
};
// 使用，这里传入的泛型T是number类型
const obj2: Student<number> = {
  id: 1,
  name: 11,
};
console.log(ob1); //输出 {"id": 1,"name": "hello"}
console.log(obj2); //输出 {"id": 1,"name": 11}
```

:::
