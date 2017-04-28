import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false,
    devID: '',
    devLocation: '',
    rodLocations: [],
    electricParam: {},
    modalVisible: false
};

export const LOAD_RODMARKER = 'LOAD_RODMARKER';
export const LOAD_RODMARKER_SUCCESS = 'LOAD_RODMARKER_SUCCESS';
export const LOAD_RODMARKER_ERROR = 'LOAD_RODMARKER_ERROR';
export const LOAD_ELECTRICPARAMETER = 'LOAD_ELCTRICPARAMETER';
export const LOAD_ELECTRICPARAMETER_SUCCESS = 'LOAD_ELCTRICPARAMETER_SUCCESS';
export const LOAD_ELECTRICPARAMETER_ERROR = 'LOAD_ELCTRICPARAMETER_ERROR';
export const UPLOAD_MODAL_VISIBLE = 'UPLOAD_MODAL_VISIBLE';

export function uploadModalVisible(modalVisible) {
    return {
        type: UPLOAD_MODAL_VISIBLE,
        payload: {
            modalVisible
        }
    };
}

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

export function loadElectricParameter(devID) {
    return {
        type: LOAD_ELECTRICPARAMETER,
        payload: {
            Dev_id: devID || ''
        }
    };
}

export function loadElectricParameterSuccess(data) {
    return {
        type: LOAD_ELECTRICPARAMETER_SUCCESS,
        payload: {
            electricParam: data
        }
    };
}

export function loadElectricParameterError(error) {
    return {
        type: LOAD_ELECTRICPARAMETER_ERROR,
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
            devLocation: action.payload.devLocation
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
    case LOAD_ELECTRICPARAMETER: {
        return {
            ...state,
            devID: action.payload.Dev_id,
            modalVisible: true
        };
    }
    case LOAD_ELECTRICPARAMETER_SUCCESS: {
        return {
            ...state,
            electricParam: action.payload.electricParam.electricParam
        };
    }
    case LOAD_ELECTRICPARAMETER_ERROR: {
        return {
            ...state,
            error: true
        };
    }
    case UPLOAD_MODAL_VISIBLE: {
        return {
            ...state,
            modalVisible: action.payload.modalVisible
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
    loadViewData,
    loadElectricParameter,
    uploadModalVisible
};