import homeReducer from '../views/home/redux';
import Common from '../components/common/redux';
import ManualLampSwitching from '../views/manual-lamp-switching/redux';
import ElectricalParameter from '../views/electrical-parameter/redux';
import LampSwitchingTime from '../views/lamp-switching-time/redux';
import GroupControlSetting from '../views/group-control-setting/redux';

export default {
    home: homeReducer,
    Common,
    ManualLampSwitching,
    ElectricalParameter,
    LampSwitchingTime,
    GroupControlSetting
};

// todo: 考虑使用高阶reducer