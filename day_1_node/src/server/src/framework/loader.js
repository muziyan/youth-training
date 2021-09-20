const fs = require("fs")
const path = require("path")
const mongoose = require("mongoose");

// 加载器 加载文件
/**
 * @param {*} dir  文件夹
 * @param {*} callback 回调方法
 */
function load(dir,callback){
  // 获取文件夹地址
  const pathUrl = path.resolve(__dirname,dir);
  // 获取文件夹
  const files = fs.readdirSync(pathUrl);
  files.forEach(filename => {
    filename = filename.replace(".js","");
    const file = require(`${pathUrl}/${filename}`)
    callback(filename,file)
  })
} 

const loadModel = config => app => {
  mongoose.connect(config.db.url,config.db.options)
  const conn = mongoose.connection
  conn.on('error',() => console.error('数据库连接失败!'))
  app.$model = {}
  load("../model",(filename,{schema}) => {
    console.log('load model:',filename,schema);
    app.$model[filename] = mongoose.model(filename,schema);
  });
}

module.exports = {
  loadModel
}