import { combineReducers } from 'redux';

const initialState = {
    displayQuantity: 8,
    currentPage: 1,
    statusGroup: [],
    error: false,
    loading: false
};

export const LOAD_ALARMINFO = 'LOAD_ALARMINFO';
export const LOAD_ALARMINFO_SUCCESS = 'LOAD_ALARMINFO_SUCCESS';
export const LOAD_ALARMINFO_ERROR = 'LOAD_ALARMINFO_ERROR';
export const UPDATE_ALARM_INFO = 'UPDATE_ALARM_INFO';

export function loadViewData() {
    return {
        type: LOAD_ALARMINFO,
        payload: {}
    };
}

export function loadViewDataSuccess({ statusGroup }) {
    return {
        type: LOAD_ALARMINFO_SUCCESS,
        payload: {
            statusGroup
        }
    };
}

export function loadViewDataError(error) {
    return {
        type: LOAD_ALARMINFO_ERROR,
        payload: {
            error
        }
    };
}

export function updateViewData(status) {
    return {
        type: UPDATE_ALARM_INFO,
        payload: {
            status
        }
    };
}

function viewData(state = initialState, action) {
    switch(action.type) {
    case LOAD_ALARMINFO: {
        return {
            ...state,
            loading: true
        };
    }

    case LOAD_ALARMINFO_SUCCESS: {
        return {
            ...state,
            ...action.payload,
            loading: false,
            error: false
        };
    }

    case LOAD_ALARMINFO_ERROR: {
        return {
            ...state,
            loading: false,
            error: true
        };
    }

    case UPDATE_ALARM_INFO: {
        return {
            ...state,
            ...action.payload.status
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
    updateViewData
};

