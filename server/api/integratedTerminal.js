module.exports = {

    /* 手动开关灯 */
    GDEV_ADDR_LIGHT: {
        method: 'get',
        pathName: '/Onoff/Gdev_addr_light',
        param: {}
    }, // 获取支路名称
    GSET_TIME_CLASS: {
        method: 'get',
        pathName: '/Onoff/Gset_time_class',
        param: {}
    }, // 获取可用支路
    GSET_ONOFF_READ: {
        method: 'get',
        pathName: '/Onoff/Gset_Onoff_read',
        param: {}
    } // 支路开关状态
};