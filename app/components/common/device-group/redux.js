const initialState = {
    loading: false,
    error: false,
    groupType: '区域分组',
    deviceGroup: []
};

export const LOAD_DEVICEGROUP = 'LOAD_DEVICEGROUP';
export const LOAD_DEVICEGROUP_SUCCESS = 'LOAD_DEVICEGROUP_SUCCESS';
export const LOAD_DEVICEGROUP_ERROR = 'LOAD_DEVICEGROUP_ERROR';

export function loadDeviceGroup(groupType) {
    return {
        type: LOAD_DEVICEGROUP,
        payload: {
            DevGroup: groupType
        }
    };
}

export function loadDeviceGroupSuccess({ deviceGroup }) {
    return {
        type: LOAD_DEVICEGROUP_SUCCESS,
        payload: {
            deviceGroup
        }
    };
}

export function loadDeviceGroupError(error) {
    return {
        type: LOAD_DEVICEGROUP_ERROR,
        payload: {
            error
        }
    };
}

function deviceGroup(state = initialState, action) {
    switch (action.type) {
    case LOAD_DEVICEGROUP: {
        return {
            ...state,
            loading: true,
            error: false,
            groupType: action.payload.DevGroup
        };
    }

    case LOAD_DEVICEGROUP_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            deviceGroup: action.payload.deviceGroup
        };
    }

    case LOAD_DEVICEGROUP_ERROR: {
        return {
            ...state,
            loading: false,
            error: true,
            deviceGroup: []
        };
    }

    default: {
        return state;
    }
    }
}

export default deviceGroup;