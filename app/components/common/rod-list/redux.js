const initialState = {
    loading: false,
    error: false,
    rodList: [],
    modalVisible: false,
    devID: ''
};

export const LOAD_RODLIST = 'LOAD_RODLIST';
export const LOAD_RODLIST_SUCCESS = 'LOAD_RODLIST_SUCCESS';
export const LOAD_RODLIST_ERROR = 'LOAD_RODLIST_ERROR';
export const LOAD_DEVICESTATUS = 'LOAD_DEVICESTATUS';
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
    const { devID } = deviceInfo;
    return {
        type: LOAD_DEVICESTATUS,
        payload: {
            Dev_id: devID
        }
    };
}

export function loadRodList(devID) {
    return {
        type: LOAD_RODLIST,
        payload: {
            Dev_id: devID || '',
        }
    };
}

export function loadRodListSuccess(rodList) {
    return {
        type: LOAD_RODLIST_SUCCESS,
        payload: {
            rodList
        }
    };
}

export function loadRodListError(error) {
    return {
        type: LOAD_RODLIST_ERROR,
        payload: {
            error
        }
    };
}

export default function rodList(state = initialState, action) {
    switch (action.type) {
    case LOAD_DEVICESTATUS: {
        return {
            ...state,
            devID: action.payload.Dev_id || state.devID,
            modalVisible: true
        };
    }
    case UPLOAD_MODAL_VISIBLE: {
        return {
            ...state,
            modalVisible: action.payload.modalVisible
        };
    }
    case LOAD_RODLIST: {
        return {
            ...state,
            loading: true,
            error: false,
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