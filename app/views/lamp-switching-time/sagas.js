import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchTimeControlInfo, uploadTimeControlInfo } from '../../api/integratedTerminal';
import { LOAD_TIMECONTROLINFO, UPLOAD_TIMECONTROLINFO, loadViewDataSuccess, loadViewDataError } from './redux';

import { showNotification } from '../../utils/notification';

// 获取store中LampSwitchingTime视图数据
const getStatus = state => state.LampSwitchingTime.viewData;

function* fetchData(action) {
    let param = action.payload;
    try {
        const status = yield select(getStatus),
            Dev_id = status.devID,
            period = status.period;
        if (!param.Dev_id) {
            param = { Dev_id };
        }
        param = { ...param, term_str: period };
        const data = yield call(fetchTimeControlInfo, param);
        yield put(loadViewDataSuccess(data));
    } catch (error) {
        yield put(loadViewDataError(error));
    }
}

function* uploadData(action) {
    const data = yield select(getStatus);
    const param = {
        devID: data.devID,
        period: data.period,
        statusGroup: data.statusGroup,
        config: data.config
    };

    const { rslt } = yield call(uploadTimeControlInfo, param);
    if (rslt) yield call(showNotification, rslt);
}

export function* watchFetchData() {
    yield takeEvery(LOAD_TIMECONTROLINFO, fetchData);
    yield takeEvery(UPLOAD_TIMECONTROLINFO, uploadData);
}

export const LampSwitchingTime = [
    watchFetchData
];