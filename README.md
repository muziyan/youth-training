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

