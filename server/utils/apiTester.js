'use strict';

const polyfill = require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

const parseParam = param => {
    if (typeof param === 'object') {
        return JSON.stringify(param);
    }
};

const rootURL = 'http://localhost:3000';
const pathName = '/electric_parameter_get';
const param = { Dev_id: '399' };
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