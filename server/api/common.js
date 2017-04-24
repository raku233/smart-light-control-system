module.exports = {
    rootURL: 'http://183.233.174.11:10005',
    // 获取设备列表
    GET_DEVICE_LIST: {
        method: 'get',
        pathName: '/Tree/DevInfoGroup',
        param: {
            log_name: 'admin',
            log_pass: 'changhe123',
            sn_node_mode: '1'
        },
        requiredParamKeys: ['DevGroup']
    },
    //手机端——地图——获取集中器附近的单灯信息
    GETSINGLE_MAP_TABLE_VOLT_VIEW: {
        method: 'get',
        pathName: '/Single/Getsingle_map_table_volt_view',
        param: {},
        requiredParamKeys: ['Dev_Id']
    },
    //手机端——登录
    CKLOGIN: {
        method: 'get',
        pathName: '/Login/ckLogin',
        param: {},
        requiredParamKeys: ['username','pwd']
    },

};