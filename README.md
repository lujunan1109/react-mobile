
## 简介
此项目是一个移动端的架子
技术栈 react react-router hooks  less redux axios
ui框架 antd-mobile（官方文档主流配置按需加载）  使用 babel-plugin-import插件
然后在json中加入
<code>
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd-mobile",
          "style": "css"
        }
      ]
    ]
    </code>

其他的部分

alias配置（别名） @
webpack配置 less (注意less-loader配置顺序会导致配置失效-搞了老半天)
css-module的开启处理模块命名冲突（样式被加载为hash随机字符）注意css命名 【styles-module.css】注意写module
适配方案引用淘宝手淘 lib-flexible，然后在webpack配置参数
代码分割推荐：现在react 做 code-split 推荐用官方的 Suspense / lazy https://reactjs.org/docs/code-splitting.html#reactlazy

### 运行
本地开发环境 `npm run install 后 npm start
线上生成环境

```
npm run install
npm run build

 参考链接:
https://blog.csdn.net/weixin_43330752/article/details/96301306


