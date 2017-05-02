import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchRodList } from '../../../api/singleLamp';
import { LOAD_RODLIST, loadViewDataSuccess, loadViewDataError } from './redux';

const getStatus = state => state.Common.rodList;

function* fetchData(action) {
    try {
        let param = action.payload;
        if (!param.Dev_id) {
            const status = yield select(getStatus),
                Dev_id = status.devID;
            param = { Dev_id };
        }
        const data = yield call(fetchRodList, param);
        yield put(loadViewDataSuccess(data));
    } catch (error) {
        yield put(loadViewDataError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_RODLIST, fetchData);
}