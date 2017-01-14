'use strict';

let data = [{
    author: 'Pete Hunt',
    text: 'This is one comment.'
}, {
    author: 'Jordon Walke',
    text: 'This is another comment.'
}];

const fn_sendComment = async(ctx, next) => {
    const dataString = JSON.stringify(data);
    ctx.response.body = dataString;
};

const fn_commitComment = async(ctx, next) => {
    const
        req_data = ctx.request.body.data || '',
        comment = JSON.parse(req_data);
    console.log(`Post new comment: ${comment}`);
    data = data.concat([comment]);
    ctx.response.body = data;
};

module.exports = {
    'GET /comment': fn_sendComment,
    'POST /comment': fn_commitComment
};