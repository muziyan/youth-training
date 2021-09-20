#!/usr/bin/env node
const program = require("commander")

// 策略模式
program.version(require("../package.json").version)
program.command('init <name>')
      .description('init project')
      .action(async (name) => {
        const init = require("../lib/init");
        await init(name)
      });
program.command("refresh")
      .description("refresh routes ...")
      .action(require("../lib/refresh.js"));

// 解析指令
program.parse(process.argv)

// console.log("hello cli ...")