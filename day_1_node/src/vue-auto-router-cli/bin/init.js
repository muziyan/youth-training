const {promisify} = require("util")
const figlet = promisify(require("figlet"))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))

module.exports = async name => {
  clear()
  const data = await figlet('season Welcome',{
    font: 'Ghost',
    horizontalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  })
  log(data)
}