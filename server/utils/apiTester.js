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
const param = {Dev_id: '1', 'rod_num[0]': '1-1', cmd_type: '设置时控灯1', L1_time1: '13:00', L1_time2: '18:00', L1_Lux12: '80', L2_time1: '13:00', L2_time2: '18:00', L2_Lux12: '90', L3_time1: '00:00', L3_time2: '00:00', L3_Lux12: '100', L4_time1: '00:00', L4_time2: '00:00', L4_Lux12: '100'};
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