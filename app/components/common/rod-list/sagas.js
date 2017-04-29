import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchRodList } from '../../../api/singleLamp';
import { LOAD_RODLIST, loadViewDataSuccess, loadViewDataError } from './redux';

function* fetchData(action) {
    try {
        const data = yield call(fetchRodList, action.payload);
        yield put(loadViewDataSuccess(data));
    } catch (error) {
        yield put(loadViewDataError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_RODLIST, fetchData);
}