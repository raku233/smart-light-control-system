import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchArticleList } from '../../api/articleList';
import { LOAD_ARTICLES, loadArticlesSuccess, loadArticlesError } from './previewListRedux';

export function* fetchData(action) {
    try {
        const data = yield call(fetchArticleList, action.payload.url);
        yield put(loadArticlesSuccess(data));
    } catch (error) {
        yield put(loadArticlesError(error));
    }
}

export function* watchFetchData() {
    yield takeEvery(LOAD_ARTICLES, fetchData);
}
