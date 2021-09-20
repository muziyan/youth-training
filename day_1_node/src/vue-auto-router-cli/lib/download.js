const {promisify} = require("util")

module.exports.clone = async (repo,desc) => {
  const ora = require("ora")
  const download = promisify(require("download-git-repo"));
  const process = ora(`🚗下载...${desc}`)
  process.start();
  await download(repo,'','',(err) => {
    console.log(err)
    process.succeed()
  }).catch(err => {
    console.error(err)
  });
  process.succeed();
}