const Koa = require("koa");
const app = new Koa();


// 注册路由
const config =require("./dbConfig")
const {loadModel} = require("./framework/loader");
loadModel(config)(app)

const bodyParser = require("koa-bodyparser");
app.use(bodyParser())
const restful = require("./framework/router");
app.use(restful)


app.listen(3000,() => {
  console.log("current listening port 3000 ")
})