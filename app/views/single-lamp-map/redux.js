import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false,
    devID: '',
    devLocation: '',
    rodLocations: []
};

export const LOAD_RODMARKER = 'LOAD_RODMARKER';
export const LOAD_RODMARKER_SUCCESS = 'LOAD_RODMARKER_SUCCESS';
export const LOAD_RODMARKER_ERROR = 'LOAD_RODMARKER_ERROR';

export function loadViewData(deviceInfo) {
    const { devID, location } = deviceInfo;
    return {
        type: LOAD_RODMARKER,
        payload: {
            Dev_Id: devID || '',
            devLocation: location
        }
    };
}

export function loadViewDataSuccess(data) {
    return {
        type: LOAD_RODMARKER_SUCCESS,
        payload: {
            rodLocations: data.singleNearTerminal
        }
    };
}

export function loadViewDataError(error) {
    return {
        type: LOAD_RODMARKER_ERROR,
        payload: {
            error
        }
    };
}

function viewData(state = initialState, action) {
    switch (action.type) {
    case LOAD_RODMARKER: {
        return {
            ...state,
            loading: true,
            error: false,
            devID: action.payload.Dev_Id || state.devID,
            devLocation: action.payload.devLocation || state.devLocation
        };
    }
    case LOAD_RODMARKER_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            rodLocations: action.payload.rodLocations
        };
    }
    case LOAD_RODMARKER_ERROR: {
        return {
            ...state,
            loading: false,
            error: true
        };
    }
    default:
        return state;
    }
}

export default combineReducers({
    viewData
});

export const actions = {
    loadViewData
};