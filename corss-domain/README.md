## 同源策略

同源策略（Same origin policy）是浏览器最核心也最基础的安全功能，同源策略会阻止一个域的 javascript 脚本和另外一个域的内容进行交互。所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol）、主机（host）和端口号（port）



## 为什么浏览器不支持跨域

- 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB
- 无法接触非同源网页的 DOM
- 无法向非同源地址发送ajax

## 实现跨域的方案

- jsonp

    	`JSONP` 由于采用 `script` 资源文件请求，而资源请求为 `GET` 请求，故仅在 `GET` 请求中使用 `JSONP` 跨域请求。

  使用 `ajax` 请求网站，而服务器返回的 `JSONP` `callback` 是恶意执行代码，导致返回浏览器后会自动执行恶意代码，威胁数据安全。（`XSS` 攻击）

- cors

  ​		若携带凭证发起请求，`CORS` 只能指定一个允许源，不能使用通配符和指定多个源。

- postMessage

- document.domain

  ​	在根域范围内，浏览器允许把 `domain` 属性的值设置为它的上一级域。例如，在 `a.test.com` 域内，可以把`domain` 设置为 `test.com` 。 `16`

  所以 `document.domain` 只能处理父域相同，子域不同的情况。

- window.name

- location.hash

- http-proxy

- nginx

- websocket