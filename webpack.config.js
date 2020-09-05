const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/home',  // Create default name `main.js` in dist/ folder if not define output

    /* Craete same filename for build into by default dist/ folder */
    // output:{
    //     filename:'bundle.js',
    // } 
    
    /** For multiple path entry and outputs */
    entry:{
        home:path.resolve(__dirname,'src/home'),
        vendor:path.resolve(__dirname,'src/vendor')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js'
    }
  };