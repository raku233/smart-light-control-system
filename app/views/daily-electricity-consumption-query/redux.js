import { combineReducers } from 'redux';
import { getDateString } from '../../utils/time';

const initialState = {
    loading: false,
    error: false,
    devID: '',
    startDate: getDateString(new Date()),
    endDate: getDateString(new Date()),
    chartType: 'line',
    statisticsType: '按月统计',
    statusType: '0',
    code: ''
};

export const LOAD_DAILYELECTRICITYCONSUMPTIONQUERY_DEVICEID = 'LOAD_DAILYELECTRICITYCONSUMPTIONQUERY_DEVICEID';
export const UPDATE_DAILYELECTRICITYCONSUMPTIONCHART = 'UPDATE_DAILYELECTRICITYCONSUMPTIONCHART';
export const LOAD_DAILYELECTRICITYCONSUMPTIONCHART = 'LOAD_DAILYELECTRICITYCONSUMPTIONCHART';
export const LOAD_DAILYELECTRICITYCONSUMPTIONCHART_SUCCESS = 'LOAD_DAILYELECTRICITYCONSUMPTIONCHART_SUCCESS';
export const LOAD_DAILYELECTRICITYCONSUMPTIONCHART_ERROR = 'LOAD_DAILYELECTRICITYCONSUMPTIONCHART_ERROR';

export function loadViewData(deviceInfo) {
    const { devID } = deviceInfo;

    return {
        type: LOAD_DAILYELECTRICITYCONSUMPTIONQUERY_DEVICEID,
        payload: {
            devID
        }
    };
}

export function updateViewData(status) {
    return {
        type: UPDATE_DAILYELECTRICITYCONSUMPTIONCHART,
        payload: {
            status
        }
    };
}

export function loadChart() {
    return {
        type: LOAD_DAILYELECTRICITYCONSUMPTIONCHART,
        payload: {}
    };
}

export function loadChartSuccess(status) {
    return {
        type: LOAD_DAILYELECTRICITYCONSUMPTIONCHART_SUCCESS,
        payload: {
            code: status.highcharts
        }
    };
}

export function loadChartError(error) {
    return {
        type: LOAD_DAILYELECTRICITYCONSUMPTIONCHART_ERROR,
        payload: {
            error
        }
    };
}

function viewData(state = initialState, action) {
    switch(action.type) {
    case LOAD_DAILYELECTRICITYCONSUMPTIONQUERY_DEVICEID: {
        return {
            ...state,
            devID: action.payload.devID
        };
    }

    case UPDATE_DAILYELECTRICITYCONSUMPTIONCHART: {
        return {
            ...state,
            ...action.payload.status
        };
    }

    case LOAD_DAILYELECTRICITYCONSUMPTIONCHART: {
        return {
            ...state,
            loading: true,
            error: false
        };
    }

    case LOAD_DAILYELECTRICITYCONSUMPTIONCHART_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            code: action.payload.code
        };
    }

    case LOAD_DAILYELECTRICITYCONSUMPTIONCHART_ERROR: {
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

