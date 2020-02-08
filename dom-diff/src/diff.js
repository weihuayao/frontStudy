const ATTRS = 'ATTRS'
const TEXT = 'TEXT'
const REMOVE = 'REMOVE'
const REPLACE = 'REPLACE'
let index = 0
function diff(oldTree, newTree) {
  let patches = {}
  let index = 0
  walk(oldTree, newTree, index, patches)
  return patches
}

function diffAttr(oldAttr, newAttr) {
  let patch = {}
  //判断旧属性和新属性的关系
  for (let key in oldAttr) {
    if (oldAttr[key] !== newAttr[key]) {
      patch[key] = newAttr[key]
    }
  }
  for (let key in newAttr) {
    //老节点没有新节点的属性
    if (!oldAttr.hasOwnProperty(key)) {
      patch[key] = newAttr[key]
    }
  }
  return patch
}

function diffChildren(oldChildren, newChildren, patches) {
  // 比较新子节点和旧的子节点
  oldChildren.forEach((child, ind) => {
    walk(child, newChildren[ind], ++index, patches);
  })
}

function isString(node) {
  return Object.prototype.toString.call(node) === '[object String]';
}

function walk(oldNode, newNode, index, patches) {
  let currentPatch = [] //每个元素的patch对象
  if (!newNode) { //新节点删除
    currentPatch.push({ type: REMOVE, index })
  } else if (isString(oldNode) && isString(newNode)) { //判断文本是否一致
    if (oldNode !== newNode) {
      currentPatch.push({ type: TEXT, text: newNode })
    }
  } else if (oldNode.type === newNode.type) {
    //比较属性是否变化
    let attrs = diffAttr(oldNode.props, newNode.props)
    if (Object.keys(attrs).length > 0) {
      currentPatch.push({ type: ATTRS, attrs })
    }
    //如果有子节点 遍历子节点
    diffChildren(oldNode.children, newNode.children, patches)
  } else {
    //节点替换
    currentPatch.push({ type: REPLACE, newNode })
  }
  if (currentPatch.length > 0) {
    patches[index] = currentPatch;
  }
}


export default diff