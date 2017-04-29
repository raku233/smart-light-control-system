import { combineReducers } from 'redux';

import { getDateString } from '../../utils/time';

const initialState = {
    loading: false,
    error: false,
    devID: '',
    startDate: getDateString(new Date()),
    endDate: getDateString(new Date()),
    couldPeriodConfig: false,
    startTime: '0:00',
    endTime: '0:00',
    chartType: 'line',
    statusType: '0',
    code: ''
};

export const LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_DEVICEID = 'LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_DEVICEID';
export const UPDATE_TRIPHASEELECTRICITYPARAMETERQUERY = 'UPDATE_TRIPHASEELECTRICITYPARAMETERQUERY';
export const LOAD_TRIPHASEELECTRICITYPARAMETERQUERY = 'LOAD_TRIPHASEELECTRICITYPARAMETERCHART';
export const LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_SUCCESS = 'LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_SUCCESS';
export const LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_ERROR = 'LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_ERROR';

export function loadViewData(deviceInfo) {
    const { devID } = deviceInfo;

    return {
        type: LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_DEVICEID,
        payload: {
            devID
        }
    };
}

export function updateViewData(status) {
    return {
        type: UPDATE_TRIPHASEELECTRICITYPARAMETERQUERY,
        payload: {
            status
        }
    };
}

export function loadChart() {
    return {
        type: LOAD_TRIPHASEELECTRICITYPARAMETERQUERY,
        payload: {}
    };
}

export function loadChartSuccess(status) {
    return {
        type: LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_SUCCESS,
        payload: {
            code: status.highcharts
        }
    };
}

export function loadChartError(error) {
    return {
        type: LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_ERROR,
        payload: {
            error
        }
    };
}

function viewData(state = initialState, action) {
    switch(action.type) {
    case LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_DEVICEID: {
        return {
            ...state,
            devID: action.payload.devID
        };
    }

    case UPDATE_TRIPHASEELECTRICITYPARAMETERQUERY: {
        return {
            ...state,
            ...action.payload.status
        };
    }

    case LOAD_TRIPHASEELECTRICITYPARAMETERQUERY: {
        return {
            ...state,
            loading: true,
            error: false
        };
    }

    case LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_SUCCESS: {
        return {
            ...state,
            loading: false,
            error: false,
            code: action.payload.code
        };
    }

    case LOAD_TRIPHASEELECTRICITYPARAMETERQUERY_ERROR: {
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


