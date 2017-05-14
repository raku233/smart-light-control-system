var webServerConfig = {
        name: 'web-server',
        env: {
            NODE_ENV: 'development'
        }
    },
    onlineServerConfig = {
        name: 'online-server',
        env: {
            NODE_ENV: 'production'
        }
    },
    apiServerConfig = {
        name: 'api-server',
        env: {
            NODE_ENV: 'api'
        }
    };

var commonConfig = {
    script: './start.js',
    watch: ['server', 'app.js', 'webpack.config.js'],
    ignore_watch: ['node_modules', 'logs', 'app', 'build'],
    error_file: './logs/error.log',
    out_file: './logs/out.log',
};

module.exports = {
    apps: [
        Object.assign(webServerConfig, commonConfig),
        Object.assign(apiServerConfig, commonConfig),
        Object.assign(onlineServerConfig, commonConfig)
    ]
};