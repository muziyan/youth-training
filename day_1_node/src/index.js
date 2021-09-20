const http = require('http')
const fs = require('fs')
const path = require("path")
const {promisify} = require("util")

// 预设端口
const port = 3000;

const resolve = (dir) => path.resolve(__dirname,dir);

// 获取本地文件
/**
 * @param {string} filePath 相对路径 || 绝对路径
 * @returns 
 */
const getFile = async (filePath) => {
  const readFile = promisify(fs.readFile);
  return await readFile(filePath);
}

// 响应头 map
const responseType = {
  'text':{
    'Content-Type': 'text/plain;charset=utf-8'
  },
  'html':{
    'Content-Type': 'text/html'
  }
}
/**
 * 通用返回
 * @param {request} res 
 * @param {number} statusCode 
 * @param {responseType} type 
 * @param {*} body 
 */
const baseResponse = (res,statusCode,type,body) => {
  res.writeHead(statusCode,responseType[type])
  res.end(body)
}

http.createServer(async (req,res) => {
  // 流  request response
  const {url,method,headers} = req;
  if(url === '/' && method == 'GET'){
    const data = await getFile(resolve("../public/index.html")).catch(err => {
      console.error(err)
      baseResponse(res,500,'text',"500 服务异常!")
      return
    })
    baseResponse(res,200,'text/html',data)
  }
  else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
    // 获取 所有图片
    fs.createReadStream('.'+url).pipe(res)
  }
  else{
    baseResponse(res,400,'text','找不到资源!')
  }
})
.listen(port, () => {
  console.log(`current listening port is ${port}`)
})