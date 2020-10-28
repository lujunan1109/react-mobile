/*
 * @Author: your name
 * @Date: 2020-10-20 17:48:35
 * @LastEditTime: 2020-10-26 10:23:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-phone\my-app\src\config-overrides.js
 */
const { override, addLessLoader } = require('customize-cra')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    localIdentName: '[local]--[hash:base64:5]'
  })
)
