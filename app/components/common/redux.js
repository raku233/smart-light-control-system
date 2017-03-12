import { combineReducers } from 'redux';

import deviceList, { loadDeviceList } from './device-list/redux';

export default combineReducers({
    deviceList
});

export const actions = {
    deviceListActions: {
        loadDeviceList
    }
};