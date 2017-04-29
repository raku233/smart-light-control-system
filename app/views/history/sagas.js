import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchSingleFaultStatus, fetchSingleParamHistoryInit, fetchSingleParamHistoryQuery } from '../../api/singleLamp.js';
import { LOAD_SINGLEFAULTSTATUS, loadSingleFaultStatusSuccess, loadSingleFaultStatusError, LOAD_DEVICEID, loadViewDataSuccess, loadViewDataError, LOAD_SINGLEPARAMSTATUS, loadSingleParamStatusSuccess, loadSingleParamStatusError } from './redux';

const getStatus = state => state.History.viewData;

function* fetchRodData(action) {
    const { Dev_id } = action.payload;
    try {
        const param = {
            Dev_id,
            pageSize: 0,
            CurrentPageIndex: 0
        };
        const data = yield call(fetchSingleParamHistoryInit, param);
        yield put(loadViewDataSuccess(data));
    } catch (error) {
        yield put(loadViewDataError(error));
    }
}

function* fetchSingleFaultData(action) {
    const { rangeDate, Dev_id } = action.payload;
    try {
        const param = {
            Dev_id,
            begin_date_str: rangeDate[0],
            end_date_str: rangeDate[1],
            pageSize: 0,
            CurrentPageIndex: 0
        };
        const data = yield call(fetchSingleFaultStatus, param);
        yield put(loadSingleFaultStatusSuccess(data));
    } catch (error) {
        yield put(loadSingleFaultStatusError(error));
    }
}

function* fetchSingleParamData(action) {
    const { Dev_id, rangeDate, electricOption } = action.payload;
    const { selectRod, currentLargeThanZero, currentEqualToZero, voltageLargeThanZero, voltageEqualToZero } = electricOption;
    try {
        const param = {
            Dev_id,
            begin_date_str: rangeDate[0],
            end_date_str: rangeDate[1],
            CurrentPageIndex: 0,
            pageSize: 0,
            rod_num: selectRod,
            chk_I_time: false,
            BeginH: 0,
            endH: 0,
            chk_I_zero: currentEqualToZero,
            chk_I_not_zero: currentLargeThanZero,
            chk_U_zero: voltageEqualToZero,
            chk_U_not_zero: voltageLargeThanZero
        };
        const data = yield call(fetchSingleParamHistoryQuery, param);
        yield put(loadSingleParamStatusSuccess(data));
    } catch (error) {
        yield put(loadSingleParamStatusError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_SINGLEFAULTSTATUS, fetchSingleFaultData);
    yield takeEvery(LOAD_DEVICEID, fetchRodData);
    yield takeEvery(LOAD_SINGLEPARAMSTATUS, fetchSingleParamData);
}

export const History = [
    watchFetchData
];
