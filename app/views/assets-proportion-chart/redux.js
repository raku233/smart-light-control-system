import { combineReducers } from 'redux';

const initialState = {
    loading: false,
    error: false,
    devID: '',
    statisticsType: '灯杆厂家占有比例图',
    queryType: '终端号查询',
    chartType: '灯具型号瓦数'
};

export const LOAD_ASSETSPROPORTIONCHART_DEVICEID = 'LOAD_ASSETSPROPORTIONCHART_DEVICEID';
export const LOAD_ASSETSPROPORTIONCHART = 'LOAD_ASSETSPROPORTIONCHART';
export const LOAD_ASSETSPROPORTIONCHART_SUCCESS = 'LOAD_ASSETSPROPORTIONCHART_SUCCESS';
export const LOAD_ASSETSPROPORTIONCHART_ERROR = 'LOAD_ASSETSPROPORTIONCHART_ERROR';
export const UPDATE_ASSETSPROPORTIONCHART = 'UPDATE_ASSETSPROPORTIONCHART';

export function loadViewData(deviceInfo) {
    const { devID } = deviceInfo;

    return {
        type: LOAD_ASSETSPROPORTIONCHART_DEVICEID,
        payload: {
            devID
        }
    };
}

export function updateViewData(status) {
    return {
        type: UPDATE_ASSETSPROPORTIONCHART,
        payload: {
            status
        }
    };
}

export function loadChart() {
    return {
        type: LOAD_ASSETSPROPORTIONCHART,
        payload: {}
    };
}

export function loadChartSuccess(status) {
    return {
        type: LOAD_ASSETSPROPORTIONCHART_SUCCESS,
        payload: {
            code: status.highcharts
        }
    };
}

export function loadChartError(error) {
    return {
        type: LOAD_ASSETSPROPORTIONCHART_ERROR,
        payload: {
            error
        }
    };
}

function viewData(state = initialState, action) {
    switch(action.type) {
    case LOAD_ASSETSPROPORTIONCHART_DEVICEID: {
        return {
            ...state,
            devID: action.payload.devID
        };
    }

    case UPDATE_ASSETSPROPORTIONCHART: {
        return {
            ...state,
            ...action.payload.status
        };
    }

    case LOAD_ASSETSPROPORTIONCHART: {
        return {
            ...state,
            loading: true,
            error: false
        };
    }

    case LOAD_ASSETSPROPORTIONCHART_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            code: action.payload.code
        };
    }

    case LOAD_ASSETSPROPORTIONCHART_ERROR: {
        return {
            ...state,
            loading: false,
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
    loadViewData,
    updateViewData,
    loadChart
};
