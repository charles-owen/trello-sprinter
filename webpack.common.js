const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        TrelloSprinter: './index.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Trello Sprinter',
            filename: 'index.html',
            template: 'src/html/index.html',
            inject: 'head'
        }),
        new webpack.HotModuleReplacementPlugin()
    ], module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/env"]
                        ],
                        plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.png/,
                type: 'asset/inline'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};
