const path = require('path');
const uglify  = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const glob  = require('glob');
const PurifyCSSPlugin  = require('purifycss-webpack');

module.exports = {
    //devtool
    devtool: 'eval-source-map',
    //入口文件配置项
    entry: {
        entry: './src/index.js'
    },
    //出口文件配置项
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    //模块
    module:{
        rules:[{
            test: /\.js$/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },{
            test:/\.(jpg|png|gif)$/,
            use:[{
                loader:'url-loader',
                options:{
                    limit:500000
                }
            }]
        },{
            test: /\.scss$/,
            use:['style-loader','css-loader','postcss-loader','sass-loader']
        }]
    },
    // 插件
    plugins:[
        new uglify(),
        new htmlPlugin({
            minify:{
                removeAttributeQuotes: true,
            },
            hash: true,
            template: './src/index.html'
        })
        // new PurifyCSSPlugin({
        //     path: glob.sync(path.join(__dirname,'.src/*.html'))
        // })
    ],
    //配置webpack开发服务配置项
    devServer:{
        //设置基本目录
        contentBase:path.resolve(__dirname,'dist'),
        //ip地址
        host: 'localhost',
        //服务器压缩
        compress:true,
        //端口
        port: 1717
    }
}