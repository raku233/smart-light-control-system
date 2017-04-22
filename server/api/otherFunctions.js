module.exports = {
    /*能耗查询*/
    GET_ERL: {
        method: 'get',
        pathName: '/Home/get_elr1',
        param: {
            DevName_str: '',
            light_type_str: ''
        },
        requiredParamKeys: ['DevNo_str','date_type_str','dtpBeginDate_str','dtpEndDate_str','chart_type','para_index']
    },

    /*三相电参图*/
    DEV_ERL: {
        method: 'get',
        pathName: '/Home/Dev_elr',
        param: {},
        requiredParamKeys: ['DevNo','begin_str','end_str','chk_U_time_term','OnTime_str','offTime_str','chart_type','para_index']
    },

    /*日用电量*/
     GET_DEV_KWH_PER: {
        method: 'get',
        pathName: '/Home/get_dev_kwh_per',
        param: {
            DevName_str: '',
            light_type_str: ''
        },
        requiredParamKeys: ['DevNo_str','date_type_str','dtpBeginDate_str','dtpEndDate_str','chart_type','para_index']
    },
};