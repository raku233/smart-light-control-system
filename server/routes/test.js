const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');

const COMMON_API = require('../api/common.js'),
    SPECIFIC_API = require('../api/integratedTerminal.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);
const fn_fetchData = sharedRouteHandlerGenerator(
    [SPECIFIC_API.GSET_TIME_CLASS, SPECIFIC_API.GSET_ONOFF_READ]
);

module.exports = {
    'POST /set': fn_fetchData
};