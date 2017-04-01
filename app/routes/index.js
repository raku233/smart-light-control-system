import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/frame';
import Home from '../views/home';
import Detail from '../views/detail';
import ManualLampSwitching from '../views/manual-lamp-switching';
import LampSwitchingTime from '../views/lamp-switching-time';
import ElectricalParameter from '../views/electrical-parameter';


const routes = history => (
    <Router history={history}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home} />
            <Route path="/integrated_terminal/manual_lamp_switching" component={ManualLampSwitching} />
            <Route path="/integrated_terminal/lamp_switching_time" component={LampSwitchingTime} />
            <Route path="/integrated_terminal/electrical_parameter" component={ElectricalParameter} />
            <Route path="/detail/:id" component={Detail} />
        </Route>
    </Router>
);

export default routes;
