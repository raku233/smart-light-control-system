import { combineReducers } from 'redux';

const initialState = {
    selectedDevice: {}
};

export const LOAD_MAPMARKER = 'LOAD_MAPMARKER';
export const LOAD_MAPMARKER_SUCCESS = 'LOAD_MAPMARKER_SUCCESS';
export const LOAD_MAPMARKER_ERROR = 'LOAD_MAPMARKER_ERROR';

export function loadViewData(deviceInfo) {
    return {
        type: LOAD_MAPMARKER,
        payload: {
            selectedDevice: deviceInfo
        }
    };
}

function viewData(state = initialState, action) {
    switch (action.type) {
    case LOAD_MAPMARKER: {
        return {
            ...state,
            selectedDevice: action.payload.selectedDevice || state.selectedDevice
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