import { call, put, select, takeEvery } from 'redux-saga/effects';

import { uploadGroupTimeControlSetting, uploadGroupWeekControlSetting, uploadGroupSwitchingControlSetting } from '../../api/integratedTerminal';
import { UPLOAD_GROUPSWITCHINGCONTROLSETTING, UPLOAD_GROUPTIMECONTROLSETTING, UPLOAD_GROUPWEEKCONTROLSETTING, uploadGroupControlSettingSuccess, uploadGroupControlSettingError } from './redux';

import { showNotification } from '../../utils/notification.js';

// 获取store中LampSwitchingTime视图数据
const getStatus = state => state.GroupControlSetting.viewData;

function* uploadTimeSettingData(action) {
    const data = yield select(getStatus);
    const param = {
        groupName: data.groupName,
        groupType: data.groupType,
        statusGroup: data.timeStatusGroup,
        period: data.timeSettingConfig.period
    };

    try {
        const { rslt } = yield call(uploadGroupTimeControlSetting, param);
        yield put(uploadGroupControlSettingSuccess(rslt));
        yield call(showNotification, rslt);
    } catch (error) {
        yield put(uploadGroupControlSettingError(error));
    }
}

function* uploadWeekSettingData(action) {
    const data = yield select(getStatus);
    const param = {
        groupName: data.groupName,
        groupType: data.groupType,
        workPeriod: data.timeSettingConfig.workPeriod
    };

    try {
        const { rslt } = yield call(uploadGroupWeekControlSetting, param);
        yield put(uploadGroupControlSettingSuccess(rslt));
        yield call(showNotification, rslt);
    } catch (error) {
        yield put(uploadGroupControlSettingError(error));
    }
}

function* uploadSwitchingSetting(action) {
    const data = yield select(getStatus);
    const param = {
        devID: data.devID,
        statusGroup: data.switchingStatusGroup,
        config: data.lampSwitchingConfig
    };

    try {
        const { rslt } = yield call(uploadGroupSwitchingControlSetting, param);
        yield put(uploadGroupControlSettingSuccess(rslt));
        yield call(showNotification, rslt);
    } catch (error) {
        yield put(uploadGroupControlSettingError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(UPLOAD_GROUPSWITCHINGCONTROLSETTING, uploadSwitchingSetting);
    yield takeEvery(UPLOAD_GROUPTIMECONTROLSETTING, uploadTimeSettingData);
    yield takeEvery(UPLOAD_GROUPWEEKCONTROLSETTING, uploadWeekSettingData);
}

export const GroupControlSetting = [
    watchFetchData
];