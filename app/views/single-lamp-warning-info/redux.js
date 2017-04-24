import { combineReducers } from 'redux';

const initialState = {
    loading: true,
    error: false,
    devID: '',
    terminalMessage: [],
    warningInfo: []
};

export const LOAD_TERMINALMESSAGE = 'LOAD_TERMINALMESSAGE';
export const LOAD_TERMINALMESSAGE_SUCCESS = 'LOAD_TERMINALMESSAGE_SUCCESS';
export const LOAD_TERMINALMESSAGE_ERROR = 'LOAD_TERMINALMESSAGE_ERROR';
export const LOAD_WARNINGINFO = 'LOAD_WARNINGINFO';
export const LOAD_WARNINGINFO_SUCCESS = 'LOAD_WARNINGINFO_SUCCESS';
export const LOAD_WARNINGINFO_ERROR = 'LOAD_WARNINGINFO_ERROR';

export function loadTerminalMessage() {
    return {
        type: LOAD_TERMINALMESSAGE,
        payload: {

        }
    };
}

export function loadTerminalMessageSuccess(terminalMessage) {
    return {
        type: LOAD_TERMINALMESSAGE_SUCCESS,
        payload: {
            terminalMessage
        }
    };
}

export function loadTerminalMessageError(error) {
    return {
        type: LOAD_TERMINALMESSAGE_ERROR,
        payload: {
            error
        }
    };
}

export function loadWarningInfo(devID) {
    return {
        type: LOAD_WARNINGINFO,
        payload: {
            Dev_id: devID || ''
        }
    };
}

export function loadWarningInfoSuccess(warningInfo) {
    return {
        type: LOAD_WARNINGINFO_SUCCESS,
        payload: {
            warningInfo
        }
    };
}

export function loadWarningInfoError(error) {
    return {
        type: LOAD_WARNINGINFO_ERROR,
        payload: {
            error
        }
    };
}

function viewData(state = initialState, action) {
    switch(action.type) {
    case LOAD_TERMINALMESSAGE: {
        return {
            ...state,
            loading: true,
            error: false
        };
    }
    case LOAD_TERMINALMESSAGE_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            terminalMessage: action.payload.terminalMessage.terminalAlarmMes
        };
    }
    case LOAD_TERMINALMESSAGE_ERROR: {
        return {
            ...state,
            loading: false,
            error: true
        };
    }
    case LOAD_WARNINGINFO: {
        return {
            ...state,
            loading: true,
            error: false,
            devID: action.payload.Dev_id || state.devID
        };
    }
    case LOAD_WARNINGINFO_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            warningInfo: action.payload.warningInfo
        };
    }
    case LOAD_WARNINGINFO_ERROR: {
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
    loadTerminalMessage,
    loadWarningInfo
};