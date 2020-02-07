let express = require('express');
let app = express();
app.use(function (req, res, next) {
  // 允许哪些源可以向这个服务器发送AJAX请求
  res.header('Access-Control-Allow-Origin', 'http://localhost:4399')
  // 是否允许跨域的时候携带凭证
  res.header('Access-Control-Allow-Credentials', true)
  // // 允许的请求头部（哪些头部信息是合法的）
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-Width')
  // // 允许的请求方式
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
  req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
})
app.get('/getData', function (req, res) {
  let data = {
    code: 0,
    msg: '非同源数据!'
  }

  // CORS 跨域数据返回
  res.send(data)
})

app.listen(4400, () => {
  console.log("serve is start, listening port 4400 =====")
})