import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchElectricalParameter } from '../../api/integratedTerminal';
import { LOAD_ELECTRICALPARAMETER, loadViewDataSuccess, loadViewDataError } from './redux';

function* fetchData(action) {
    try {
        const data = yield call(fetchElectricalParameter, action.payload);
        yield put(loadViewDataSuccess(data));
    } catch (error) {
        yield put(loadViewDataError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_ELECTRICALPARAMETER, fetchData);
}

export const ElectricalParameter = [
    watchFetchData
];