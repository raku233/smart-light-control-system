import fetch from 'isomorphic-fetch';
import { parseParam } from '../utils/parser';

const URL = {
    FETCH_SWITCHING_STATUS: '/manual_lamp_switching/get_status'
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