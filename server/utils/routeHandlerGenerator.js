const fetch = require('isomorphic-fetch');

/**
 * 参数处理函数（参数对象转化为字符串）
 * @param {Object} param 参数
 */
const parseParam = param => {
    let str_param = '';

    if (typeof param === 'object') {
        for (const key in param) {
            str_param += `${key}=${encodeURIComponent(param[key])}&`;
        }
        return str_param.substring(0, str_param.length - 1);
    }
};

/**
 * 参数过滤器
 * @param {Object} param 参数
 * @param {Array} keys 所需参数关键字
 */
const filterParam = (param, keys) => {
    if (!keys) return {};

    const filteredParam = Object.keys(param)
        .filter(key => keys.includes(key))
        .reduce((obj, key) => {
            obj[key] = param[key];
            return obj;
        }, {});

    return filteredParam;
};

/**
 * 数据请求函数生成器
 * @param {String} url 请求链接
 * @param {String} method 请求方法
 * @param {Object} param 请求参数
 */
const fetchData = (url, method, param) => {
    const dataParser = (data) => data.json(),
        parsedParam = parseParam(param);

    switch (method) {
    case 'get': {
        if (parsedParam) url += `?${parsedParam}`;
        return fetch(url).then(dataParser);
    }
    case 'post': {
        return fetch(url, {
            method: 'POST',
            body: parsedParam
        }).then(dataParser);
    }
    default: { return 0; }
    }
};

// 默认数据处理函数
const defaultDataHandler = ([data]) => { return JSON.stringify(data); };

// 默认参数处理函数
const defaultParamHandler = (param) => { return param; };

/**
 * 路由中间件处理函数生成器（享元模式）
 * @param {Object} commonAPI 公共API
 * @param {Array} specificAPI 特定功能API
 * @param {Function} dataHandler 服务端响应数据处理函数
 */
const routeHandlerGenerator = commonAPI => (specificAPI, paramHandler = defaultParamHandler, dataHandler = defaultDataHandler) => {
    return async (ctx, next) => {
        console.log('ctx.request.body',ctx.request.body);
        const reqParam = paramHandler(ctx.request.body),
            promises = [];

        for (const API of specificAPI) {
            const { method, param, requiredParamKeys } = API,
                url = commonAPI.rootURL + API.pathName;

            const assignedParam = Object.assign({}, filterParam(reqParam, requiredParamKeys), param);

            promises.push(fetchData(url, method, assignedParam));
        }

        const data = await Promise.all(promises)
            .then(values => {
                return values;
            });
            console.log(data);
        ctx.response.body = dataHandler(data);
    };
};

module.exports = routeHandlerGenerator;