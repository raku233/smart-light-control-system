const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');
const getTimeString = require('../utils/time.js');

const COMMON_API = require('../api/common.js'),
    OTHERPHONE_API = require('../api/otherFunctions.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);

//手机端——能耗查询
const fn_fetchEnergySearch = sharedRouteHandlerGenerator([OTHERPHONE_API.GET_ERL]);

//手机端——三项电参图
const fn_fetchThreePhaseElectricParameter = sharedRouteHandlerGenerator([OTHERPHONE_API.DEV_ERL]);

//手机端——日用电量
const fn_fetchDailyPower = sharedRouteHandlerGenerator([OTHERPHONE_API.GET_DEV_KWH_PER]);


module.exports = {
   'POST /energy_search/get_status': fn_fetchEnergySearch,
   'POST /three_phase_electric_parameter/get_status': fn_fetchThreePhaseElectricParameter,
   'POST /daily_power/get_status': fn_fetchDailyPower,
};