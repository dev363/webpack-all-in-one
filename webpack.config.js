const path = require('path');

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
                // test:/\.css$/,
                test:/\.(s*)css$/,  // Forh both Css, Scss files
                // use:['style-loader','css-loader','sass-loader']
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            },
        ]
    }
  };