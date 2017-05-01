import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/frame';
import Home from '../views/home';
import ManualLampSwitching from '../views/manual-lamp-switching';
import LampSwitchingTime from '../views/lamp-switching-time';
import RecordQuery from '../views/record-query';
import ElectricalParameter from '../views/electrical-parameter';
import CurrentWarning from '../views/current-warning';
import GroupControlSetting from '../views/group-control-setting';
import StabilivoltInterval from '../views/stabilivolt-interval';
import SingleLampMap from '../views/single-lamp-map';
import SingLampControl from '../views/single-lamp-control';
import SingleLampSwitch from '../views/single-lamp-switch';
import SingleLampSwitchingTime from '../views/single_lamp_switching_time';
import History from '../views/history';
import SingLampWarningInfo from '../views/single-lamp-warning-info';
import EnergyConsumptionQuery from '../views/energy-consumption-query';
import AssetsProportionChart from '../views/assets-proportion-chart';
import dailyElectricityConsumptionQuery from '../views/daily-electricity-consumption-query';
import TriphaseElectricityParameterQuery from '../views/triphase-electricity-parameter-query';


const routes = history => (
    <Router history={history}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home} />
            <Route path="/integrated_terminal/manual_lamp_switching" component={ManualLampSwitching} />
            <Route path="/integrated_terminal/lamp_switching_time" component={LampSwitchingTime} />
            <Route path="/integrated_terminal/record_query" component={RecordQuery} />
            <Route path="/integrated_terminal/electrical_parameter" component={ElectricalParameter} />
            <Route path="/integrated_terminal/current_warning" component={CurrentWarning} />
            <Route path="/integrated_terminal/group_control_setting" component={GroupControlSetting} />
            <Route path="/integrated_terminal/stabilivolt_interval" component={StabilivoltInterval} />
            <Route path="/integrated_terminal/energy_consumption_query" component={EnergyConsumptionQuery} />
            <Route path="/integrated_terminal/daily_electricity_consumption_query" component={dailyElectricityConsumptionQuery} />
            <Route path="/integrated_terminal/assets_proportion_chart" component={AssetsProportionChart} />
            <Route path="/integrated_terminal/triphase_electricity_parameter_query" component={TriphaseElectricityParameterQuery} />
            <Route path="/single_lamp/single_lamp_map" component={SingleLampMap} />
            <Route path="/single_lamp/single_lamp_control" component={SingLampControl} />
            <Route path="/single_lamp/single_lamp_switch" component={SingleLampSwitch} />
            <Route path="/single_lamp/single_lamp_switching_time" component={SingleLampSwitchingTime} />
            <Route path="/single_lamp/history" component={History} />
            <Route path="/single_lamp/single_lamp_warning_info" component={SingLampWarningInfo} />
        </Route>
    </Router>
);

export default routes;
