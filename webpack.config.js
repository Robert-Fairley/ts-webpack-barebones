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
            { test: /\.ts?$/, loader: "awesome-typescript-loader", exclude: [/node_modules/, /test/] },
            { test: /\.js?$/, loader: "babel-loader", exclude: [/node_modules/, /test/] }
        ]
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    plugins: [
        new ProgressBarPlugin()
    ],

    mode: process.env.MODE || 'development'
};


module.exports = config;
