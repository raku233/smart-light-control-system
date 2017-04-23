import fetch from 'isomorphic-fetch';
import { dataFetcher } from '../utils/dataFetcher';

const URL = {
    FETCH_TERMINAL_MESSAGE: '/single_alarm_terminal_message/get_status',
    FETCH_WARNING_INFO: '/single_lamp_warning_info/get_status'
};

export const fetchTerminalMessage = dataFetcher(URL.FETCH_TERMINAL_MESSAGE);
export const fetchWarningInfo = dataFetcher(URL.FETCH_WARNING_INFO);