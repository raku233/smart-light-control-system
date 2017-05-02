import { watchFetchData as deviceListWatcher } from './device-list/saga';
import { watchFetchData as deviceGroupWatcher } from './device-group/saga';
import { watchFetchData as rodListWatcher } from './rod-list/sagas';

export const Common = [
    deviceListWatcher,
    deviceGroupWatcher,
    rodListWatcher
];