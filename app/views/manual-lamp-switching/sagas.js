import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchSwitchingStatus } from '../../api/integratedTerminal';
import { LOAD_MANUALSWITCHINGSTATUS, loadViewDataSuccess, loadViewDataError } from './redux';

function* fetchData(action) {
    try {
        const data = yield call(fetchSwitchingStatus, action.payload);
        yield put(loadViewDataSuccess(data));
    } catch (error) {
        yield put(loadViewDataError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_MANUALSWITCHINGSTATUS, fetchData);
}

export const ManualLampSwitching = [
    watchFetchData
];