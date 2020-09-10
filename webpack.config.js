const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:'development',
    entry:{
        home:path.resolve(__dirname,'src/')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 3001
    },
    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
            {
                test:/\.(s*)css$/,
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
  };