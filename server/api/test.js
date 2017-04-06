const COMMON_API = require('./common.js');

const SPECIFIC_API = {
    GET_CS_TABLE: {
        method: 'get',
        pathName: '/Onoff/Get_cs_table',
        param: {},
        requiredParamKeys: []
    }
};

module.exports = {
    COMMON_API,
    SPECIFIC_API
};