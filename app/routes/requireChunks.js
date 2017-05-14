export const Home = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/home').default);
    }, 'Home');
};

export const ManualLampSwitching = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/manual-lamp-switching').default);
    }, 'ManualLampSwitching');
};

export const LampSwitchingTime = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/lamp-switching-time').default);
    }, 'LampSwitchingTime');
};

export const RecordQuery = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/record-query').default);
    }, 'RecordQuery');
};

export const ElectricalParameter = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/electrical-parameter').default);
    }, 'ElectricalParameter');
};

export const CurrentWarning = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/current-warning').default);
    }, 'CurrentWarning');
};

export const GroupControlSetting = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/group-control-setting').default);
    }, 'GroupControlSetting');
};

export const StabilivoltInterval = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/stabilivolt-interval').default);
    }, 'StabilivoltInterval');
};

export const SingleLampMap = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/single-lamp-map').default);
    }, 'SingleLampMap');
};

export const SingLampControl = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/single-lamp-control').default);
    }, 'SingLampControl');
};

export const SingleLampSwitch = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/single-lamp-switch').default);
    }, 'SingleLampSwitch');
};

export const SingleLampSwitchingTime = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/single_lamp_switching_time').default);
    }, 'SingleLampSwitchingTime');
};

export const History = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/history').default);
    }, 'History');
};

export const SingLampWarningInfo = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/single-lamp-warning-info').default);
    }, 'SingLampWarningInfo');
};

export const EnergyConsumptionQuery = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/energy-consumption-query').default);
    }, 'EnergyConsumptionQuery');
};

export const AssetsProportionChart = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/assets-proportion-chart').default);
    }, 'AssetsProportionChart');
};

export const dailyElectricityConsumptionQuery = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/daily-electricity-consumption-query').default);
    }, 'dailyElectricityConsumptionQuery');
};

export const TriphaseElectricityParameterQuery = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../views/triphase-electricity-parameter-query').default);
    }, 'TriphaseElectricityParameterQuery');
};


