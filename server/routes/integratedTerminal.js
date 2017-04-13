const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');
const getTimeString = require('../utils/time.js');

const COMMON_API = require('../api/common.js'),
    SPECIFIC_API = require('../api/integratedTerminal.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);

// 获取开关灯状态
const fn_fetchSwitchingStatus = sharedRouteHandlerGenerator(
    [SPECIFIC_API.GSET_TIME_CLASS, SPECIFIC_API.GSET_ONOFF_READ], undefined, ([dataX, dataY]) => {
        const availableBranches = dataX.enable_time_class,
            branchStatus = dataY.onoff,
            uid = dataY.Uid;

        // 提取接口返回数据并生成客户端可用响应
        const statusGroup = [];
        for (let i = 0; i < availableBranches.length; i++) {
            if (availableBranches[i]) {
                var statusItem = {};
                statusItem.key = i + 1;
                statusItem.outputGroup = `第${i + 1}路输出`;
                statusItem.state = branchStatus[i];
                statusItem.updateTime = getTimeString(new Date());
                statusItem.checked = branchStatus[i];
                statusGroup.push(statusItem);
            }
        }
        const config = {
            mode: branchStatus[8] ? 'normal' : 'emergency',
            method: branchStatus[9] ? 'manualControl' : 'timeControl'
        };

        const data = { statusGroup, config, uid };
        return JSON.stringify(data);
    }
);

// 设置开关灯状态
const fn_setSwitchingStatus = sharedRouteHandlerGenerator([SPECIFIC_API.SET_ONOFF], param => {
    const { devID, statusGroup, config } = param;
    let N8_str = '',
        mode_str = '';
    // 开关灯状态
    for (const status of statusGroup) {
        if (status.checked) N8_str += '1';
        else N8_str += '0';
    }
    N8_str = N8_str.split('').reverse().join('');
    // 开关灯模式
    if (config.mode === 'normal') mode_str += '110';
    else mode_str += '101';
    if (config.method === 'manualControl') mode_str += '10';
    else mode_str += '01';
    mode_str += '110';

    return {
        Dev_id: devID,
        N8_str,
        mode_str
    };
});

module.exports = {
    'POST /manual_lamp_switching/get_status': fn_fetchSwitchingStatus,
    'POST /manual_lamp_switching/set_status': fn_setSwitchingStatus
};