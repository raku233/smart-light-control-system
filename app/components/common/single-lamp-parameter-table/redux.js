const initialState = {
    loading: false,
    error: false,
    rodList: [],
    modalVisible: false,
    devID: '',
    selectedRods: []
};

export const LOAD_RODLIST = 'LOAD_RODLIST';
export const LOAD_RODLIST_SUCCESS = 'LOAD_RODLIST_SUCCESS';
export const LOAD_RODLIST_ERROR = 'LOAD_RODLIST_ERROR';
export const LOAD_DEVICESTATUS = 'LOAD_DEVICESTATUS';
export const UPLOAD_MODAL_VISIBLE = 'UPLOAD_MODAL_VISIBLE';
export const UPLOAD_SELECTED_RODS = 'UPLOAD_SELECTED_RODS';

export function uploadSelectedRods(selectedRods) {
    return {
        type: UPLOAD_SELECTED_RODS,
        payload: {
            selectedRods
        }
    };
}

export function uploadModalVisible(modalVisible) {
    return {
        type: UPLOAD_MODAL_VISIBLE,
        payload: {
            modalVisible
        }
    };
}

export function loadViewData(deviceInfo) {
    const { devID } = deviceInfo;
    return {
        type: LOAD_RODLIST,
        payload: {
            Dev_id: devID
        }
    };
}

export function loadViewDataSuccess(rodList) {
    return {
        type: LOAD_RODLIST_SUCCESS,
        payload: {
            rodList
        }
    };
}

export function loadViewDataError(error) {
    return {
        type: LOAD_RODLIST_ERROR,
        payload: {
            error
        }
    };
}

export default function rodList(state = initialState, action) {
    switch (action.type) {
    case UPLOAD_MODAL_VISIBLE: {
        return {
            ...state,
        };
    }
    case UPLOAD_SELECTED_RODS: {
        return {
            ...state,
            selectedRods: action.payload.selectedRods
        };
    }
    case LOAD_RODLIST: {
        return {
            ...state,
            loading: true,
            error: false,
            devID: action.payload.Dev_id || state.devID,
        };
    }
    case LOAD_RODLIST_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            rodList: action.payload.rodList.singleLampDetial
        };
    }
    case LOAD_RODLIST_ERROR: {
        return {
            ...state,
            loading: false,
            error: true,
        };
    }
    default: {
        return {
            ...state
        };
    }
    }
}