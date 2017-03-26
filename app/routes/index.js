import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/frame';
import Home from '../views/home';
import Detail from '../views/detail';
import ManualLampSwitching from '../views/manual-lamp-switching';
import LampSwitchingTime from '../views/lamp-switching-time';
import CompulsiveLampSwitching from '../views/compulsive-lamp-switching';

const routes = history => (
    <Router history={history}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home} />
            <Route path="/integrated_terminal/manual_lamp_switching" component={ManualLampSwitching} />
            <Route path="/integrated_terminal/lamp_switching_time" component={LampSwitchingTime} />
            <Route path="/single_lamp/compulsive_lamp_switching" component={CompulsiveLampSwitching} />
            <Route path="/detail/:id" component={Detail} />
        </Route>
    </Router>
);

export default routes;
