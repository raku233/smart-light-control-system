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
                connection: linktree[i][j],
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

// 获取设备分组
const fn_fetchDeviceGroup = sharedRouteHandlerGenerator([COMMON_API.GET_DEVICE_LIST], undefined, ([data]) => {
    const { bigtree } = data;

    return {
        deviceGroup: bigtree
    };
});

//手机端——地图——获取集中器附近的单灯信息
const fn_fetchSingleNearTerminal = sharedRouteHandlerGenerator([COMMON_API.GETSINGLE_MAP_TABLE_VOLT_VIEW], undefined,([data]) => {
    const {single_map_table_volt_view} = data;
    let i = 0;
    const singleNearTerminal = [];
    for(const singleMapView of single_map_table_volt_view){
        const singleMapViewSet = {
            key: i + 1,
            rodName: singleMapView.rod_num,
            devX: singleMapView.DevX,
            devY: singleMapView.DevY
        };
        i++;
        singleNearTerminal.push(singleMapViewSet);
    }
    const returnData = {singleNearTerminal: singleNearTerminal};
    return JSON.stringify(returnData);
});

//手机端——登录
const fn_fetchLogin = sharedRouteHandlerGenerator([COMMON_API.CKLOGIN], undefined, ([data]) => {
    return data;
});

//手机端——附近地图——请求坐标附近范围的集中器
const fn_fetchNearMapDev = sharedRouteHandlerGenerator([COMMON_API.DEVINFO_MAP_CENTER], param => {
    const { centerX, centerY, radKm, nearP } = param;
    return{
        centerX: centerX,
        centerY: centerY,
        rad_km: radKm,
        near_p: nearP,
    };
}, ([data]) => {
    const { DevNo, DevName, linkflag, DevXDevY } = data;
    let i = 0;
    const nearMapDev = [];
    for(const devNoI of DevNo) {
        const nearMapDevSet = {
            key: i + 1,
            devNo: DevNo[i].toString().trim(),
            devName: DevName[i].toString().trim(),
            linkFlag: linkflag[i].toString().trim(),
            devXY: DevXDevY[i].toString().trim(),
        };
        nearMapDev.push(nearMapDevSet);
        i++;
    };
    const returnData = {
        nearMapDevMes: nearMapDev,
    };
    return returnData;
});

module.exports = {
    'POST /device_list': fn_fetchDeviceList,
    'POST /device_group': fn_fetchDeviceGroup,
    'POST /single_near_terminal/get_status': fn_fetchSingleNearTerminal,
    'POST /login': fn_fetchLogin,
    'POST /near_map_dev': fn_fetchNearMapDev,
};



