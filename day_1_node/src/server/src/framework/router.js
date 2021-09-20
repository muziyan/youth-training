const router = require('koa-router')();

const {
  init,get,create,update,del,list
} = require("./api")

router.get("/api/:list/:id",init,list);
router.get("/api/:list",init,get);
router.post("/api/:list",init,create);
router.put("/api/:list/:id",init,update);
router.delete("/api/:list/:id",init,del);

module.exports = router.routes()