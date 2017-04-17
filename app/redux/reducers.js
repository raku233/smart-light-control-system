import homeReducer from '../views/home/redux';
import commonReducer from '../components/common/redux';
import ManualLampSwitching from '../views/manual-lamp-switching/redux';
import ElectricalParameter from '../views/electrical-parameter/redux';

export default {
    home: homeReducer,
    common: commonReducer,
    ManualLampSwitching,
    ElectricalParameter
};

// todo: 考虑使用高阶reducer