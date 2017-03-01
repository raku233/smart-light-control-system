'use strict';

const Koa = require('koa');

const
    port = 3000,
    mode = process.env.NODE_ENV,
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

switch (mode) {
    case 'development': {
        const
            webpack = require('webpack'),
            webpackConfig = require('./webpack.config.js');

        const compiler = webpack(webpackConfig);

        // import middlewares for development
        const
            webpackDev = require('koa-webpack-dev-middleware'),
            webpackHot = require('koa-webpack-hot-middleware');

        // use middlewares
        app.use(historyApiFallback({
            verbose: false,
            rewrites: [{
                from: /^\/api\/.*$/,
                to(context) {
                    return context.parsedUrl.pathname.substring(4);
                }
            }]
        }));
        app.use(convert(webpackDev(compiler, {
            // public path should be the same with webpack config
            publicPath: webpackConfig.output.publicPath,
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

        break;
    }
    case 'production': {

        // use middlewares
        app.use(historyApiFallback({
            verbose: false,
            rewrites: [{
                from: /^\/api\/.*$/,
                to(context) {
                    return context.parsedUrl.pathname.substring(4);
                }
            }]
        }));
        app.use(bodyParser());
        app.use(router());
        app.use(staticFiles('/', './build'));

        //start server
        app.listen(port, () => {
            console.log(`App(production) is running at ${port}...`);
        });

        break;
    }
    case 'api': {

        // import middlewares for api
        const rewrite = require('koa-rewrite');

        // use middlewares
        app.use(rewrite(/^\/api\/(\w+)/, '/$1'));
        app.use(bodyParser());
        app.use(router());

        //start server
        app.listen(port, () => {
            console.log(`App(api) is running at ${port}...`);
        });

        break;
    }
    default: { break; }
}
