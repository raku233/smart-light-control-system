import { watchFetchData as deviceListWatcher } from './device-list/saga';

export const Common = [
    deviceListWatcher
];