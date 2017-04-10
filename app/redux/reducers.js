import homeReducer from '../views/home/redux';
import commonReducer from '../components/common/redux';
import ManualLampSwitching from '../views/manual-lamp-switching/redux';

export default {
    home: homeReducer,
    common: commonReducer,
    ManualLampSwitching
};