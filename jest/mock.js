import axios from 'axios'
export const runCallback = (callback) => {
  callback()
}

export const createObject = (classItem) => {
  new classItem()
}

export const getData = () => {
  return axios.get('/users').then(res => res.data)
} 

export const fetchData = () => {
  return axios.get('/').then(res => res.data)
} 
