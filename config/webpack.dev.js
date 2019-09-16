const path = require('path');

module.exports = {
    entry: {
        main: ["../src/index.js"]
    },
    mode: "development",
    output: {
        fileName: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/'
    },
    devServer: {
        contentBase: "dist"
    }
}