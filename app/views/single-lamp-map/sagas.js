import { call, put, select, takeEvery } from 'redux-saga/effects';

import { fetchSingleNearTerminal, fetchElectricParameter } from '../../api/singleLamp';
import { LOAD_RODMARKER, loadViewDataSuccess, loadViewDataError, LOAD_ELECTRICPARAMETER, loadElectricParameterSuccess, loadElectricParameterError } from './redux';

const getStatus = state => state.SingleLampMap.viewData;

function* fetchMarkerData(action) {
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

function* fetchElectricParameterData(action) {
    const { Dev_id } = action.payload;
    const param = {
        Dev_id
    };
    try {
        const data = yield call(fetchElectricParameter, param);
        yield put(loadElectricParameterSuccess(data));
    } catch (error) {
        yield put(loadElectricParameterError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_RODMARKER, fetchMarkerData);
    yield takeEvery(LOAD_ELECTRICPARAMETER, fetchElectricParameterData);
}

export const SingleLampMap = [
    watchFetchData
];