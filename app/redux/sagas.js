import * as homeSagas from '../views/home/sagas';

export default function* rootSaga() {
    yield [
        homeSagas.previewListSaga()
    ];
}
