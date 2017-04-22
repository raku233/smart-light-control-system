module.exports = {
    /* 手动开关灯 */
    GDEV_ADDR_LIGHT: {
        method: 'get',
        pathName: '/Onoff/Gdev_addr_light',
        param: {},
        requiredParamKeys: ['Dev_id']
    }, // 获取支路名称
    GSET_TIME_CLASS: {
        method: 'get',
        pathName: '/Onoff/Gset_time_class',
        param: {},
        requiredParamKeys: ['Dev_id']
    }, // 获取可用支路
    GSET_ONOFF_READ: {
        method: 'get',
        pathName: '/Onoff/Gset_Onoff_read',
        param: {},
        requiredParamKeys: ['Dev_id']
    }, // 支路开关状态
    SET_ONOFF: {
        method: 'get',
        pathName: '/wcf/set_onoff',
        param: {},
        requiredParamKeys: ['Dev_id', 'N8_str', 'mode_str']
    }, // 设置支路开关状态
    GET_CS_TABLE: {
        method: 'get',
        pathName: '/Onoff/Get_cs_table',
        param: {},
        requiredParamKeys: ['Dev_id']
    }, // 获取详细电参
    GONOFF_R_MAX_VIEW: {
        method: 'get',
        pathName: '/Onoff/GOnoff_r_max_view',
        param: {},
        requiredParamKeys: ['Dev_id', 'term_str']
    }, // 获取时控数据
    


    /*当前警报*/
    GET_NOW_ALARM:{
        method: 'get',
        pathName: '/Tree/DevInfoAlarm',
        param: {
            log_name: 'admin',
            log_pass: 'changhe123',
            sn_node_mode: '1'
        },
        requiredParamKeys: []
    },//获取当前警报
};