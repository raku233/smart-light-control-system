import homeReducer from '../views/home/redux';
import Common from '../components/common/redux';
import ManualLampSwitching from '../views/manual-lamp-switching/redux';
import ElectricalParameter from '../views/electrical-parameter/redux';
import LampSwitchingTime from '../views/lamp-switching-time/redux';
import GroupControlSetting from '../views/group-control-setting/redux';
import SingleLampMap from '../views/single-lamp-map/redux';
import SingleLampWarningInfo from '../views/single-lamp-warning-info/redux';
import History from '../views/history/redux';
import CurrentAlarm from '../views/current-warning/redux';
import SingleLampSwitch from '../views/single-lamp-switch/redux';
import AssetsProportionChart from '../views/assets-proportion-chart/redux';
import EnergyConsumptionQuery from '../views/energy-consumption-query/redux';
import DailyElectricityConsumptionQuery from '../views/daily-electricity-consumption-query/redux';
import TriphaseElectricityParameterQuery from '../views/triphase-electricity-parameter-query/redux';

export default {
    home: homeReducer,
    Common,
    ManualLampSwitching,
    ElectricalParameter,
    LampSwitchingTime,
    GroupControlSetting,
    SingleLampMap,
    SingleLampWarningInfo,
    History,
    CurrentAlarm,
    EnergyConsumptionQuery,
    SingleLampSwitch,
    AssetsProportionChart,
    DailyElectricityConsumptionQuery,
    TriphaseElectricityParameterQuery
};

// todo: 考虑使用高阶reducer