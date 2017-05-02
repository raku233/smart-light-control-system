import { combineReducers } from 'redux';

import deviceList, { loadDeviceList } from './device-list/redux';
import deviceGroup, { loadDeviceGroup } from './device-group/redux';
import rodList, { loadRodList, loadViewData, uploadModalVisible, uploadSelectedRods } from './rod-list/redux';

export default combineReducers({
    deviceList,
    deviceGroup,
    rodList
});

export const actions = {
    deviceListActions: {
        loadDeviceList,
    },
    deviceGroupActions: {
        loadDeviceGroup
    },
    rodListActions: {
        loadRodList,
        loadViewData,
        uploadModalVisible,
        uploadSelectedRods
    }
};