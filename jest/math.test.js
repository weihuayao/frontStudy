/*
 * @Descripttion: 
 * @version: 
 * @Author: weihua.yao
 * @Date: 2020-03-16 10:27:59
 * @LastEditTime: 2020-03-16 13:40:42
 */

import {
  add,
  multiply,
  minus
} from './math.js'

test('测试加法3 + 7 ', () => {
  expect(add(3, 7)).toBe(10)
})

test('测试乘法3 * 7 ', () => {
  expect(multiply(3, 7)).toBe(21)
})

test('测试7-3', () => {
  expect(minus(7, 3)).toBe(4)
})