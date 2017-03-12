const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');

const COMMON_API = require('../api/common.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);

// 获取设备列表
const fn_fetchDeviceList = sharedRouteHandlerGenerator(COMMON_API.GET_DEVICE_LIST);

module.exports = {
    'POST /device_list': fn_fetchDeviceList
};



