module.exports = {
    /* 单灯报警 */
    GET_TERMINAL_MES:{
        method: 'get',
        pathName: '/Single/GetAlarm_single_dev_count',
        param: {},
        requiredParamKeys: []
    },//获取终端号、名字、报警内容
    GET_SINGLE_ALARM_MES:{
        method: 'get',
        pathName: '/Single/Getsingle_volt_detail',
        param:{},
        requiredParamKeys: ['Dev_id']
    },//获取相应终端下杆号、报警内容、时间

};