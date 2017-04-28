module.exports = {
    /*能耗查询*/
    GET_ERL: {
        method: 'get',
        pathName: '/Home/get_elr1',
        param: {
            DevName_str: '',
            light_type_str: ''
        },
        requiredParamKeys: ['DevNo_str','date_type_str','dtpBeginDate_str','dtpEndDate_str','chart_type','para_index'],
        shouldFiltered: true
    },

    /*三相电参图*/
    DEV_ERL: {
        method: 'get',
        pathName: '/Home/Dev_elr',
        param: {},
        requiredParamKeys: ['DevNo','begin_str','end_str','chk_U_time_term','OnTime_str','offTime_str','chart_type','para_index'],
        shouldFiltered: true
    },

    /*日用电量*/
     GET_DEV_KWH_PER: {
        method: 'get',
        pathName: '/Home/get_dev_kwh_per',
        param: {
            DevName_str: '',
            light_type_str: ''
        },
        requiredParamKeys: ['DevNo_str','date_type_str','dtpBeginDate_str','dtpEndDate_str','chart_type','para_index'],
        shouldFiltered: true
    },
     /*资产比例图*/
    GET_ASSET_RATIO:{
        method: 'get',
        pathName: '/Home/get_pen_light_info',
        param: {
           
        },
        requiredParamKeys: ['DevNo_str','Group_type_str', 'pen_type_str', 'Query_type_str','table_type'],
        shouldFiltered: true
    },//获取返回的js代码

    /* 杆号核对 */
    GET_ROD_CHECK:{
        method: 'get',
        pathName: '/Tree/Getsingle_map_temp',
        param: {
           
        },
        requiredParamKeys: ['DevNo_int','Area_name'],
        shouldFiltered: true
    },
    /* 集中核对 */
    GET_CENTRALIZED_CHECK:{
        method: 'get',
        pathName: '/Tree/GetDev_temp',
        param: {
           
        },
        requiredParamKeys: ['DevNo_int','Area_name'],
        shouldFiltered: true
    },
    /* 单灯采集-上传 */
    SETSINGLE_MAP_TEMP:{
        method: 'get',
        pathName: '/Tree/Setsingle_map_temp',
        param: {
           
        },
        requiredParamKeys: ['DevNo_int', 'Area_name', 'rod_num_str', 'rod_real_bool', 'rod_real_str', 'rod_name_bool', 'rod_name', 'XY_bool', 'DevX', 'DevY'],
        shouldFiltered: true
    },
    /* 集中采集-上传 */
    SETDEVTEMP:{
        method: 'get',
        pathName: '/Tree/SetDev_temp',
        param: {
           
        },
        requiredParamKeys: ['DevNo_int', 'Area_name', 'temp_char1', 'DevName_bool', 'DevName', 'XY_bool', 'DevX', 'DevY'],
        shouldFiltered: true
    },
};