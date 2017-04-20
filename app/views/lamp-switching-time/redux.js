import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false,
    devID: '',
    period: '时间段1',
    statusGroup: [],
    config: {}
};

export const LOAD_TIMECONTROLINFO = 'LOAD_TIMECONTROLINFO';
export const LOAD_TIMECONTROLINFO_SUCESS = 'LOAD_TIMECONTROLINFO_SUCESS';
export const LOAD_TIMECONTROLINFO_ERROR = 'LOAD_TIMECONTROLINFO_ERROR';
export const UPDATE_TIMECONTROLINFO = 'UPDATE_TIMECONTROLINFO';

export function loadViewData(devID) {
    return {
        type: LOAD_TIMECONTROLINFO,
        payload: {
            Dev_id: devID || '',
        }
    };
}

export function loadViewDataSuccess(status) {
    const { statusGroup, config } = status;

    return {
        type: LOAD_TIMECONTROLINFO_SUCESS,
        payload: {
            statusGroup,
            config
        }
    };
}

export function loadViewDataError(error) {
    return {
        type: LOAD_TIMECONTROLINFO_ERROR,
        payload: {
            error
        }
    };
}

export function updateViewData(status) {
    return {
        type: UPDATE_TIMECONTROLINFO,
        payload: {
            status
        }
    };
}

function viewData(state = initialState, action) {
    switch (action.type) {
    case LOAD_TIMECONTROLINFO: {
        return {
            ...state,
            loading: true,
            error: false,
            devID: action.payload.Dev_id || state.devID
        };
    }

    case LOAD_TIMECONTROLINFO_SUCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            statusGroup: action.payload.statusGroup,
            config: action.payload.config
        }
    }

    case LOAD_TIMECONTROLINFO_ERROR: {
        return {
            ...state,
            loading: false,
            error: true
        };
    }

    case UPDATE_TIMECONTROLINFO: {
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