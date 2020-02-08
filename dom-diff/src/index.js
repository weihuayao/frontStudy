import { createElement, render, renderDom } from './element'
import diff from './diff'
import patch from './patch'
let virtualDom1 = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('li', { class: 'item' }, ['c'])
])

let virtualDom2 = createElement('ul', { class: 'list-group' }, [
  createElement('li', { class: 'item' }, ['1']),
  createElement('li', { class: 'item' }, ['b']),
  createElement('div', { class: 'item' }, ['3'])
])

// // 将虚拟dom生成真实dom
// let el = render(virtualDom)
// //将真实dom渲染到页面
// renderDom(el, window.root)
// console.log(virtualDom)

// let patchs = diff(virtualDom1, virtualDom2)
// console.log(patchs)

let el = render(virtualDom1)
renderDom(el, window.root)

let patches = diff(virtualDom1, virtualDom2)

//给元素打补丁
patch(el, patches)
