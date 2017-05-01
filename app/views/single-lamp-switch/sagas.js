import { call, put, select, takeEvery } from 'redux-saga/effects';

import { uploadSingleLampDimming } from '../../api/singleLamp';
import { UPLOAD_LUX, uploadLuxSuccess, uploadLuxError } from './redux';

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
    } catch (error) {
        yield put(uploadLuxError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(UPLOAD_LUX, fetchLuxData);
}

export const SingleLampSwitch = [
    watchFetchData
];