const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// Rust does not run in the browser and we can't compile it to an executable file
// --> Rust needs to be compiled into a WebAssemly file. 
const WasmPackPugin = require("@wasm-tool/wasm-pack-plugin")

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
        }),
        // Needs to know where to find the Rust project
        new WasmPackPugin({
            // Will search for Cargo.toml -> should point to the root directory of the rust project, not to src
            crateDirectory: path.resolve(__dirname,'.')
        })
    ]

}