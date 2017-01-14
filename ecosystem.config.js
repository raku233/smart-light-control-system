module.exports = {
    apps: [{
        name: 'server',
        script: './start.js',
        watch: ['server', 'app.js', 'webpack.config.dev.js'],
        ignore_watch: ['node_modules', 'logs', 'app', 'build'],
        error_file: './logs/error.log',
        out_file: './logs/out.log',
        env: {
            'NODE_ENV': 'development'
        }
    }]
};