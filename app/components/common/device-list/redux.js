const initialState = {
    loading: false,
    error: false,
    groupType: '区域分组',
    deviceGroup: {}
};

export const LOAD_DEVICELIST = 'LOAD_DEVICELIST';
export const LOAD_DEVICELIST_SUCCESS = 'LOAD_DEVICELIST_SUCCESS';
export const LOAD_DEVICELIST_ERROR = 'LOAD_DEVICELIST_ERROR';

export function loadDeviceList(groupType) {
    return {
        type: LOAD_DEVICELIST,
        payload: {
            DevGroup: groupType
        }
    };
}

export function loadDeviceListSuccess(deviceGroup) {
    return {
        type: LOAD_DEVICELIST_SUCCESS,
        payload: {
            deviceGroup
        }
    };
}

export function loadDeviceListError(error) {
    return {
        type: LOAD_DEVICELIST_ERROR,
        payload: {
            error
        }
    };
}

function deviceList(state = initialState, action) {
    switch (action.type) {
    case LOAD_DEVICELIST: {
        return {
            ...state,
            loading: true,
            error: false,
            groupType: action.payload.DevGroup
        };
    }

    case LOAD_DEVICELIST_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            deviceGroup: action.payload.deviceGroup
        };
    }

    case LOAD_DEVICELIST_ERROR: {
        return {
            ...state,
            loading: false,
            error: true,
            deviceGroup: {}
        };
    }

    default: {
        return state;
    }
    }
}

export default deviceList;