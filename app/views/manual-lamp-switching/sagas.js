import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchSwitchingStatus, uploadSwitchingStatus } from '../../api/integratedTerminal';
import { LOAD_MANUALSWITCHINGSTATUS, UPLOAD_MANUALSWITCHINGSTATUS, loadViewDataSuccess, loadViewDataError } from './redux';

// 获取store中ManualLampSwitching视图数据
const getStatus = state => state.ManualLampSwitching.viewData;

function* fetchData(action) {
    let param = action.payload;
    try {
        if (!param.Dev_id) {
            const status = yield select(getStatus),
                Dev_id = status.devID;
            param = { Dev_id };
        }
        const data = yield call(fetchSwitchingStatus, param);
        yield put(loadViewDataSuccess(data));
    } catch (error) {
        yield put(loadViewDataError(error));
    }
}

function* uploadData(action) {
    const param = yield select(getStatus);
    yield call(uploadSwitchingStatus, param);
}

export function* watchFetchData() {
    yield takeEvery(LOAD_MANUALSWITCHINGSTATUS, fetchData);
    yield takeEvery(UPLOAD_MANUALSWITCHINGSTATUS, uploadData);
}

export const ManualLampSwitching = [
    watchFetchData
];