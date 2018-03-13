const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');

const config = {
    entry: "./src/index.ts",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "public")
    },

    module: {
        rules: [
            { test: /\.ts?$/, loader: "ts-loader", exclude: [/node_modules/, /test/] },
            { test: /\.js?$/, loader: "babel-loader", exclude: [/node_modules/, /test/] }
        ]
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    plugins: [
        new ProgressBarPlugin()
    ],

    mode: process.env.MODE || 'development',

    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        compress: true,
        port: 1234
    }
};


module.exports = config;
