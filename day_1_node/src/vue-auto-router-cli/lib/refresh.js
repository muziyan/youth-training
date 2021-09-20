// 读文件列表
// 拼模板  模板渲染的方式
const fs = require("fs")
const handlebars = require('handlebars')
const chalk = require('chalk')

module.exports = async () => {
  const list = fs.readdirSync('./src/views')
                .filter(file => file !== 'Home.vue')
                .map(file => ({
                  name: file.replace('.vue','').toLowerCase(),
                  file: file
                }));

  /**
   * 
   * @param {*} meta 数据定义
   * @param {*} filepath 文件路径
   * @param {*} templatePath 模板路径
   */
  const compile = (meta,filepath,templatePath) => {
    // 判断模板是否存在
    if(fs.existsSync(templatePath)){
      // 读取模板数据
      const content = fs.readFileSync(templatePath).toString();
      // han
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(filepath,result);
      console.log(chalk.green(`${filepath} 创建成功!`))
    }
  }


    // 生成路由定义
    compile({list},'./src/router.js','./template/router.js.hbs');
    // 生成菜单
    compile({list},'./src/App.vue','./template/App.vue.hbs')
}