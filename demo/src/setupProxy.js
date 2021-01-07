// 引入方式变为：
const {createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/g2',
      {
        target: 'https://view.inews.qq.com/',
        // target:'https://www.bilibili.com',
        changeOrigin: true
      }
    )
  )
};