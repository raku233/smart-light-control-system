'use strict';

const Koa = require('koa');

const
    port = 3000,
    isDev = process.env.NODE_ENV !== 'production',
    app = new Koa();

// import common middlewares
const
    convert = require('koa-convert'),
    bodyParser = require('koa-bodyparser'),
    historyApiFallback = require('koa-connect-history-api-fallback');
const
    staticFiles = require('./server/middlewares/static-files'),
    router = require('./server/middlewares/router');

if (isDev) {
    const
        webpack = require('webpack'),
        webpackDevConfig = require('./webpack.config.dev.js');

    const compiler = webpack(webpackDevConfig);

    // import middlewares for development
    const
        webpackDev = require('koa-webpack-dev-middleware'),
        webpackHot = require('koa-webpack-hot-middleware');

    // use middlewares
    app.use(historyApiFallback({
        verbose: false
    }));
    app.use(convert(webpackDev(compiler, {
        // public path should be the same with webpack config
        publicPath: webpackDevConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true
        }
    })));
    app.use(convert(webpackHot(compiler)));
    app.use(bodyParser());
    app.use(router());
    app.use(staticFiles('/', './build'));

    //start server
    app.listen(port, () => {
        console.log(`App(dev) is now running on port ${port}...`);
    });
} else {

    // use middlewares
    app.use(historyApiFallback({
        verbose: false
    }));
    app.use(bodyParser());
    app.use(router());
    app.use(staticFiles('/', './build'));

    //start server
    app.listen(port, () => {
        console.log(`App(production) is running at ${port}...`);
    });
}