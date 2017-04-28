import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchEnergyConsumptionChart } from '../../api/integratedTerminal';
import { LOAD_ENERGYCONSUMPTIONCHART, loadChartSuccess, loadChartError } from './redux';

const getStatus = state => state.EnergyConsumptionQuery.viewData;

function* fetchData(action) {
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

        yield console.log('param', status);

        const data = yield call(fetchEnergyConsumptionChart, param);
        yield put(loadChartSuccess(data));
    } catch (error) {
        yield put(loadChartError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_ENERGYCONSUMPTIONCHART, fetchData);
}

export const EnergyConsumptionChart = [
    watchFetchData
];
