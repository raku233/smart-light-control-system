import { combineReducers } from 'redux';
import { getDateString } from '../../../utils/time';

const state = {
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

function generateReducer(type) {
    const LOAD_DEVICEID = `LOAD_${type}_DEVICEID`,
        UPDATE_VIEWDATA = `UPDATE_${type}`,
        LOAD_VIEWDATA = `LOAD_${type}`,
        LOAD_VIEWDATA_SUCCESS = `LOAD_${type}_SUCCESS`,
        LOAD_VIEWDATA_ERROR = `LOAD_${type}_ERROR`;

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

    return {
        LOAD_DEVICEID,
        UPDATE_VIEWDATA,
        LOAD_VIEWDATA,
        LOAD_VIEWDATA_SUCCESS,
        LOAD_VIEWDATA_ERROR,
        viewData(state = initialState, action) {
            switch (action.type) {
            case LOAD_DEVICEID: {
                return {
                    ...state,
                    devID: action.payload.devID
                };
            }

            case UPDATE_VIEWDATA: {
                return {
                    ...state,
                    ...action.payload.status
                };
            }

            case LOAD_VIEWDATA: {
                return {
                    ...state,
                    loading: true,
                    error: false
                };
            }

            case LOAD_VIEWDATA_SUCCESS: {
                return {
                    ...state,
                    loading: false,
                    error: false,
                    code: action.payload.code
                };
            }

            case LOAD_VIEWDATA_ERROR: {
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
        },
        loadViewData(deviceInfo) {
            const { devID } = deviceInfo;

            return {
                type: LOAD_DEVICEID,
                payload: {
                    devID
                }
            };
        },
        updateViewData(status) {
            return {
                type: UPDATE_VIEWDATA,
                payload: {
                    status
                }
            };
        },
        loadChart() {
            return {
                type: LOAD_VIEWDATA,
                payload: {}
            };
        },
        loadChartSuccess(status) {
            return {
                type: LOAD_VIEWDATA_SUCCESS,
                payload: {
                    code: status.highcharts
                }
            };
        },
        loadChartError(error) {
            return {
                type: LOAD_VIEWDATA_ERROR,
                payload: {
                    error
                }
            };
        }
    };
}

const EnergyConsumptionQueryReducer = generateReducer('ENERGYCONSUMPTIONCHART');
const DailyElectricityConsumptionReducer = generateReducer('DAILYELECTRICITYCONSUMPTION');

export const EnergyConsumptionQuery = combineReducers({
    viewData: EnergyConsumptionQueryReducer.viewData
});
export const EnergyConsumptionQueryViewActions = {
    loadViewData: EnergyConsumptionQueryReducer.loadViewData,
    updateViewData: EnergyConsumptionQueryReducer.updateViewData,
    loadChart: EnergyConsumptionQueryReducer.loadChart,
    loadChartSuccess: EnergyConsumptionQueryReducer.loadChartSuccess,
    loadChartError: EnergyConsumptionQueryReducer.loadChartError
};
export const EnergyConsumptionQueryConst = {
    LOAD_DEVICEID: EnergyConsumptionQueryReducer.LOAD_DEVICEID,
    UPDATE_VIEWDATA: EnergyConsumptionQueryReducer.UPDATE_VIEWDATA,
    LOAD_VIEWDATA: EnergyConsumptionQueryReducer.LOAD_VIEWDATA,
    LOAD_VIEWDATA_SUCCESS: EnergyConsumptionQueryReducer.LOAD_VIEWDATA_SUCCESS,
    LOAD_VIEWDATA_ERROR: EnergyConsumptionQueryReducer.LOAD_VIEWDATA_ERROR
};

export const DailyElectricityConsumption = combineReducers({
    viewData: DailyElectricityConsumptionReducer.viewData
});
export const DailyElectricityConsumptionViewActions = {
    loadViewData: DailyElectricityConsumptionReducer.loadViewData,
    updateViewData: DailyElectricityConsumptionReducer.updateViewData,
    loadChart: DailyElectricityConsumptionReducer.loadChart,
    loadChartSuccess: DailyElectricityConsumptionReducer.loadChartSuccess,
    loadChartError: DailyElectricityConsumptionReducer.loadChartError
};
export const DailyElectricityConsumptionConst = {
    LOAD_DEVICEID: DailyElectricityConsumptionReducer.LOAD_DEVICEID,
    UPDATE_VIEWDATA: DailyElectricityConsumptionReducer.UPDATE_VIEWDATA,
    LOAD_VIEWDATA: DailyElectricityConsumptionReducer.LOAD_VIEWDATA,
    LOAD_VIEWDATA_SUCCESS: DailyElectricityConsumptionReducer.LOAD_VIEWDATA_SUCCESS,
    LOAD_VIEWDATA_ERROR: DailyElectricityConsumptionReducer.LOAD_VIEWDATA_ERROR
};