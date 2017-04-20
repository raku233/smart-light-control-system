import homeReducer from '../views/home/redux';
import commonReducer from '../components/common/redux';
import ManualLampSwitching from '../views/manual-lamp-switching/redux';
import ElectricalParameter from '../views/electrical-parameter/redux';
import LampSwitchingTime from '../views/lamp-switching-time/redux';

export default {
    home: homeReducer,
    common: commonReducer,
    ManualLampSwitching,
    ElectricalParameter,
    LampSwitchingTime
};

// todo: 考虑使用高阶reducer