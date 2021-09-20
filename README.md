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

