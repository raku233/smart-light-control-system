import { call, put, select, takeEvery } from 'redux-saga/effects';

import { uploadSingleLampDimmingTimeControl } from '../../api/singleLamp.js';
import { UPLOAD_TIMECONTROLSETTING } from './redux.js';

import { showNotification } from '../../utils/notification';

const getStatus = state => state.SingleLampSwitchingTime.viewData;
const getRodInfo = state => state.Common.rodList;

function* uploadData(action) {
    const data = yield select(getStatus);
    const rodInfo = yield select(getRodInfo);
    const param = {
        devID: rodInfo.devID,
        rodNum: rodInfo.selectedRods,
        cmdType: `设置${data.lightNum}`,
        timeSetting: []
    };
    for (const value of data.statusGroup) {
        param.timeSetting.push({
            startTime: value.timeRange.startTime,
            endTime: value.timeRange.endTime,
            lux: value.luminance.value
        });
    }

    const { rslt } = yield call(uploadSingleLampDimmingTimeControl, param);
    if (rslt) {
        yield call(showNotification, rslt);
        yield new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 3500);
        });
    }
}

export function* watchFetchData() {
    yield takeEvery(UPLOAD_TIMECONTROLSETTING, uploadData);
}

export const SingleLampSwitchingTime = [
    watchFetchData
];