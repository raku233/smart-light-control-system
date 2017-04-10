import { combineReducers } from 'redux';

import manualSwitchingStatus, { loadManualSwitchingStatus } from '../../components/manual-lamp-switching/switching-console/redux';

export default combineReducers({
    manualSwitchingStatus
});

export const actions = {
    loadManualSwitchingStatus
};