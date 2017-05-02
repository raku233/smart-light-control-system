import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false,
    rangeDate: [],
    devID: '',
    singleFaultStatus: [],
    singleParamStatus: [],
    statusGroup: []
};

export const UPLOAD_RANGEDATE = 'LOAD_RANGEDATE';
export const LOAD_DEVICEID = 'LOAD_DEVICEID';
export const LOAD_DEVICEID_SUCCESS = 'LOAD_DEVICEID_SUCCESS';
export const LOAD_DEVICEID_ERROR = 'LOAD_DEVICEID_ERROR';
export const LOAD_SINGLEFAULTSTATUS = 'LOAD_SINGLEFAULTSTATUS';
export const LOAD_SINGLEFAULTSTATUS_SUCCESS = 'LOAD_SINGLEFAULTSTATUS_SUCCESS';
export const LOAD_SINGLEFAULTSTATUS_ERROR = 'LOAD_SINGLEFAULTSTATUS_ERROR';
export const LOAD_SINGLEPARAMSTATUS = 'LOAD_SINGLEPARAMSTATUS';
export const LOAD_SINGLEPARAMSTATUS_SUCCESS = 'LOAD_SINGLEPARAMSTATUS_SUCCESS';
export const LOAD_SINGLEPARAMSTATUS_ERROR = 'LOAD_SINGLEPARAMSTATUS_ERROR';

export function uploadRangeDate(rangeDate) {
    return {
        type: UPLOAD_RANGEDATE,
        payload: {
            rangeDate
        }
    };
}

export function loadViewData(deviceInfo) {
    const { devID } = deviceInfo || {};
    return {
        type: LOAD_DEVICEID,
        payload: {
            Dev_id: devID || ''
        }
    };
}

export function loadViewDataSuccess(statusGroup) {
    return {
        type: LOAD_DEVICEID_SUCCESS,
        payload: {
            statusGroup
        }
    };
}

export function loadViewDataError(error) {
    return {
        type: LOAD_DEVICEID_ERROR,
        payload: {
            error
        }
    };
}

export function loadSingleFaultStatus(devID, rangeDate) {
    return {
        type: LOAD_SINGLEFAULTSTATUS,
        payload: {
            Dev_id: devID || '',
            rangeDate
        }
    };
}

export function loadSingleFaultStatusSuccess(singleFaultStatus) {
    return {
        type: LOAD_SINGLEFAULTSTATUS_SUCCESS,
        payload: {
            singleFaultStatus
        }
    };
}

export function loadSingleFaultStatusError(error) {
    return {
        type: LOAD_SINGLEFAULTSTATUS_ERROR,
        payload: {
            error
        }
    };
}

export function loadSingleParamStatus(devID, rangeDate, electricOption) {
    return {
        type: LOAD_SINGLEPARAMSTATUS,
        payload: {
            Dev_id: devID,
            rangeDate,
            electricOption,
        }
    };
}

export function loadSingleParamStatusSuccess(data) {
    return {
        type: LOAD_SINGLEPARAMSTATUS_SUCCESS,
        payload: {
            data
        }
    };
}

export function loadSingleParamStatusError(error) {
    return {
        type: LOAD_SINGLEPARAMSTATUS_ERROR,
        payload: {
            error
        }
    };
}

function viewData(state = initialState, action) {
    switch(action.type) {
    case LOAD_DEVICEID: {
        return {
            ...state,
            loading: false,
            error: false,
            devID: action.payload.Dev_id || state.devID
        };
    }
    case LOAD_DEVICEID_SUCCESS: {
        return {
            ...state,
            statusGroup: action.payload.statusGroup.statusGroup
        };
    }
    case LOAD_DEVICEID_ERROR: {
        return {
            ...state,
            error: true
        };
    }
    case UPLOAD_RANGEDATE: {
        return {
            ...state,
            loading: false,
            error: false,
            rangeDate: action.payload.rangeDate || state.rangeDate
        };
    }
    case LOAD_SINGLEFAULTSTATUS: {
        return {
            ...state,
            loading: true,
            error: false,
            devID: action.payload.Dev_id || state.devID,
            rangeDate: action.payload.rangeDate || state.rangeDate
        };
    }
    case LOAD_SINGLEFAULTSTATUS_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            singleFaultStatus: action.payload.singleFaultStatus.statusGroup
        };
    }
    case LOAD_SINGLEFAULTSTATUS_ERROR: {
        return {
            ...state,
            loading: false,
            error: true
        };
    }
    case LOAD_SINGLEPARAMSTATUS: {
        return {
            ...state,
            loading: true,
            error: false,
            electricOption: action.payload.electricOption,
            Dev_id: state.devID,
            rangeDate: state.rangeDate
        };
    }
    case LOAD_SINGLEPARAMSTATUS_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            singleParamStatus: action.payload.data.statusGroup
        };
    }
    case LOAD_SINGLEPARAMSTATUS_ERROR: {
        return {
            ...state,
            loading: false,
            error: true
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
    loadSingleFaultStatus,
    loadSingleParamStatus,
    loadViewData,
    uploadRangeDate
};
