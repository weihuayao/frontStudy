class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

function createElement(type, props, children) {
  return new Element(type, props, children);
}
//设置属性
function setAttr(node, key, value) {
  switch (key) {
    case 'value':
      if (node.tagName.toUpperCase() === 'input' ||
        node.tagName.toUpperCase() === 'textarea') {
        node.value = value
      } else {
        node.setAttribute(key, value)
      }
      break;
    case 'style':
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(key, value)
      break;
  }
}
//render 方法可以将vnode转化为真实dom
function render(eleObj) {
  let el = document.createElement(eleObj.type)
  for (let key in eleObj.props) {
    setAttr(el, key, eleObj.props[key])
  }
  eleObj.children.forEach(child => {
    child = (child instanceof Element) ? render(child)
      : document.createTextNode(child)
    el.append(child)
  })
  return el
}

// 将dom渲染到页面
function renderDom(el, target) {
  target.appendChild(el)
}
export { createElement, render, Element, renderDom, setAttr }