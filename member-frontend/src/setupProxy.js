const createProxyMiddleware = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:9595',
      changeOrigin: true,
    }),
  );
};
