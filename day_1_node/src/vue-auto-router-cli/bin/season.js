#!/usr/bin/env node
const program = require("commander")

// 策略模式
program.version(require("../package.json").version)
program.command('init <name>')
      .description('init project')
      .action(require("./init"))
program.parse(process.argv)

// console.log("hello cli ...")