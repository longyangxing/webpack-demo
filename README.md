# webpack-demo
> webpack demo 
> 参考 [webpack中文文档](https://doc.webpack-china.org/) [Webpack3.X版 成神之路](http://jspang.com/2017/09/16/webpack3-2/)

## webpack作用
> 打包： 可以将多个javascript文件打包成一个文件，减少服务器压力和下载带宽</br>
> 转化： 把拓展言语转换成普通的JavaScript，让浏览器顺利运行</br>
> 优化： 前端变得越来越复杂后，性能也会遇到问题，而webpack也开始肩负起优化和提升性能的责任</br>

![avatar](https://github.com/longyangxing/webpack-demo/blob/master/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180309140327.png)

## 配置
> 实战配置一个webpack
### 配置文件： 入口和出口
#### webpack.config.js
```js
module.exports = {
   //入口文件的配置项
    entry:{},
    //出口文件的配置项
    output:{},
    //模块：例如解读CSS,图片如何转换，压缩
    module:{},
    //插件，用于生产模版和各项功能
    plugins:[],
    //配置webpack开发服务功能
    devServer:{}
}
```
* entry： 配置入口文件地址，可以是单一入口也可以是多入口
* output： 配置出口文件地址，仔webpack2.X版本后，支持多出口配置
* module： 配置模块，主要是解析CSS和图片转换压缩等功能
* plugins：配置插件，根据你需要配置不同的功能插件
* devServer： 配置开发服务功能
#### 入口配置
```js
module.exports = {
   //入口文件的配置项
    entry:'./src/index.js'
}
```
#### 出口配置
头部引入
```js
const path = require('path');
```
```js
module.exports = {
    // 入口文件的配置项
    entry:'./src/index.js',
    // 出口文件配置项
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
}
```
* output: 文件输出路径
* filename： 输出文件名字
* path.resolve(__dirname,'dist') 获取项目的绝对路径

#### 配置多入口
```js
const path = require('path');
module.exports={
    //入口文件的配置项
    entry:{
        entry:'./src/entry.js',
        //这里我们又引入了一个入口文件
        entry2:'./src/entry2.js' 
       },
    //出口文件的配置项
    output:{
        //输出的路径，用了Node语法
        path:path.resolve(__dirname,'dist'),
        //输出的文件名称
        filename:'[name].js'
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module:{},
    //插件，用于生产模版和各项功能
    plugins:[],
    //配置webpack开发服务功能
    devServer:{}
}
```
### 服务和热更新
> npm install webpack-dev-server --save-dev
```js
  // webpack.config.js
  
  devServer:{
    // 设置基本目录结构
    contentBase:[ath.resolve(__dirname,'dist'),
    // 服务器IP地址，可以用IP地址也可以用localhost
    host:'localhost',
    //服务端压缩
    compress：true,
    // 配置端口号
    port: 1717
  }
```
* contentBase: 配置服务器基本运行路径，用于找到程序打包
* host： 服务器运行地址，建议使用本机IP
* compress： 服务端压缩选型，一般设置为开启
* port： 服务运行端口

```js
  // package.json
  "scripts":{
    "server": "webpack-dev-server"
  }
```
> 终端输入npm run server，输入http://localhost:1717

