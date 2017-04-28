import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchAssetProportionChart } from '../../api/integratedTerminal';
import { LOAD_ASSETSPROPORTIONCHART, loadChartSuccess, loadChartError } from './redux';

const getStatus = state => state.AssetsProportionChart.viewData;

function* fetchData(action) {
    try {
        const status = yield select(getStatus);
        const param = {
            devID: status.devID,
            statisticsType: status.statisticsType,
            chartType: status.chartType,
            queryType: status.queryType
        };

        const data = yield call(fetchAssetProportionChart, param);
        yield put(loadChartSuccess(data));
    } catch (error) {
        yield put(loadChartError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_ASSETSPROPORTIONCHART, fetchData);
}

export const AssetsProportionChart = [
    watchFetchData
];