/*
 * @Descripttion: 
 * @version: 
 * @Author: weihua.yao
 * @Date: 2020-03-16 14:50:07
 * @LastEditTime: 2020-03-17 09:56:31
 */
import {
  fetchData,
  fetchData2
} from './ajax'

test('fetchData 返回的结果{success:true}', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    done();
  })
});

test('fetchData2 返回的结果{success:true}', () => {
  return fetchData2().then(res => {
    expect(res.data).toEqual({
      success: true
    })
  })
});

//测试404
// test('fetchData2 返回的结果404', () => {
//   expect.assertions(1); //要求expect至少执行一次
//   return fetchData2().catch((e) => {
//     expect(e.toString().indexOf("404") > -1).toBe(true)
//   })
// });

test('fetchData2 返回的结果{success:true}', () => {
  return expect(fetchData2()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
});

test('fetchData2 返回的结果{success:true} async', async () => {
  await expect(fetchData2()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
});

test('fetchData2 返回的结果{success:true} async', async () => {
  const response = await fetchData2()
  expect(response.data).toEqual({
    success: true
  })
})

// test('fetchData2 返回的结果404 async' , async() => {
//   await expect(fetchData2()).rejects.toThrow();
// });

// test('fetchData2 返回的结果404 async', async () => {
//   expect.assertions(1)
//   try {
//     await fetchData2();
//   } catch (e) {
//     expect(e.toString().indexOf("404") > -1).toBe(true)
//   }
// });