import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchCurrentAlarm } from '../../api/integratedTerminal';
import { LOAD_ALARMINFO, loadViewDataSuccess, loadViewDataError } from './redux';

function* fetchData(action) {
    try {
        const data = yield call(fetchCurrentAlarm, action.payload);
        yield put(loadViewDataSuccess(data));
    } catch (error) {
        yield put(loadViewDataError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_ALARMINFO, fetchData);
}

export const CurrentAlarm = [
    watchFetchData
];