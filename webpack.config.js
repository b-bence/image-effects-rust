const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: './public/main.js',
    // Bundle will be stored here
    output: {
        // Full system path is needed. __dirname: path of the folder where the current js file resides. 
        // 'dist': this is where webpack will place our files
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        // the plugin is for processing html files with webpack
        // by default it generates an html file -> overwrite it
        new HTMLWebpackPlugin({
            // Has to be a relative path
            template: './public/index.html'
        })
    ]

}