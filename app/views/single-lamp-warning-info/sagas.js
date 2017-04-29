import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchTerminalMessage, fetchWarningInfo } from '../../api/singleLamp.js';
import { LOAD_TERMINALMESSAGE, loadTerminalMessageSuccess, loadTerminalMessageError, LOAD_WARNINGINFO, loadWarningInfoSuccess, loadWarningInfoError } from './redux.js';

// 获取store中SingleLampWarningInfo中的终端信息
function* fetchTerminalData(action) {
    const param = action.payload;
    try {
        const data = yield call(fetchTerminalMessage, param);
        yield put(loadTerminalMessageSuccess(data));
    } catch (error) {
        yield put(loadTerminalMessageError(error));
    }
}

// 获取store中SingleLampWarningInfo中的警报信息
function* fetchWarningData(action) {
    const param = {
        Dev_id: action.payload.Dev_id
    };
    try {
        const data = yield call(fetchWarningInfo, param);
        yield put(loadWarningInfoSuccess(data));
    } catch (error) {
        yield put(loadWarningInfoError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_TERMINALMESSAGE, fetchTerminalData);
    yield takeEvery(LOAD_WARNINGINFO, fetchWarningData);
}

export const SingleLampWarningInfo = [
    watchFetchData
];