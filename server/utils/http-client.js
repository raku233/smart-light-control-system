'use strict';

const $ = require('node-httpclient');

const parseParam = param => {
    let str = '';
    for(var [ key, value ] of param) {
        str +=`${key}=${value}&`
    }
    return str.substring(0, str.length - 1);
};

const fetchData = (url, param = undefined) {
    // url预处理
    url = !param ? url : `${url}?${parseParam(param)}`;

    return new Promise((resolve, reject) => {
        $.get(url, (data, status) => {
            if(status == 200 && data) {
                resolve(data);
            } else {
                reject(null);
            }
        });
    });
};

module.exports = {
    fetchData: fetchData
};