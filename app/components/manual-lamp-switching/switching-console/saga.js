import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchSwitchingStatus } from '../../../api/integratedTerminal';
import { LOAD_MANUALSWITCHINGSTATUS, loadManualSwitchingStatusSuccess, loadManualSwitchingStatusError } from './redux';

function* fetchData(action) {
    try {
        const data = yield call(fetchSwitchingStatus, action.payload);
        yield put(loadManualSwitchingStatusSuccess(data));
    } catch (error) {
        yield put(loadManualSwitchingStatusError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_MANUALSWITCHINGSTATUS, fetchData);
}