<!--
 * @Descripttion: 
 * @version: 
 * @Author: weihua.yao
 * @Date: 2020-02-08 15:08:48
 * @LastEditTime : 2020-02-08 19:06:18
 -->
## 生成项目

```
npm install -g create-react-app
create-react-app dom-diff
```

## 虚拟DOM

virtual dom ，也就是虚拟节点。通过js的object对象模拟DOM的节点，然后通过特定的render方法 将其渲染成真实的dom节点。



Dom diff 比较两个虚拟dom区别 比较两个对象的区别

dom diff作用 根据两个虚拟对象创建出补丁，描述改变的内容，将这个补丁用来更新dom 如下图
![1581150823218](/1581150823218.png)

dom diff的简单实现源码