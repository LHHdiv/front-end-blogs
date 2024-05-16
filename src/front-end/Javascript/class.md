---
title: class类
index: true
icon: laptop-code
category:
  - Javascript
---

[[toc]]

<!-- 设置了YAML语法之后，就不用## 定义title了，会重复显示 -->
<!-- ## Class 类 -->

## 传统的构造函数

1. 例子(面向对象中：将下面对一个对象的所有成员的定义，统称为类)

```javascript
// 构造函数(构造器)
function Animal(type, name, age, sex){
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
}
// 定义示例方法(原型方法)
Animal.prototype.print = function(){
    console.log(`【种类】: ${this.type}`)
    console.log(`【名字】: ${this.name}`)
    console.log(`【年龄】: ${this.age}`)
    console.log(`【性别】: ${this.sex}`)
}
const a = new Animal('狗', '小花', 3，'公')
a.print();
// 遍历(会遍历到原型上的属性)
for(let prop in a){
    console.log(prop);
    // 打印出type，name, age, sex, print
}
```

2. 传统的构造函数的问题
   - 属性和原型方法定义分离，降低了可读性
   - 原型成员可以被枚举
   - 默认情况下，构造函数仍然可以被当作普通函数使用

## ES6 类的写法

1. 代码

```javascript
class Animal{
    constructor(type, name, age, sex){
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    print(){
        console.log(`【种类】: ${this.type}`)
        console.log(`【名字】: ${this.name}`)
        console.log(`【年龄】: ${this.age}`)
        console.log(`【性别】: ${this.sex}`)
    }
}
const a = new Animal('狗', '小花', 3，'公')
a.print();
// 会自动的把这种类的写法中的方法放到原型上
// 遍历(不会遍历到原型上的属性)
for(let prop in a){
    console.log(prop);
    // 打印出type，name, age, sex
}
```

## 类的特点

1. 类声明不会被提升,与 let 和 const 一样，存在暂时性死区
1. 类中的所有代码均在严格模式下执行
1. 类的所有方法都是不可枚举的
1. 类的所有方法都无法被当作构造函数使用
1. 类的构造器必须使用 new 来调用

## 类的其他书写方式

1. 可计算的成员名

```javascript
const printName = 'print';
class Animal{
    constructor(type, name, age, sex){
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    // 当不知道变量值得实惠，把上面定义的变量的value值作为该方法的名字
    [printName](){
    // print(){
        console.log(`【种类】: ${this.type}`)
        console.log(`【名字】: ${this.name}`)
        console.log(`【年龄】: ${this.age}`)
        console.log(`【性别】: ${this.sex}`)
    }
}
const a = new Animal('狗', '小花', 3，'公')
// 调用
a[printName]();
```

2. getter 和 setter
   - Object.defineProperty:可定义某个对象成员属性的读取和设置

```javascript
const printName = 'print';
class Animal{
    constructor(type, name, age, sex){
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    // 读取、获得(无参)
    // 创建一个age属性，并给它加上getter,读取该属性时，会运行该函数
    get age(){
        return this._age + '岁'
    }

    // 设置年龄(单参数)
    // 创建一个age属性，并给它加上setter，给该属性赋值时，会运行该函数
    set age(age){
        if(age< 0){
            age = 0;
        }else if(age > 1000){
            age = 1000;
        }
        this._age = age;
    }

    // 当不知道变量值得实惠，把上面定义的变量的value值作为该方法的名字
    [printName](){
    // print(){
        console.log(`【种类】: ${this.type}`)
        console.log(`【名字】: ${this.name}`)
        console.log(`【年龄】: ${this.age}`)
        console.log(`【性别】: ${this.sex}`)
    }
}
const a = new Animal('狗', '小花', 3，'公')
// 调用
a[printName]();
```

- 使用 getter 和 setter 控制的属性，不在原型上

3. 静态成员
   - 构造函数本身的成员

```javascript
// 定义在Animal自身，而不是通过a来定义
Animal.abc = 123;
```

使用 static 关键字定义的成员即静态成员

```javascript
static width = 50
static height = 50
static method(){}
// 调用方法；使用类名.method(), 类名.width即可
```

4. 字段初始化器（ES7）
   - **注意：**
     - 使用 static 的字段初始化器，添加的是静态成员
     - 没有使用 static 的字段初始化器，添加的成员位于对象上
     - 箭头函数在字段初始化器位置上，指向当前对象

```javascript
class Test {
  static a = 1;
  b = 2;
  c = 3;
}
const t = new Test();
console.log(t);
//输出后，b和c变成了示例成员；相当于constructor的写法:
// constructor(){
//   this.b = 2;
//   this.c = 3
//   }
```

5. 类表达式

```javascript
const A = class {
  // 匿名类，没有定义名字，类表达式
  a = 1;
  b = 2;
};
const a = new A();
console.log(a);
```

## 类的继承

1. 如果两个类 A 和 B，如果可以描述为：B 是 A，则，A 和 B 形成继承关系；
   - B 继承自 A
   - A 派生 B
   - B 是 A 的子类
   - A 是 B 的父类
   - 如果 A 是 B 的父类，则 B 会自动拥有 A 中的所有实例成员。
   - 过去的继承方法

```javascript
// 构造函数(构造器
function Animal(type, name, age, sex) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.sex = sex;
}
// 定义示例方法(原型方法)
Animal.prototype.print = function () {
  console.log(`【种类】: ${this.type}`);
  console.log(`【名字】: ${this.name}`);
  console.log(`【年龄】: ${this.age}`);
  console.log(`【性别】: ${this.sex}`);
};
// 创建狗的方法
function Dog(name, age, sex) {
  // 借用父类Animal的构造函数
  Animal.call(this, "犬类", name, age, sex);
}
//子类Dog的原型原本是指向object，但是object上面没有父类的隐式方法；所以需要使用Object.setPrototypeof，把指向改为Animal.prototype；这样才是完全继承父类Animal
Object.setPrototypeof(Dog.prototype, Animal.prototype);
const d = new Dog("旺财", 3, "公");
d.print();
```

- ES6 的继承写法：

```javascript
class Animal{
    constructor(type, name, age, sex){
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    print(){
        console.log(`【种类】: ${this.type}`)
        console.log(`【名字】: ${this.name}`)
        console.log(`【年龄】: ${this.age}`)
        console.log(`【性别】: ${this.sex}`)
    }
}
//  extends表示继承于，用于类的定义
class Dog extends Animal(){
    constructor(name, age, sex){
        // 调用；该处指的是调用Animal的构造函数
        super('犬类', name, age, sex))
        // 可以继续定义子类特有的属性
        this.abc = 123
    }
}
const d = new Dog('旺财', 3, '公')
d.print();
console.log(d);
```

2. 新的关键字：
   - extends：继承，用于类的定义
   - super
     - 直接当作函数调用，表示父类构造函数
     - 如果当作对象使用，则表示父类的原型
3. **注意：**
   - ES6 要求，如果定义了 constructor，并且该类是子类，则必须在 constructor 的第一行手动调用父类的构造函数
   - 如果子类不写 constructor，则会有默认的构造器，该构造器需要的参数和父类一致，并且自动调用父类构造器
4. 用 JS 制作抽象类
   - 抽象类：一般是父类，不能通过该类创建对象
   - 正常情况下，this 的指向，this 始终指向具体的类的对象
