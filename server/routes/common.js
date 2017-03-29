const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');

const COMMON_API = require('../api/common.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);

// 获取设备列表
const fn_fetchDeviceList = sharedRouteHandlerGenerator(COMMON_API.GET_DEVICE_LIST, data => {
    const { bigtree, smalltree } = data;
    const deviceList = {};

    for (let index = 0; index < bigtree.length; index++) {
        deviceList[bigtree[index]] = smalltree[index];
    }

    return JSON.stringify(deviceList);
});

module.exports = {
    'POST /device_list': fn_fetchDeviceList
};



