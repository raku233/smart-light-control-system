import { watchFetchData as deviceListWatcher } from './device-list/saga';
import { watchFetchData as rodListWatcher } from './single-lamp-parameter-table/sagas';

export const Common = [
    deviceListWatcher,
    rodListWatcher
];