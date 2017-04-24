import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false,
    rangeDate: [],
    devID: '',
    singleFaultStatus: []
};

export const UPLOAD_RANGEDATE = 'LOAD_RANGEDATE';
export const LOAD_DEVICEID = 'LOAD_DEVICEID';
export const LOAD_SINGLEFAULTSTATUS = 'LOAD_SINGLEFAULTSTATUS';
export const LOAD_SINGLEFAULTSTATUS_SUCCESS = 'LOAD_SINGLEFAULTSTATUS_SUCCESS';
export const LOAD_SINGLEFAULTSTATUS_ERROR = 'LOAD_SINGLEFAULTSTATUS_ERROR';

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
    loadViewData,
    uploadRangeDate
};
