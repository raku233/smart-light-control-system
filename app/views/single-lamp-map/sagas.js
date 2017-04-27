import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchSingleNearTerminal } from '../../api/singleLamp';
import { LOAD_RODMARKER, loadViewDataSuccess, loadViewDataError } from './redux';

const getStatus = state => state.SingleLampMap.viewData;

function* fetchData(action) {
    const { Dev_Id } = action.payload;
    let param = {
        Dev_Id
    };
    try {
        if (!param.Dev_Id) {
            const status = yield select(getStatus),
                Dev_Id = status.devID;
            param = { Dev_Id };
        }
        const data = yield call(fetchSingleNearTerminal, param);
        yield put(loadViewDataSuccess(data));
    } catch (error) {
        yield put(loadViewDataError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_RODMARKER, fetchData);
}

export const SingleLampMap = [
    watchFetchData
];