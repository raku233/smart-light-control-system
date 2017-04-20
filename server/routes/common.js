const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');

const COMMON_API = require('../api/common.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);

// 获取设备列表
const fn_fetchDeviceList = sharedRouteHandlerGenerator([COMMON_API.GET_DEVICE_LIST], undefined, ([data]) => {
    const { bigtree, smalltree, linktree, DevXDevY } = data;
    const deviceGroup = {},
        deviceList = [];
    let i = 0;

    for (const devices of smalltree) {
        let j = 0;
        const deviceSet = devices.map(device => {
            return {
                name: device,
                devID: device.substring(0, device.indexOf('-')),
                connection: linktree[i][j++],
                location: DevXDevY[i][j++]
            };
        }, this);
        deviceList.push(deviceSet);
        i++;
    }

    for (let index = 0; index < bigtree.length; index++) {
        deviceGroup[bigtree[index]] = deviceList[index];
    }

    return JSON.stringify(deviceGroup);
});

module.exports = {
    'POST /device_list': fn_fetchDeviceList
};



