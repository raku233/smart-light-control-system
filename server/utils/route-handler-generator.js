const fetch = require('isomorphic-fetch');

const parseParam = param => {
    let str_param = '';

    if(typeof param === 'object') {
        for(let key in param ) {
            str_param += `${key}=${param[key]}&`;
        }
        return str_param.substring(0, str_param.length - 1);
    }
};

const fetchData = (url, method, param) => {
    const dataParser = (data) => data.json();

    param = parseParam(param);

    switch(method) {
        case 'get': {
            if(param) url += `?${param}`;
            return fetch(url).then(dataParser);
        }
        case 'post': {
            return fetch(url, {
                method: 'POST',
                body: param
            }).then(dataParser);
        }
        default: { return; }
    }
};

//默认数据处理函数
const defaultDataHandler = (data) => { return data; };

//享元模式
const routeHandlerGenerator = common_api => (specific_api, dataHandler = defaultDataHandler) => {
    const method = specific_api.method,
        url = common_api.rootURL + specific_api.pathName;

    return async(ctx, next) => {
        const param = ctx.request.body || {};

        const data = await fetchData(url, method, param);
        ctx.response.body = dataHandler(data);
    };
};

module.exports = routeHandlerGenerator;