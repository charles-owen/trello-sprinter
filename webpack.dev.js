const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'trello-sprinter.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'TrelloSprinter',
        libraryTarget: 'umd',
        libraryExport: "default",
        publicPath: '/dist/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9001,
        hot: true,
        inline: true,
        publicPath: '/dist/',
        index: '/dist/index.html'
    }
});
