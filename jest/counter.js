/*
 * @Descripttion: 
 * @version: 
 * @Author: weihua.yao
 * @Date: 2020-03-17 10:04:11
 * @LastEditTime: 2020-03-17 10:22:45
 */
export default class Counter {
  constructor() {
    this.number = 0;
  }
  addOne() {
    this.number += 1;
  }

  minusOne() {
    this.number -= 1;
  }
}