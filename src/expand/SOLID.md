---
title: SOLID设计原则
order: 0
---

### S：单⼀职责原则（Single Responsibility Principle）
:::tip
* 通过解耦让每一个模块职责更加独立
* 目标：一个功能模块只做一件事
:::

:::note 示例
```js
// create game store
class PUBGManager {
  // 弹窗方法
  openDialog(){
    // 计算金额
    setPrice()
  }
}
const game = new PUBGManager()
game.openDialog() //弹窗之后计算金额，此时弹窗和计算金额 两个模块耦合
```
:::

### O：开闭原则（Open Closed Principie）
### L：⾥⽒替换原则（Liskov Substitution Principle）
### I：接⼝隔离原则（Interface-segregation Principle）
### D：依赖倒置原则（Dependency Inversion Principle）