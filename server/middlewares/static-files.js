/* middleware for dealing with static files */

'use strict';

const
    path = require('path'),
    mime = require('mime'),
    fs = require('mz/fs');

// url: 类似于'/static/'
// dir: 类似于 __dirname + '/static'
function staticFiles(url, dir) {
    return async (ctx, next) => {
        let rpath = ctx.request.path;
        // 判断是否以指定的url开头
        if(rpath.startsWith(url)) {
            // 获取文件完整路径
            let fpath = path.join(dir, rpath.substring(url.length) || 'index.html');
            // 判断文件是否存在
            if(await fs.exists(fpath)) {
                // 查找文件的mime：
                ctx.response.type = mime.lookup(fpath);
                // 读取文件内容并赋值给response.body
                ctx.response.body = await fs.readFile(fpath);
            } else {
                // 文件不存在
                ctx.response.status = 404;
            }
        } else {
            // 不是指定前缀的url,继续处理下一个middleware
            await next();
        }
    };
}

module.exports = staticFiles;