import fetch from 'isomorphic-fetch';
import { parseParam } from '../utils/parser';

const URL = {
    FETCH_DEVICE_LIST: '/device_list'
};

export async function fetchDeviceList(param) {
    return await fetch(URL.FETCH_DEVICE_LIST, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: parseParam(param)
    }).then(res => res.json());
}