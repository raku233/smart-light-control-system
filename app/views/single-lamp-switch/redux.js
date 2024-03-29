import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false
};

export const UPLOAD_LUX = 'UPLOAD_LUX';
export const UPLOAD_LUX_SUCCESS = 'UPLOAD_LUX_SUCCESS';
export const UPLOAD_LUX_ERROR = 'UPLOAD_LUX_ERROR';
export const UPLOAD_EASY_SET = 'UPLOAD_EASY_SET';
export const UPLOAD_EASY_SET_SUCCESS = 'UPLOAD_EASY_SET_SUCCESS';
export const UPLOAD_EASY_SET_ERROR = 'UPLOAD_EASY_SET_ERROR';

export function uploadLux(luxState) {
    return {
        type: UPLOAD_LUX,
        payload: {
            luxState
        }
    };
}

export function uploadLuxSuccess(data) {
    return {
        type: UPLOAD_LUX_SUCCESS,
        payload: {
            data
        }
    }
}

export function uploadLuxError(error) {
    return {
        type: UPLOAD_LUX_ERROR,
        payload: {
            error
        }
    }
}

export function uploadEasySet(cmdType, chkFlagStr) {
    return {
        type: UPLOAD_EASY_SET,
        payload: {
            cmdType,
            chkFlagStr
        }
    }
}

export function uploadEasySetSuccess(data) {
    return {
        type: UPLOAD_EASY_SET_SUCCESS,
        payload: {
            data
        }
    }
}

export function uploadEasySetError(error) {
    return {
        type: UPLOAD_EASY_SET_ERROR,
        payload: {
            error
        }
    }
}

function viewData(state = initialState, action) {
    switch (action.type) {
    case UPLOAD_LUX: {
        return {
            ...state,
            loading: true,
            error:false,
            luxState: action.payload.luxState
        };
    }
    case UPLOAD_LUX_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            result: action.payload.data.rslt
        };
    }
    case UPLOAD_LUX_ERROR: {
        return {
            ...state,
            loading: false,
            error: true
        }
    }
    case UPLOAD_EASY_SET: {
        return {
            ...state,
            loading: true,
            error: false,
        }
    }
    case UPLOAD_EASY_SET_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            result: action.payload.data.rslt
        }
    }
    case UPLOAD_EASY_SET_ERROR: {
        return {
            ...state,
            loading: false,
            error: true
        }
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
    uploadLux,
    uploadEasySet
};