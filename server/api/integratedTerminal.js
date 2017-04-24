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
    SET_ONOFFTIME: {
        method: 'get',
        pathName: '/wcf/set_onofftime',
        param: {},
        requiredParamKeys: ['Dev_id', 'term_str', 'time1_on', 'time1_off', 'time2_on', 'time2_off', 'time3_on', 'time3_off', 'time4_on', 'time4_off', 'time5_on', 'time5_off', 'time6_on', 'time6_off', 'time7_on', 'time7_off', 'time8_on', 'time8_off', 'week_str']
    }, // 设置时控信息

    /* 当前警报 */
    GET_NOW_ALARM: {
        method: 'get',
        pathName: '/Tree/DevInfoAlarm',
        param: {
            log_name: 'admin',
            log_pass: 'changhe123',
            sn_node_mode: '1'
        },
        requiredParamKeys: []
    }, // 获取当前警报

    /* 集中故障查询 */
    GET_CENTRALIZED_FAULT: {
        method: 'get',
        pathName: '/Onoff/GetAlarm_table',
        param: {},
        //终端号、报警起始时间，后两个为0（貌似没用）
        requiredParamKeys: ['Dev_id','begin_date_str', 'end_date_str', 'pageSize','CurrentPageIndex']
    },//获取报警内容和时间

};