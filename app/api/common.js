import fetch from 'isomorphic-fetch';
import { dataFetcher } from '../utils/dataFetcher';

const URL = {
    LOGIN: '/login',
    LOGOUT: '/logout',
    FETCH_DEVICE_LIST: '/device_list'
};

export const login = dataFetcher(URL.LOGIN);
export const logout = dataFetcher(URL.LOGOUT);
export const fetchDeviceList = dataFetcher(URL.FETCH_DEVICE_LIST);