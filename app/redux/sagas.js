import { homeSagas } from '../views/home/sagas';
import { Common } from '../components/common/sagas';
import { ManualLampSwitching } from '../views/manual-lamp-switching/sagas';
import { ElectricalParameter } from '../views/electrical-parameter/sagas';
import { LampSwitchingTime } from '../views/lamp-switching-time/sagas';
import { SingleLampWarningInfo } from '../views/single-lamp-warning-info/sagas';
import { History } from '../views/history/sagas';
import { CurrentAlarm } from '../views/current-warning/sagas';
import { EnergyConsumptionChart } from '../views/energy-consumption-query/sagas';
import { SingleLampMap } from '../views/single-lamp-map/sagas';

function combineSagas(...sagaArrays) {
    let sagaList = [];
    for (const sagas of sagaArrays) {
        sagaList = [...sagaList, sagas.map(saga => saga())];
    }

    return sagaList;
}

export default function* rootSaga() {
    const saga = combineSagas(
        homeSagas,
        Common,
        ManualLampSwitching,
        ElectricalParameter,
        LampSwitchingTime,
        SingleLampWarningInfo,
        History,
        CurrentAlarm,
        EnergyConsumptionChart,
        SingleLampMap
    );

    yield saga;
}
