jest.mock('axios');
// jest.mock('./mock')
import { runCallback, createObject, getData, fetchData } from './mock'
import axios from 'axios'

test('测试runCallback', () => {
  const func = jest.fn() //mock 函数捕获函数的调用
  runCallback(func)
  expect(func).toBeCalled()
  // runCallback(func)
  // expect(func.mock.calls.length).toBe(2)
})

// mockReturnValue 设置返回的值
test('测试createObject', () => {
  const func = jest.fn()
  createObject(func)
})

// mock ajax获取数据 
test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  return getData().then(data => expect(data).toEqual(users));
});


// test('fetchData测试', () => {
//   return fetchData().then(data => {
//     expect(eval(data)).toEqual('123')
//   })
// });
