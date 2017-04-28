import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchEnergyConsumptionChart, fetchDailyConsumptionChart } from '../../../api/integratedTerminal';
import { EnergyConsumptionQueryViewActions, EnergyConsumptionQueryConst, DailyElectricityConsumptionViewActions, DailyElectricityConsumptionConst } from './redux';



const dataFetcherGenerator = (fetchData, getStatus, loadChartSuccess, loadChartError) => {
    return function* (action) {
        try {
            const status = yield select(getStatus);
            const param = {
                devID: status.devID,
                startDate: status.startDate,
                endDate: status.endDate,
                chartType: status.chartType,
                statisticsType: status.statisticsType,
                statusType: status.statusType
            };

            const data = yield call(fetchData, param);
            yield put(loadChartSuccess(data));
        } catch (error) {
            yield put(loadChartError(error));
        }
    };
};

export function* watchFetchData() {
    yield takeEvery(EnergyConsumptionQueryConst.LOAD_VIEWDATA, dataFetcherGenerator(fetchEnergyConsumptionChart, state => state.EnergyConsumptionQuery.viewData, EnergyConsumptionQueryViewActions.loadChartSuccess, EnergyConsumptionQueryViewActions.loadChartError));
    yield takeEvery(DailyElectricityConsumptionConst.LOAD_VIEWDATA, dataFetcherGenerator(fetchDailyConsumptionChart, state => state.DailyElectricityConsumption.viewData, DailyElectricityConsumptionViewActions.loadChartSuccess, DailyElectricityConsumptionViewActions.loadChartError));
}

export const ChartQuery = [
    watchFetchData
];
