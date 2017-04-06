const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');

const COMMON_API = require('../api/common.js'),
    SPECIFIC_API = require('../api/integratedTerminal.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);

// 