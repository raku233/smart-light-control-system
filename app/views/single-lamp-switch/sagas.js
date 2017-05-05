import { call, put, select, takeEvery } from 'redux-saga/effects';

import { uploadSingleLampDimming, uploadSingleLampDimmingEasySet } from '../../api/singleLamp';
import { UPLOAD_LUX, uploadLuxSuccess, uploadLuxError, UPLOAD_EASY_SET, uploadEasySetError, uploadEasySetSuccess } from './redux';

import { showNotification } from '../../utils/notification.js';

const getStatus = state => state.Common.rodList;

function* fetchLuxData(action) {
    try {
        const status = yield select(getStatus);
        const param = {
            devID: status.devID,
            rodNum: status.selectedRods,
            lux1: action.payload.luxState[0],
            lux2: action.payload.luxState[1]
        };

        const data = yield call(uploadSingleLampDimming, param);
        yield put(uploadLuxSuccess(data));
        yield call(showNotification, data.rslt);
    } catch (error) {
        yield put(uploadLuxError(error));
    }
}

function* fetchEasySetData(action) {
    try {
        const status = yield select(getStatus);
        const param = {
            devID: status.devID,
            rodNum: status.selectedRods,
            cmdType: action.payload.cmdType,
            chkFlagStr: action.payload.chkFlagStr,
            objectStr: ''
        }
        const data = yield call(uploadSingleLampDimmingEasySet, param);
        yield put(uploadEasySetSuccess(data));
        yield call(showNotification, data.rslt);
    } catch (error) {
        yield put(uploadEasySetError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(UPLOAD_LUX, fetchLuxData);
    yield takeEvery(UPLOAD_EASY_SET, fetchEasySetData);
}

export const SingleLampSwitch = [
    watchFetchData
];