import { combineReducers } from 'redux';

const initialState = {
    error: false,
    devID: '1',
    groupName: '',
    groupType: '',
    timeStatusGroup: [
        { key: 1, group: '组控1', lampType: '0', startTime: '0:00', endTime: '0:00' },
        { key: 2, group: '组控2', lampType: '0', startTime: '0:00', endTime: '0:00' },
        { key: 3, group: '组控3', lampType: '0', startTime: '0:00', endTime: '0:00' },
        { key: 4, group: '组控4', lampType: '0', startTime: '0:00', endTime: '0:00' }
    ],
    switchingStatusGroup: [false, false, false, false, false, false, false, false],
    timeSettingConfig: {
        period: '时间段1',
        workPeriod: [],
        weekAvailable: false
    },
    lampSwitchingConfig: {
        mode: 'normal',
        isManualControl: false,
        isTimeControl: false
    },
    message: ''
};

export const LOAD_GROUPCONTROLSTATUS = 'LOAD_GROUPCONTROLSTATUS';
export const UPDATE_GROUPCONTROLSETTING = 'UPDATE_GROUPCONTROLSETTING';
export const UPDATE_ALLSWITCHSETTING = 'UPDATE_ALLSWITCHSETTING';
export const UPLOAD_GROUPTIMECONTROLSETTING = 'UPLOAD_GROUPTIMECONTROLSETTING';
export const UPLOAD_GROUPWEEKCONTROLSETTING = 'UPLOAD_GROUPWEEKCONTROLSETTING';
export const UPLOAD_GROUPSWITCHINGCONTROLSETTING = 'UPLOAD_GROUPSWITCHINGCONTROLSETTING';
export const UPLOAD_GROUPCONTROLSETTING_SUCESS = 'UPLOAD_GROUPCONTROLSETTING_SUCESS';
export const UPLOAD_GROUPCONTROLSETTING_ERROR = 'UPLOAD_GROUPCONTROLSTATUS_ERROR';

export function loadViewData(groupName) {
    return {
        type: LOAD_GROUPCONTROLSTATUS,
        payload: {
            groupName,
            groupType: groupName
        }
    };
}

export function updateViewData(status) {
    return {
        type: UPDATE_GROUPCONTROLSETTING,
        payload: {
            status
        }
    };
}

export function updateAllSwitchingSetting() {
    return {
        type: UPDATE_ALLSWITCHSETTING,
        payload: {
            switchingOption: [true, true, true, true, true, true, true, true]
        }
    };
}

export function uploadGroupTimeControlSetting() {
    return {
        type: UPLOAD_GROUPTIMECONTROLSETTING,
        payload: {}
    };
}

export function uploadGroupWeekControlSetting() {
    return {
        type: UPLOAD_GROUPWEEKCONTROLSETTING,
        payload: {}
    };
}

export function uploadGroupSwitchingControlSetting() {
    return {
        type: UPLOAD_GROUPSWITCHINGCONTROLSETTING,
        payload: {}
    };
}

export function uploadGroupControlSettingSuccess(message) {
    return {
        type: UPLOAD_GROUPCONTROLSETTING_SUCESS,
        payload: {
            message
        }
    };
}

export function uploadGroupControlSettingError(error) {
    return {
        type: UPLOAD_GROUPCONTROLSETTING_ERROR,
        payload: {
            error
        }
    };
}

function viewData(state = initialState, action) {
    switch (action.type) {
    case LOAD_GROUPCONTROLSTATUS: {
        return {
            ...state,
            error: false,
            groupName: action.payload.groupName,
            groupType: action.payload.groupType
        };
    }

    case UPDATE_GROUPCONTROLSETTING: {
        return {
            ...state,
            ...action.payload.status
        };
    }

    case UPDATE_ALLSWITCHSETTING: {
        return {
            ...state,
            switchingStatusGroup: action.payload.switchingOption
        };
    }

    case UPLOAD_GROUPTIMECONTROLSETTING: {
        return {
            ...state,
            error: false,
            ...action.payload.status
        };
    }

    case UPLOAD_GROUPWEEKCONTROLSETTING: {
        return {
            ...state,
            error: false,
            ...action.payload.status
        };
    }

    case UPLOAD_GROUPSWITCHINGCONTROLSETTING: {
        return {
            ...state,
            error: false,
            ...action.payload.status
        };
    }

    case UPLOAD_GROUPCONTROLSETTING_SUCESS: {
        return {
            ...state,
            message: action.payload.message
        };
    }

    case UPLOAD_GROUPCONTROLSETTING_ERROR: {
        return {
            ...state,
            error: true
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
    loadViewData,
    updateViewData,
    updateAllSwitchingSetting,
    uploadGroupTimeControlSetting,
    uploadGroupWeekControlSetting,
    uploadGroupSwitchingControlSetting
};