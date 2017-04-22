import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false,
    devID: '',
    period: '时间段1',
    statusGroup: [],
    timeSettingConfig: {},
    lampSwitchingConfig: {}
};

export const LOAD_GROUPCONTROLSTATUS = 'LOAD_GROUPCONTROLSTATUS';
export const LOAD_GROUPCONTROLSTATUS_SUCESS = 'LOAD_GROUPCONTROLSTATUS_SUCESS';
export const LOAD_GROUPCONTROLSTATUS_ERROR = 'LOAD_GROUPCONTROLSTATUS_ERROR';

export function loadViewData(deviceInfo) {
    const { devID } = deviceInfo || {};
    return {
        type: LOAD_GROUPCONTROLSTATUS,
        payload: {
            Dev_id: devID || ''
        }
    };
}

function viewData(state = initialState, action) {
    switch (action.type) {
    case LOAD_GROUPCONTROLSTATUS: {
        return {
            ...state,
            loading: true,
            error: false,
            devID: action.payload.Dev_id || state.devID
        };
    }
    default: {
        return state;
    }
    }
}

export default combineReducers({
    viewData
});

export const actions = {
    loadViewData
};