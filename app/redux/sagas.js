import { homeSagas } from '../views/home/sagas';
import { commonSagas } from '../components/common/sagas';
import { ManualLampSwitching } from '../views/manual-lamp-switching/sagas';

function combineSagas(...sagaArrays) {
    let sagaList = [];
    for (const sagas of sagaArrays) {
        sagaList = [...sagaList, sagas.map(saga => saga())];
    }

    return sagaList;
}

export default function* rootSaga() {
    const saga = combineSagas(homeSagas, commonSagas, ManualLampSwitching);

    yield saga;
}
