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
        }
    }
};