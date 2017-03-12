const fetch = require('isomorphic-fetch');

const parseParam = param => {
    let str_param = '';

    if (typeof param === 'object') {
        for (const key in param) {
            str_param += `${key}=${encodeURIComponent(param[key])}&`;
        }
        return str_param.substring(0, str_param.length - 1);
    }
};

const fetchData = (url, method, param) => {
    const dataParser = (data) => data.json();

    param = parseParam(param);

    console.log('param', param);

    switch (method) {
    case 'get': {
        if (param) url += `?${param}`;
        console.log('url', url);
        return fetch(url).then(dataParser);
    }
    case 'post': {
        return fetch(url, {
            method: 'POST',
            body: param
        }).then(dataParser);
    }
    default: { return 0; }
    }
};

// 默认数据处理函数
const defaultDataHandler = (data) => { return JSON.stringify(data); };

// 享元模式
const routeHandlerGenerator = common_api => (specific_api, dataHandler = defaultDataHandler) => {
    const method = specific_api.method,
        url = common_api.rootURL + specific_api.pathName,
        param = specific_api.param;

    return async (ctx, next) => {
        const req_param = Object.assign({}, ctx.request.body || {}, param);
        console.log(req_param);

        const data = await fetchData(url, method, req_param);
        console.log('data', data);
        ctx.response.body = dataHandler(data);
    };
};

module.exports = routeHandlerGenerator;