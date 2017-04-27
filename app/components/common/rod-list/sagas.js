import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchRodList } from '../../../api/singleLamp';
import { LOAD_RODLIST, loadRodListSuccess, loadRodListError } from './redux';

function* fetchData(action) {
    try {
        const data = yield call(fetchRodList, action.payload);
        yield put(loadRodListSuccess(data));
    } catch (error) {
        yield put(loadRodListError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_RODLIST, fetchData);
}