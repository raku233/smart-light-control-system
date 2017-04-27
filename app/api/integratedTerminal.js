import fetch from 'isomorphic-fetch';
import { dataFetcher } from '../utils/dataFetcher';

const URL = {
    FETCH_SWITCHING_STATUS: '/manual_lamp_switching/get_status',
    UPLOAD_SWITCHING_STATUS: '/manual_lamp_switching/set_status',
    FETCH_ELECTRICAL_PARAMETER: '/electrical_parameter/get_status',
    FETCH_TIMECONTROL_INFO: '/lamp_switching_time/get_status',
    UPLOAD_TIMECONTROL_INFO: '/lamp_switching_time/set_status',
    FETCH_CURRENT_ALARM: '/current_warning/get_status'
};

export const fetchSwitchingStatus = dataFetcher(URL.FETCH_SWITCHING_STATUS);
export const uploadSwitchingStatus = dataFetcher(URL.UPLOAD_SWITCHING_STATUS);
export const fetchElectricalParameter = dataFetcher(URL.FETCH_ELECTRICAL_PARAMETER);
export const fetchTimeControlInfo = dataFetcher(URL.FETCH_TIMECONTROL_INFO);
export const uploadTimeControlInfo = dataFetcher(URL.UPLOAD_TIMECONTROL_INFO);
export const fetchCurrentAlarm = dataFetcher(URL.FETCH_CURRENT_ALARM);