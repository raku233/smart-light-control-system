'use strict';

const polyfill = require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

const parseParam = param => {
    if (typeof param === 'object') {
        return JSON.stringify(param);
    }
};

const rootURL = 'http://localhost:3000';
const pathName = '/current_warning/get_status';
const param = {log_name: 'admin', log_pass: 'changhe123' , sn_node_mode: '1'};
const url = rootURL + pathName;

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