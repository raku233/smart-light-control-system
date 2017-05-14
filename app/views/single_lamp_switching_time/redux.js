import { combineReducers } from 'redux';

const initialState = {
    lightNum: '时控灯1',
    statusGroup: [
        { key: '1', period: '1', timeRange: { startTime: '00:00', endTime: '00:00' }, luminance: { editable: false, value: 100 } },
        { key: '2', period: '2', timeRange: { startTime: '00:00', endTime: '00:00' }, luminance: { editable: false, value: 100 } },
        { key: '3', period: '3', timeRange: { startTime: '00:00', endTime: '00:00' }, luminance: { editable: false, value: 100 } },
        { key: '4', period: '4', timeRange: { startTime: '00:00', endTime: '00:00' }, luminance: { editable: false, value: 100 } },
    ]
};

export const UPDATE_TIMECONTROLINFO = 'UPDATE_TIMECONTROLINFO';
export const UPDATE_LIGHTNUM = 'UPDATE_LIGHTNUM';
export const UPLOAD_TIMECONTROLSETTING = 'UPLOAD_TIMECONTROLSETTING';
export const UPLOAD_TIMECONTROLSETTING_SUCCESS = 'UPLOAD_TIMECONTROLSETTING_SUCCESS';
export const UPLOAD_TIMECONTROLSETTING_ERROR = 'UPLOAD_TIMECONTROLSETTING_ERROR';

export function updateLightNum(lightNum) {
    return {
        type: UPDATE_LIGHTNUM,
        payload: {
            lightNum
        }
    };
}

export function updateViewData(statusGroup) {
    return {
        type: UPDATE_TIMECONTROLINFO,
        payload: {
            statusGroup
        }
    };
}

export function uploadTimeControlSetting() {
    return {
        type: UPLOAD_TIMECONTROLSETTING,
        payload: {
    
        }
    };
}

function viewData(state = initialState, action) {
    switch (action.type) {
    case UPDATE_TIMECONTROLINFO: {
        return {
            ...state,
            ...action.payload.statusGroup
        };
    }
    case UPDATE_LIGHTNUM: {
        return {
            ...state,
            ...action.payload.lightNum
        };
    }
    default: {
        return {
            ...state
        };
    }
    }
}

export default combineReducers({
    viewData
});

export const actions = {
    updateViewData,
    uploadTimeControlSetting,
    updateLightNum
};