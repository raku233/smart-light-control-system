import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchDeviceList } from '../../../api/common';
import { LOAD_DEVICELIST, loadDeviceListSuccess, loadDeviceListError } from './redux';

function* fetchData(action) {
    try {
        const data = yield call(fetchDeviceList, action.payload);
        yield put(loadDeviceListSuccess(data));
    } catch (error) {
        yield put(loadDeviceListError(error));
    }
}

export default function* watchFetchData() {
    yield takeEvery(LOAD_DEVICELIST, fetchData);
}