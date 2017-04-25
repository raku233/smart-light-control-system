import { combineReducers } from 'redux';

const initialState = {
    isLogin: false,
    error: false,
    action: 'login'
};

export const UPDATE_USERINFO = 'UPDATE_USERINFO';
export const UPLOAD_USERINFO = 'UPLOAD_USERINFO';
export const UPLOAD_USERINFO_SUCCESS = 'UPLOAD_USERINFO_SUCCESS';
export const UPLOAD_USERINFO_ERROR = 'UPLOAD_USERINFO_ERROR';


export function updateViewData(status) {
    return {
        type: UPDATE_USERINFO,
        payload: {
            status
        }
    };
}

export function uploadViewData(status) {
    const { userName, password, action } = status;
    return {
        type: UPLOAD_USERINFO,
        payload: {
            userName,
            password,
            action
        }
    };
}

export function uploadViewDataSuccess(status) {
    return {
        type: UPLOAD_USERINFO_SUCCESS,
        payload: {
            status
        }
    };
}

export function uploadViewDataError(error) {
    return {
        type: UPLOAD_USERINFO_ERROR,
        payload: {
            error
        }
    };
}

function viewData(state = initialState, action) {
    switch (action.type) {
    case UPDATE_USERINFO: {
        return {
            ...state,
            ...action.payload.status
        };
    }

    case UPLOAD_USERINFO_SUCCESS: {
        return {
            ...state,
            ...action.payload.status
        };
    }

    case UPLOAD_USERINFO_ERROR: {
        return {
            ...state,
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
    uploadViewData,
    updateViewData
};