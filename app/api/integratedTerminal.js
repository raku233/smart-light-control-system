import fetch from 'isomorphic-fetch';
import { parseParam } from '../utils/parser';

const URL = {
    FETCH_SWITCHING_STATUS: '/manual_lamp_switching/get_status',
    UPLOAD_SWITCHING_STATUS: '/manual_lamp_switching/set_status',
    FETCH_ELECTRICAL_PARAMETER: '/electrical_parameter/get_status'
};

export async function fetchSwitchingStatus(param) {
    return await fetch(URL.FETCH_SWITCHING_STATUS, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: parseParam(param)
    }).then(res => res.json());
}

export async function uploadSwitchingStatus(param) {
    return await fetch(URL.UPLOAD_SWITCHING_STATUS, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: parseParam(param)
    }).then(res => res.json());
}

export async function fetchElectricalParameter(param) {
    return await fetch(URL.FETCH_ELECTRICAL_PARAMETER, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: parseParam(param)
    }).then(res => res.json());
}