'use strict';

var
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build'),
    PUBLIC_PATH = 'http://localhost:3000/',
    HOTMIDDLEWARE_SCRIPT = 'webpack-hot-middleware/client?reload=true';


module.exports = {
    entry: {
        'index': [path.resolve(APP_PATH, 'app.jsx'), HOTMIDDLEWARE_SCRIPT]
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_PATH,
        publicPath: PUBLIC_PATH
    },

    devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: APP_PATH
        },{
            test: /\.(png|jpg\gif)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[ext]?[hash:8]'
        }, {
            test: /\.scss$/,
            loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Smart Light Control System'
        })
    ]
};