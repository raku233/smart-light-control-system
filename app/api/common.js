import fetch from 'isomorphic-fetch';
import { dataFetcher } from '../utils/dataFetcher';

const URL = {
    FETCH_DEVICE_LIST: '/device_list',
    FETCH_DEVICE_GROUP: '/device_group'
};

export const fetchDeviceList = dataFetcher(URL.FETCH_DEVICE_LIST);
export const fetchDeviceGroup = dataFetcher(URL.FETCH_DEVICE_GROUP);