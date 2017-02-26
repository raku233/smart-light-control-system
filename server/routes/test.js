const routeHandlerGenerator = require('../utils/route-handler-generator.js');

const API = require('../api/test.js'),
      SPECIFIC_API = API.SPECIFIC_API,
      COMMON_API = API.COMMON_API;

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);
const fn_fetchData = sharedRouteHandlerGenerator(SPECIFIC_API.GET_CS_TABLE);

module.exports = {
    'POST /set': fn_fetchData
};