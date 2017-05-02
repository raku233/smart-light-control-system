import { combineReducers } from 'redux';

import deviceList, { loadDeviceList } from './device-list/redux';
import rodList, { loadRodList, loadViewData, uploadModalVisible, uploadSelectedRods } from './single-lamp-parameter-table/redux';

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
        uploadModalVisible,
        uploadSelectedRods
    }
};