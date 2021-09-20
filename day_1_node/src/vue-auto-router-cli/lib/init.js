const {promisify} = require("util")
const figlet = promisify(require("figlet"))
const clear = require('clear')
const chalk = require('chalk')
const { clone } = require("./download")
const log = content => console.log(chalk.green(content))

const {open} = require("open");

const asyncSpawn = async (...args) => {
  // 同步 promise
  // 输出流 子进程的流合并到主进程
  const {spawn} = require("child_process");
  return new Promise(resolve => {
    // 启动子进程
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    process.on('close',() => {
      resolve()
    })
  })
}

module.exports = async name => {
  clear()
  const data = await figlet('season Welcome',{
    font: 'Ghost',
    horizontalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  })
  log(data)
  
  // project templates
  log(`🚀创建项目${name}`)
  await clone('https://github.com/su37josephxia/vue-template',name).catch(err => {
    log(err)
  })

  // 下载依赖 npm i or yarn 
  // 子进程
  log(`安装依赖...`)
  await asyncSpawn('npm',['install'],{cwd: `./${name}`}) 
  log(chalk.green(
    `
    ========
    安装完成
    cd ${name}
    yarn serve or npm run serve
    ========
    `
  ))

  open('http://loalhost:8080');
  await asyncSpawn('npm',['run','serve'],{cwd: `./${name}`})
}