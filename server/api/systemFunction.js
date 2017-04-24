module.exports = {
    /* 手机端——电参 */
    GET_CS_TABLE: {
        method: 'get',
        pathName: '/Onoff/Get_cs_table',
        param: {},
        requiredParamKeys: ['Dev_id']
    }, //刷新
    GET_DETAILELECMSG: {
        method: 'get',
        pathName: '/wcf/get_DetailElecMsg',
        param: {},
        requiredParamKeys: ['Dev_id']
    }, //获取
    
    /* 手机端——单灯时控组设 */
    GETDEV_SINGLE_TIME_GHO: {
        method: 'get',
        pathName: '/Onoff/GetDev_single_time_gbo',
        param: {},
        requiredParamKeys: ['Dev_id']
    }, //刷新
    GET_DETAILELECMSG: {
        method: 'get',
        pathName: '/Onoff/GetDev_single_time_gbo',
        param: {},
        requiredParamKeys: ['Dev_id']
    }, //获取

    /* 手机端—— */
    GETDEV_SINGLE_TIME_GHO: {
        method: 'get',
        pathName: '/Single/Getsingle_volt_detail',
        param: {
            pageSize: '0',
            CurrentPageIndex: '0'
        },
        requiredParamKeys: ['Dev_id']
    },
    
};