let express = require('express');
app = express();

app.get("/query", function (req, res) {
  let data = {
    code: 0,
    name: "james"
  }

  //jsonp 跨域请求
  let fn = req.query.callback
  res.send(`${fn}(${JSON.stringify(data)})`)
})

app.listen(4399, () => {
  console.log("serve is start, listening port 4399 =====")
})