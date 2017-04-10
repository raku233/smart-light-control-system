const initialState = {
    loading: false,
    error: false,
    devID: '',
    status: []
};

export const LOAD_MANUALSWITCHINGSTATUS = 'LOAD_MANUALSWITCHINGSTATUS';
export const LOAD_MANUALSWITCHINGSTATUS_SUCCESS = 'LOAD_MANUALSWITCHINGSTATUS_SUCCESS';
export const LOAD_MANUALSWITCHINGSTATUS_ERROR = 'LOAD_MANUALSWITCHINGSTATUS_ERROR';

export function loadManualSwitchingStatus(devID) {
    return {
        type: LOAD_MANUALSWITCHINGSTATUS,
        payload: {
            Dev_id: devID
        }
    };
}

export function loadManualSwitchingStatusSuccess(status) {
    return {
        type: LOAD_MANUALSWITCHINGSTATUS_SUCCESS,
        payload: {
            status
        }
    };
}

export function loadManualSwitchingStatusError(error) {
    return {
        type: LOAD_MANUALSWITCHINGSTATUS_ERROR,
        payload: {
            error
        }
    };
}

function manualSwitchingStatus(state = initialState, action) {
    switch(action.type) {
    case LOAD_MANUALSWITCHINGSTATUS: {
        return {
            ...state,
            loading: true,
            error: false,
            devID: action.payload.Dev_id
        };
    }

    case LOAD_MANUALSWITCHINGSTATUS_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            status: action.payload.status
        };
    }

    case LOAD_MANUALSWITCHINGSTATUS_ERROR: {
        return {
            ...state,
            loading: false,
            error: true,
            status: []
        };
    }

    default: {
        return state;
    }
    }
}

export default manualSwitchingStatus;