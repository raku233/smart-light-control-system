import { watchFetchData as deviceListWatcher } from './device-list/saga';

export const commonSagas = [
    deviceListWatcher
];