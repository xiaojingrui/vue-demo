// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');
module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        index: path.resolve(__dirname, '../app/index/index.js'),
        news: path.resolve(__dirname, '../app/news/news.js'),
        vendors: [
            'Vue'
        ]
    },
    // 输出配置
    output: {
    // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output/static'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/, 
                loader: 'vue'   
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: 'app/index/index.html',
        //     template: path.resolve(__dirname, '../app/index/index.html'),
        //     inject: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'app/news/news.html',
        //     template: path.resolve(__dirname, '../app/news/news.html'),
        //     inject: true
        // })
    ]
}