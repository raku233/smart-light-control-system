module.exports = {
    /* 手机端——电参 */
    GET_CS_TABLE: {
        method: 'get',
        pathName: '/Onoff/Get_cs_table',
        param: {},
        requiredParamKeys: ['Dev_id'],
        shouldFiltered: true
    }, //刷新
    GET_DETAILELECMSG: {
        method: 'get',
        pathName: '/wcf/get_DetailElecMsg',
        param: {},
        requiredParamKeys: ['Dev_id'],
        shouldFiltered: true
    }, //获取
    
    /* 手机端——单灯时控组设 */
    GETDEV_SINGLE_TIME_GHO: {
        method: 'get',
        pathName: '/Onoff/GetDev_single_time_gbo',
        param: {},
        requiredParamKeys: ['Dev_id'],
        shouldFiltered: true
    }, //刷新
    GET_SINGLE_TIME_GROUP: {
        method: 'get',
        pathName: '/wcf/get_single_time_group',
        param: {},
        requiredParamKeys: ['Dev_id'],
        shouldFiltered: true
    }, //获取
    SET_SINGLE_TIME_GROUP: {
        method: 'get',
        pathName: '/wcf/set_single_time_group',
        param: {},
        requiredParamKeys: ['Dev_id', 'timeonN_arrstr[0]', 'timeonN_arrstr[1]', 'timeonN_arrstr[2]', 'timeonN_arrstr[3]', 'timeonN_arrstr[4]',
        'timeonN_arrstr[5]', 'timeonN_arrstr[6]', 'timeonN_arrstr[7]', 'timeoffN_arrstr[0]', 'timeoffN_arrstr[1]', 'timeoffN_arrstr[2]',
        'timeoffN_arrstr[3]', 'timeoffN_arrstr[4]', 'timeoffN_arrstr[5]', 'timeoffN_arrstr[6]', 'timeoffN_arrstr[7]', 'sgN_byte[0]',
        'sgN_byte[1]', 'sgN_byte[2]', 'sgN_byte[3]', 'sgN_byte[4]', 'sgN_byte[5]', 'sgN_byte[6]', 'sgN_byte[7]', 'time_termN[0]',
        'time_termN[1]', 'time_termN[2]', 'time_termN[3]', 'time_termN[4]', 'time_termN[5]', 'time_termN[6]', 'time_termN[7]', 
        'sgN_lux1_byte[0]', 'sgN_lux1_byte[1]', 'sgN_lux1_byte[2]', 'sgN_lux1_byte[3]', 'sgN_lux1_byte[4]', 'sgN_lux1_byte[5]', 
        'sgN_lux1_byte[6]', 'sgN_lux1_byte[7]'],
        shouldFiltered: true
    }, //设置

    /* 手机端——初始化单灯 */
    GET_SINGLE_VOLT_DETAIL: {
        method: 'get',
        pathName: '/Single/Getsingle_volt_detail',
        param: {
            pageSize: '0',
            CurrentPageIndex: '0'
        },
        requiredParamKeys: ['Dev_id'],
        shouldFiltered: true
    },

    /* 手机端——上传日志 */
    SAVELOG: {
        method: 'get',
        pathName: '/wcf/savelog',
        param: {
            logname: 'admin',
            logtype: '手机用户'
        },
        requiredParamKeys: ['logstr'],
        shouldFiltered: true
    },

    /* 手机端——时控——初始化 
    GSET_TIME_CLASS: {
        method: 'get',
        pathName: '/Onoff/Gset_time_class',
        param: {},
        requiredParamKeys: ['Dev_id'],
        shouldFiltered: true
    },//初始化路灯个数
    GDEV_ADDR_LIGHT: {
        method: 'get',
        pathName: '/Onoff/Gdev_addr_light',
        param: {},
        requiredParamKeys: ['Dev_id'],
        shouldFiltered: true
    },//初始化路灯名字
    GONOFF_R_MAX_VIEW: {
        method: 'get',
        pathName: '/Onoff/GOnoff_r_max_view',
        param: {},
        requiredParamKeys: ['Dev_id'],
        shouldFiltered: true
    },//初始化路灯时间信息
    GONOFF_R_MAX_VIEW: {
        method: 'get',
        pathName: '/Onoff/GOnoff_r_max_view',
        param: {},
        requiredParamKeys: ['Dev_id', 'term_str'],
        shouldFiltered: true
    },//初始化路灯时间信息*/
};