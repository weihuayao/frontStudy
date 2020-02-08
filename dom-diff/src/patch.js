import { render, Element, setAttr } from "./element";

let allPatches;
let index = 0;
export default function patch(node, patches) {
  //给元素打补丁
  allPatches = patches;

  walk(node)
}

function walk(node) {
  let currentPatch = allPatches[index++]
  let childNode = node.childNodes
  childNode.forEach(child => { walk(child) })
  if (currentPatch) {
    doPatch(node, currentPatch)
  }
}
function doPatch(node, patches) {
  patches.forEach(patch => {
    switch (patch.type) {
      case 'ATTRS':
        for (let key in patch.attrs) {
          let value = patch.attrs[key]
          if (value) {
            setAttr(node, key, value)
          } else {
            node.removeAttribute(key)
          }
        }
        break;
      case 'TEXT':
        node.textContent = patch.text
        break;
      case 'REMOVE':
        node.parentNode.removeChild(node);
        break;
      case 'REPLACE':
        let newNode = (patch.newNode instanceof Element) ?
          render(patch.newNode) : document.createTextNode(patch.newNode);
        node.parentNode.replaceChild(newNode, node);
        break;
      default:
        break;
    }
  })
}