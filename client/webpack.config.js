const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
    entry: SRC_DIR + "\\app/\\index.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/index.html',
                to: './index.html'
            },
            {
                from: './src/style.css',
                to: './style.css'
            }
        ])
    ]
};

module.exports = config;