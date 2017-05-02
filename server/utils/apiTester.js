'use strict';

const polyfill = require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

const parseParam = param => {
    if (typeof param === 'object') {
        return JSON.stringify(param);
    }
};

const rootURL = 'http://localhost:3000';
const pathName = '/single_lamp_dimming_time_control_forced_switch/set_status';
const param = { devID: '1', rodNum: ['1-1'], cmdType: '设置时控灯1', timeSetting: [{ startTime: '13:00', endTime: '18:00', lux: '80' }, { startTime: '13:00', endTime: '18:00', lux: '80' }, { startTime: '13:00', endTime: '18:00', lux: '80' }, { startTime: '13:00', endTime: '18:00', lux: '80' }] };
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