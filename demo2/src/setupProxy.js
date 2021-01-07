const {createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/g2',
      {
        target: 'https://view.inews.qq.com/',
        changeOrigin: true
      } 
    )
  )
};