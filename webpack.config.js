const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:'development',
    entry:{
        home:path.resolve(__dirname,'src/home')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(s*)css$/,
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            },
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin()
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html'
          })
    ]
  };