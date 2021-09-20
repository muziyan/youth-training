const barRequest = (res) => {
  baseResponse(res,400,'text','找不到资源!')
}

exports.module = (req,res) => {
  const {url,method} = req;

  const Home = require("home");

  const router = [
    {
      path:"/",
      method:"GET",
      component:Home
    }
  ];
  const callback = router.find(route => route.path === url && route.method === method)
  callback?.(req,res) || barRequest(res);

}