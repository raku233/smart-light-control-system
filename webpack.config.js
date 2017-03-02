/**
* Module dependencies.
*/

var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

/**
* Configuration section.
*/

// Development environment indicator.
var isDev = process.env.NODE_ENV !== 'production';

// Webpack setting.
var options = {
    // Assets source path.
    srcPath: path.join(__dirname, 'app'),
    // Assets build path.
    buildPath: path.join(__dirname, 'build'),
    // Assets server public address.
    publicPath: isDev ? 'http://localhost:3000/' : '/',
    // Hotmiddleware script
    script: isDev ? 'webpack-hot-middleware/client?reload=true' : null
};

/**
* Public Interface.
*/

module.exports = {
    entry: isDev
            ? { app: ['babel-polyfill', path.resolve(options.srcPath, 'app.dev.js'), options.script] }
            : ['babel-polyfill', path.resolve(options.srcPath, 'app.prod.js')],
    output: {
        filename: 'bundle.js',
        path: options.buildPath,
        publicPath: options.publicPath
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.sass']
    },

    devtool: isDev ? 'eval-source-map' : 'cheap-source-map',
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            include: options.srcPath
        }, {
            test: /\.(png|jpg|gif)$/,
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
        new HtmlWebpackPlugin({
            title: 'Smart Light Control System'
        }),
        isDev
            ? new webpack.HotModuleReplacementPlugin()
            : null,
        isDev
            ? new webpack.NoErrorsPlugin()
            : null,
        !isDev
            ? new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            })
            : null,
        !isDev
            ? new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                }
            })
            : null
    ].filter(Boolean)
};