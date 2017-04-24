'use strict';

const polyfill = require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

const parseParam = param => {
    if (typeof param === 'object') {
        return JSON.stringify(param);
    }
};

const rootURL = 'http://localhost:3000';
const pathName = '/single_param_history_query/get_status';
const param = { Dev_id:399,begin_date_str:"2017-4-22",end_date_str:"2017-4-23",CurrentPageIndex:0,pageSize:0,rod_num:"1-1",chk_I_time:true,BeginH:5,endH:7,chk_I_zero:false,chk_I_not_zero:false,chk_U_zero:false,chk_U_not_zero:false}; 
const url = rootURL + pathName ;

fetch(url, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: parseParam(param)
}).then(res => {
    return res.json();
}).then(value => {
    console.log('response', value);
});