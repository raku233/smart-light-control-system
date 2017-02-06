'use strict';

const client = require('../utils/http-client');

const rootURL = 'http://183.233.174.11:10005';
let url = rootURL + '/Onoff/Get_cs_table';
const param = new Map();
param.set('Dev_id', '103');

const fn_fetchData = async(ctx, next) => {
    var a = {
        root: '123'
    };
    var b = {
        interface: [
            {type: '111'}
        ]
    };
    var c = {
        interface: [
            {type: '222', name: 'john'},
            {number: '111'}
        ]
    };
    var api = Object.assign([], b.interface, c.interface);
    var result = {...a, interface: [...b.interface, ...c.interface]};
    console.log('result', result);
    let data = await client.fetchData(url, param);
    console.log('data', data);
    ctx.response.body = data;
};

module.exports = {
    'GET /test': fn_fetchData
};