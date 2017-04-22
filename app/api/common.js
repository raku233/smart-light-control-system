import fetch from 'isomorphic-fetch';
import { dataFetcher } from '../utils/dataFetcher';

const URL = {
    FETCH_DEVICE_LIST: '/device_list'
};

export const fetchDeviceList = dataFetcher(URL.FETCH_DEVICE_LIST);