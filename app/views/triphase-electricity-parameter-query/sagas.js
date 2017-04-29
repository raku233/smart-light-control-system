import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchTriphaseElectricityParameterChart } from '../../api/integratedTerminal';
import { LOAD_TRIPHASEELECTRICITYPARAMETERQUERY, loadChartSuccess, loadChartError } from './redux';

const getStatus = state => state.TriphaseElectricityParameterQuery.viewData;

function* fetchData(action) {
    try {
        const status = yield select(getStatus);
        const param = {
            devID: status.devID,
            startDate: status.startDate,
            endDate: status.endDate,
            couldPeriodConfig: status.couldPeriodConfig,
            startTime: status.startTime,
            endTime: status.endTime,
            chartType: status.chartType,
            statisticsType: status.statisticsType,
            statusType: status.statusType
        };

        yield console.log('param', status);

        const data = yield call(fetchTriphaseElectricityParameterChart, param);
        yield put(loadChartSuccess(data));
    } catch (error) {
        yield put(loadChartError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_TRIPHASEELECTRICITYPARAMETERQUERY, fetchData);
}

export const TriphaseElectricityParameterQuery = [
    watchFetchData
];
