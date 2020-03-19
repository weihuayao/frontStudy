/*
 * @Descripttion: 
 * @version: 
 * @Author: weihua.yao
 * @Date: 2020-03-16 14:49:57
 * @LastEditTime: 2020-03-17 09:42:27
 */
import axios from 'axios'

export const fetchData = (fn) => {
  axios.get('http://www.dell-lee.com/react/api/demo.json')
    .then((res) => {
      fn(res.data)
    })
}

export const fetchData2 = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json');
}