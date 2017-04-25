import { call, put, select, takeEvery } from 'redux-saga/effects';

import { login, logout } from '../../api/common';
import { UPLOAD_USERINFO, uploadViewDataSuccess, uploadViewDataError } from './redux';


function* uploadData(action) {
    const param = action.payload;
    let data;

    try {
        if (param.action === 'login') {
            data = yield call(login, { userName: param.userName, password: param.password });
        } else {
            data = yield call(logout, {});
        }
        yield put(uploadViewDataSuccess(data));
    } catch (error) {
        yield put(uploadViewDataError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(UPLOAD_USERINFO, uploadData);
}

export const Login = [
    watchFetchData
];