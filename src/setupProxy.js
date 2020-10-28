/*
 * @Author: your name
 * @Date: 2020-10-20 20:47:37
 * @LastEditTime: 2020-10-20 21:43:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\setupProxy.js
 */
const {createProxyMiddleware} = require("http-proxy-middleware")

// module.exports = function(app) {
    // app.use("/api",proxy({
    //     "target": "https://data.miaov.com/",
    //     "secure": true,
    //     "changeOrigin": true,
    //     "pathRewrite": {
    //         "^/miaov": ""
    //     },
    //     "cookieDomainRewrite": "https://data.miaov.com/"
    // }))
    module.exports = function (app) {
        app.use(createProxyMiddleware('/api',
            {
                target: 'https://data.miaov.com/',
                pathRewrite: {
                    '^/api': '',
                },
                changeOrigin: true,
                secure: false, // 是否验证证书
                ws: true, // 启用websocket
            }
        ));
    }
// }