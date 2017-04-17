import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false,
    devID: '',
    deviceParameter: [
        { groupType: 'A组' },
        { groupType: 'B组' },
        { groupType: 'C组' }
    ],
    contactorParameter: []
};

export const LOAD_ELECTRICALPARAMETER = 'LOAD_ELECTRICALPARAMETER';
export const LOAD_ELECTRICALPARAMETER_SUCCESS = 'LOAD_ELECTRICALPARAMETER_SUCCESS';
export const LOAD_ELECTRICALPARAMETER_ERROR = 'LOAD_ELECTRICALPARAMETER_ERROR';

export function loadViewData(devID) {
    return {
        type: LOAD_ELECTRICALPARAMETER,
        payload: {
            Dev_id: devID
        }
    };
}

export function loadViewDataSuccess(parameter) {
    const { deviceParameter, contactorParameter } = parameter;
    return {
        type: LOAD_ELECTRICALPARAMETER_SUCCESS,
        payload: {
            deviceParameter,
            contactorParameter
        }
    };
}

export function loadViewDataError(error) {
    return {
        type: LOAD_ELECTRICALPARAMETER_ERROR,
        payload: {
            error
        }
    };
}

function viewData(state = initialState, action) {
    switch(action.type) {
    case LOAD_ELECTRICALPARAMETER: {
        return {
            ...state,
            loading: true,
            error: false,
            devID: action.payload.Dev_id
        };
    }

    case LOAD_ELECTRICALPARAMETER_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            deviceParameter: action.payload.deviceParameter,
            contactorParameter: action.payload.contactorParameter
        };
    }

    case LOAD_ELECTRICALPARAMETER_ERROR: {
        return {
            ...state,
            loading: false,
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
    loadViewData
};

