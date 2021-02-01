const {createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/api',
      {
        target: 'http://115.28.139.125:8088',
        // target:'https://www.bilibili.com',
        changeOrigin: true
      }
    )
  )
};