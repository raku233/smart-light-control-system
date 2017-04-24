import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchSingleFaultStatus } from '../../api/singleLamp.js';
import { LOAD_SINGLEFAULTSTATUS, loadSingleFaultStatusSuccess, loadSingleFaultStatusError } from './redux';

const getStatus = state => state.History.viewData;

function* fetchSingleFaultData(action) {
    const { rangeDate, Dev_id } = action.payload;
    try {
        const param = {
            Dev_id,
            begin_date_str: rangeDate[0],
            end_date_str: rangeDate[1],
            pageSize: 0,
            CurrentPageIndex: 0
        };
        const data = yield call(fetchSingleFaultStatus, param);
        yield put(loadSingleFaultStatusSuccess(data));
    } catch (error) {
        yield put(loadSingleFaultStatusError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_SINGLEFAULTSTATUS, fetchSingleFaultData);
}

export const History = [
    watchFetchData
];
