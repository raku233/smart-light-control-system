import { combineReducers } from 'redux';
import { getDateString } from '../../utils/time';

const initialState = {
    loading: false,
    error: false,
    devID: '',
    startDate: getDateString(new Date()),
    endDate: getDateString(new Date()),
    chartType: 'line',
    statisticsType: '按年能耗统计',
    statusType: '0',
    code: ''
};

export const LOAD_ENERGUCONSUMPTIONQUERY_DEVICEID = 'LOAD_ENERGUCONSUMPTIONQUERY_DEVICEID';
export const UPDATE_ENERGYCONSUMPTIONCHART = 'UPDATE_ENERGYCONSUMPTIONCHART';
export const LOAD_ENERGYCONSUMPTIONCHART = 'LOAD_ENERGYCONSUMPTIONCHART';
export const LOAD_ENERGYCONSUMPTIONCHART_SUCCESS = 'LOAD_ENERGYCONSUMPTIONCHART_SUCCESS';
export const LOAD_ENERGYCONSUMPTIONCHART_ERROR = 'LOAD_ENERGYCONSUMPTIONCHART_ERROR';

export function loadViewData(deviceInfo) {
    const { devID } = deviceInfo;

    return {
        type: LOAD_ENERGUCONSUMPTIONQUERY_DEVICEID,
        payload: {
            devID
        }
    };
}

export function updateViewData(status) {
    return {
        type: UPDATE_ENERGYCONSUMPTIONCHART,
        payload: {
            status
        }
    };
}

export function loadChart() {
    return {
        type: LOAD_ENERGYCONSUMPTIONCHART,
        payload: {}
    };
}

export function loadChartSuccess(status) {
    return {
        type: LOAD_ENERGYCONSUMPTIONCHART_SUCCESS,
        payload: {
            code: status.highcharts
        }
    };
}

export function loadChartError(error) {
    return {
        type: LOAD_ENERGYCONSUMPTIONCHART_ERROR,
        payload: {
            error
        }
    };
}

function viewData(state = initialState, action) {
    switch(action.type) {
    case LOAD_ENERGUCONSUMPTIONQUERY_DEVICEID: {
        return {
            ...state,
            devID: action.payload.devID
        };
    }

    case UPDATE_ENERGYCONSUMPTIONCHART: {
        return {
            ...state,
            ...action.payload.status
        };
    }

    case LOAD_ENERGYCONSUMPTIONCHART: {
        return {
            ...state,
            loading: true,
            error: false
        };
    }

    case LOAD_ENERGYCONSUMPTIONCHART_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            code: action.payload.code
        };
    }

    case LOAD_ENERGYCONSUMPTIONCHART_ERROR: {
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

