import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchDeviceGroup } from '../../../api/common';
import { LOAD_DEVICEGROUP, loadDeviceGroupSuccess, loadDeviceGroupError } from './redux';

function* fetchData(action) {
    try {
        const data = yield call(fetchDeviceGroup, action.payload);
        yield put(loadDeviceGroupSuccess(data));
    } catch (error) {
        yield put(loadDeviceGroupError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_DEVICEGROUP, fetchData);
}