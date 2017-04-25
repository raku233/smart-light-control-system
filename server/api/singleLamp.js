module.exports = {
    /* 单灯报警 */
    GET_TERMINAL_MES: {
        method: 'get',
        pathName: '/Single/GetAlarm_single_dev_count',
        param: {},
        requiredParamKeys: []
    }, // 获取终端号、名字、报警内容
    GET_SINGLE_ALARM_MES: {
        method: 'get',
        pathName: '/Single/Getsingle_volt_detail',
        param: {},
        requiredParamKeys: ['Dev_id']
    }, // 获取相应终端下杆号、报警内容、时间——手机端
    GET_ALL_SINGLE_ALARM_MES:{
        method: 'get',
        pathName: '/Single/Getsingle_all_volt_detail',
        param:{},
        requiredParamKeys: ['devIdSet']
    }, // 获取所有终端下杆号、报警内容、时间——网页端



    /*单灯故障查询*/
    GET_SINGLE_FAULT_MES:{
        method: 'get',
        pathName: '/Single/Getsingle_volt_detail_alarm_his',
        param: {},
        requiredParamKeys: ['Dev_id','begin_date_str','end_date_str','pageSize','CurrentPageIndex']
    },//获取终端号、时间、杆号、末端编码、杆名、警报

    /* 单灯电参历史  */
    GET_SINGLE_PARAM_HISTRORY_INIT:{
        method: 'get',
        pathName: '/Single/Getsingle_volt_detail',
        param: {},
        requiredParamKeys: ['Dev_id','pageSize','CurrentPageIndex']
    }, // 初始化页面（第一次进页面的时候使用）
    GET_SINGLE_PARAM_HISTRORY_QUERY:{
        method: 'get',
        pathName: '/Single/Getsingle_volt_detail_I_his',
        param: {},
        requiredParamKeys: ['Dev_id','begin_date_str','end_date_str','CurrentPageIndex','pageSize','rod_num','chk_I_time','BeginH','endH','chk_I_zero','chk_I_not_zero','chk_U_zero','chk_U_not_zero']
    }, //点击查询的时候调用


};