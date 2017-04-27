import { watchFetchData as deviceListWatcher } from './device-list/saga';
import { watchFetchData as rodListWatcher } from './rod-list/sagas';

export const Common = [
    deviceListWatcher,
    rodListWatcher
];