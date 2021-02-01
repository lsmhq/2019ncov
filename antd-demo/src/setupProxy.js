const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "", // 服务器域名
      changeOrigin: true
    })
  );
};