import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchDailyConsumptionChart } from '../../api/integratedTerminal';
import { LOAD_DAILYELECTRICITYCONSUMPTIONCHART, loadChartSuccess, loadChartError } from './redux';

const getStatus = state => state.DailyElectricityConsumptionQuery.viewData;

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

        const data = yield call(fetchDailyConsumptionChart, param);
        yield put(loadChartSuccess(data));
    } catch (error) {
        yield put(loadChartError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_DAILYELECTRICITYCONSUMPTIONCHART, fetchData);
}

export const DailyElectricityConsumptionQuery = [
    watchFetchData
];
