# youth-training
青训代码

## day 
> nodejs 实战

### 1. fs api
> 文件系统模块  
> const fs = require('fs')
```js
  // 同步读取 二进制文件 图片 视频  
  const data = fs.readFileSync('path/to/filename')
  console.log('data',data.toString())

  // 异步读取
  /**
   * callback(err,data) => {}
   * err 错误信息
   * data 数据流
   * 
   */
  fs.readFile('path/to/filename',(err,data) => {
    // 错误异常抛出
    if(err) throw err;
    console.log(data.toString())
  })


  // 现代编程 promise api 风格
  (async () => {
    const fs = require('fs')
    // 封装函数
    const {promisify} = require('util');
    // 封装成 promise 返回风格
    const readFile = promisify(fs.readFile);
    // async/await 调用
    const data = await readFile('path/to/filename')
    console.log(data.toString())
  })()
```

### 2. buffer 
> 缓冲区  
> const Buffer = require('buffer')
```js
  const buf1 = Buffer.alloc(10);
  console.log(buf1)  // => 二进制 <Buffer 00 00 00 00>

  const buf2 = bUFFER.FROM('a');


  const buf3 = Buffer.from('文本')
  console.log(buf3)  // => utf-8 utf-16 utf-32 格式

  const buf4 = Buffer.concat([]);
  console.log(buf4) // => 


```

### 3. http 
> http 服务  
> const http = require('http')  
> const fs = require('fs')
```js
  // 创建http服务
  // req 请求
  // res 响应
  // listen(port,callback) 链式调用监听 
  // port 监听的端口号
  // callback 启动服务的回调
  http.createServer((req,res) => {
    // 流  request response
    const {url,method} = request;
    if(url === '/' && method == 'GET'){
      fs.readFile('path/to/filename',(err,data) => {
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

  // 跨域问题 是由于浏览器同源策略不允许访问
  // 通常后端来设置 
  // 前端可以通过 proxy 代理来绕过跨域问题
```


### 4. steam
> 文件流  
> const fs = require('fs')
```js
  // 1.png => 2.png fs read write 

  // 读取 
  const readStream = fs.createReadStream('path/to/filename')
  // 写入
  const writeStream = fs.createWriteStream('path/to/filename')
  // 复制
  readStream.pipe(writeStream);
  
```

### CLI工具
> 约定路由 => 按照规则来创建文件夹,我们编写的程序来按照规则来读取执行  
> bin 目录下运行 npm link 可以绑定到全局指令
```js
#!/usr/bin/env node
//指定执行环境
// TODO 

```