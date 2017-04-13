import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false,
    devID: '',
    statusGroup: [],
    config: {},
    uid: ''
};

export const LOAD_MANUALSWITCHINGSTATUS = 'LOAD_MANUALSWITCHINGSTATUS';
export const LOAD_MANUALSWITCHINGSTATUS_SUCCESS = 'LOAD_MANUALSWITCHINGSTATUS_SUCCESS';
export const LOAD_MANUALSWITCHINGSTATUS_ERROR = 'LOAD_MANUALSWITCHINGSTATUS_ERROR';
export const UPDATE_MANUALSWITCHINGSTATUS = 'UPDATE_MANUALSWITCHINGSTATUS';
export const UPLOAD_MANUALSWITCHINGSTATUS = 'UPLOAD_MANUALSWITCHINGSTATUS';

export function loadViewData(devID) {
    return {
        type: LOAD_MANUALSWITCHINGSTATUS,
        payload: {
            Dev_id: devID || ''
        }
    };
}

export function loadViewDataSuccess(status) {
    const { statusGroup, config, uid } = status;

    return {
        type: LOAD_MANUALSWITCHINGSTATUS_SUCCESS,
        payload: {
            statusGroup,
            config,
            uid
        }
    };
}

export function loadViewDataError(error) {
    return {
        type: LOAD_MANUALSWITCHINGSTATUS_ERROR,
        payload: {
            error
        }
    };
}

export function updateViewData(status) {
    return {
        type: UPDATE_MANUALSWITCHINGSTATUS,
        payload: {
            status
        }
    };
}

export function uploadViewData() {
    return {
        type: UPLOAD_MANUALSWITCHINGSTATUS,
        payload: {}
    };
}

function viewData(state = initialState, action) {
    switch(action.type) {
    case LOAD_MANUALSWITCHINGSTATUS: {
        return {
            ...state,
            loading: true,
            error: false,
            devID: action.payload.Dev_id || state.devID
        };
    }

    case LOAD_MANUALSWITCHINGSTATUS_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            statusGroup: action.payload.statusGroup,
            config: action.payload.config,
            uid: action.payload.uid
        };
    }

    case LOAD_MANUALSWITCHINGSTATUS_ERROR: {
        return {
            ...state,
            loading: false,
            error: true,
        };
    }

    case UPDATE_MANUALSWITCHINGSTATUS: {
        return {
            ...state,
            ...action.payload.staus
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
    uploadViewData
};