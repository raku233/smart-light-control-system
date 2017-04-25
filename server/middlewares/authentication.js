'use strict';

const MysqlSession = require('koa-mysql-session');

let store = new MysqlSession({
    user: 'root',
    password: '12345',
    database: 'smart_light_control_system',
    host: '127.0.0.1',
});

let cookie = {
    maxAge: '', // cookie有效时长
    expires: '',  // cookie失效时间
    path: '', // 写cookie所在的路径
    domain: '', // 写cookie所在的域名
    httpOnly: '', // 是否只用于http请求中获取
    overwrite: '',  // 是否允许重写
    secure: '',
    sameSite: '',
    signed: '',
};

const account = {
    userName: 'admin',
    password: '12345'
};

function authenticateAccess() {
    return async (ctx, next) => {
        switch (true) {
        case ctx.request.url === '/': {
            if (!ctx.cookies.get('userType')) {
                ctx.cookies.set(
                'userType',
                'visitor',
                    {
                        domain: 'localhost',
                        path: '/',
                        maxAge: 10 * 60 * 1000,
                        expires: new Date('2018-01-01'),
                        httpOnly: false,
                        overwrite: true
                    });
            }

            break;
        }

        case ctx.request.url === '/login': {
            if (ctx.session && ctx.session.isLogin) break;
            const userName = (ctx.request.body && ctx.request.body.userName) || '';
            const pwd = (ctx.request.body && ctx.request.body.password) || '';
            const isAuth = userName === account.userName && pwd === account.password;

            if (isAuth) {
                if (!ctx.session) {
                    ctx.session = {
                        user_id: Math.random().toString(36).substr(2),
                        isLogin: true
                    };
                }
                ctx.session.isLogin = true;
                ctx.cookies.set(
                    'userType',
                    'admin',
                    {
                        domain: 'localhost',
                        path: '/',
                        maxAge: 10 * 60 * 1000,
                        expires: new Date('2018-01-01'),
                        httpOnly: false,
                        overwrite: true
                    }
                );
                ctx.response.body = JSON.stringify({ isLogin: true });
            } else if (userName && pwd && !isAuth) {
                ctx.response.body = JSON.stringify({
                    isLogin: false,
                    error: {
                        message: '登录失败，账号或密码错误'
                    } });
            }

            break;
        }

        case ctx.request.url === '/logout': {
            ctx.session.isLogin = false;
            console.log(ctx.session);
            break;
        }

        default: {
            break;
        }
        }

        const sessionID = ctx.cookies.get('SESSION_ID') || '';
        if (ctx.session && ctx.session.isLogin) {

            console.log('You have logined!');
        }
        await next();
    };
}

module.exports = {
    authenticateAccess,
    store,
    cookie
};