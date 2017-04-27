import { combineReducers } from 'redux';

import deviceList, { loadDeviceList } from './device-list/redux';
import rodList, { loadRodList, loadViewData, uploadModalVisible } from './rod-list/redux';

export default combineReducers({
    deviceList,
    rodList
});

export const actions = {
    deviceListActions: {
        loadDeviceList,
    },
    rodListActions: {
        loadRodList,
        loadViewData,
        uploadModalVisible
    }
};