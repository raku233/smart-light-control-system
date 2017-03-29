'use strict';

let data = [{
    id: 'abc',
    title: 'every day',
    date: new Date().toString(),
    description: 'every day every night'
}, {
    id: 'bbc',
    title: 'every night',
    date: new Date().toString(),
    description: 'every night every day'
}];

const fn_sendArticles = async (ctx, next) => {
    const dataString = JSON.stringify(data);
    ctx.response.body = dataString;
};

module.exports = {
    'GET /articles': fn_sendArticles
};