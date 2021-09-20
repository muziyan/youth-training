const http = require('http')
const fs = require('fs')
const {promisify} = require("util")
http.createServer((req,res) => {
  // 流  request response
  const {url,method} = req;
  if(url === '/' && method == 'GET'){
    fs.readFile('./index.html',(err,data) => {
      // 错误拦截
      if(err){
        res.writeHead(500,{
          'Content-Type' : 'text/plain;charset=utf-8'
        })
        res.end('500 服务器异常!')
        return
      }

      // 请求正确返回数据
      res.statusCode = 200
      res.setHeader('Content-Type','text/html')
      res.end(data)
    })
  }else{
    // 找不到请求返回
    res.statusCode = 400
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('404 找不到资源!')
  }


  // 响应
  // res.writeHead(200) // 返回的响应状态码
  // res.end("hello node!")  // 返回的响应主体
})
.listen(3000, () => {
  console.log('current listening port is 3000')
})