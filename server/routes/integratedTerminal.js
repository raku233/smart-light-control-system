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

// 获取详细电参数
const fn_fetchElectricalParameter = sharedRouteHandlerGenerator([SPECIFIC_API.GET_CS_TABLE], undefined, ([dataX]) => {
    const parameter = dataX.cs_table;
    // 终端电参数
    const groupA = {
        groupType: 'A组',
        voltage: parameter.Ua,
        current: parameter.Ia,
        outputVoltage: parameter.Ua_out,
        powerFactor: parameter.PF_a,
        activePower: parameter.kWa,
        reactivePower: parameter.kVARa
    };
    const groupB = {
        groupType: 'B组',
        voltage: parameter.Ub,
        current: parameter.Ib,
        outputVoltage: parameter.Ub_out,
        powerFactor: parameter.PF_b,
        activePower: parameter.kWb,
        reactivePower: parameter.kVARb
    };
    const groupC = {
        groupType: 'C组',
        voltage: parameter.Uc,
        current: parameter.Ic,
        outputVoltage: parameter.Uc_out,
        powerFactor: parameter.PF_c,
        activePower: parameter.kWc,
        reactivePower: parameter.kVARc
    };
    const deviceParameter = [groupA, groupB, groupC];
    console.log(deviceParameter);
    // 接触器参数
    const contactorParameter = [{
        con1: parameter.con1,
        con2: parameter.con2,
        con3: parameter.con3,
        con4: parameter.con4,
        con5: parameter.con5,
        con6: parameter.con6,
        con7: parameter.con7,
        con8: parameter.con8,
        saving: parameter.saving,
        door1: parameter.door1,
        door2: parameter.door2
    }];

    const data = { deviceParameter, contactorParameter };
    return JSON.stringify(data);
});

// 获取时控信息
const fn_fetchTimeControlInfo = sharedRouteHandlerGenerator([SPECIFIC_API.GSET_TIME_CLASS, SPECIFIC_API.GONOFF_R_MAX_VIEW], undefined, ([dataX, dataY]) => {
    const availableBranches = dataX.enable_time_class,
        timeControlInfo = dataY.Onoff_r_max_view;

    const statusGroup = [];
    for (let i = 0; i < availableBranches.length; i++) {
        if (availableBranches[i]) {
            const statusItem = {
                key: i + 1,
                outputGroups: `第${i + 1}路输出`,
                startTime: timeControlInfo[`switch${i + 1}_timeOff`],
                endTime: timeControlInfo[`switch${i + 1}_timeOn`]
            };
            statusGroup.push(statusItem);
        }
    }

    let workPeriod = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
    workPeriod = workPeriod.filter((value, index) => {
        return timeControlInfo.versionId[index] == true;
    });
    const config = { workPeriod };

    const data = { statusGroup, config };
    return JSON.stringify(data);
});

// 网页：单灯报警信息——终端信息 移动端：单灯报警——终端信息
const fn_fetchSingleAlarmTerminalMessage = sharedRouteHandlerGenerator([SPECIFIC_API.GET_TERMINAL_MES], undefined, ([data]) =>{
    const { DevNo, DevName, alarm_count } = data;
    const terminalAlarmMes = [];
    let i = 0;
    for (const devNo of DevNo) {
        const devalarmSet = {
            devId: DevNo[i],
            devName: DevName[i],
            devAlarm: alarm_count[i]
        };
        terminalAlarmMes.push(devalarmSet);
        i++;
    }
    const returndata = { terminalAlarmMes: terminalAlarmMes };
    console.log(returndata);
    return JSON.stringify(returndata);
});

// 网页：单灯报警信息——单灯信息 移动端：单灯报警——单灯信息
const fn_fetchSingleAlarmSingleMessage = sharedRouteHandlerGenerator([SPECIFIC_API.GET_SINGLE_ALARM_MES], undefined, ([data]) => {
    const { single_volt_detail } = data;
    let i = 0;
    const singleAlarmDetail = [];
    for (const singleAlarmGroup of single_volt_detail) {
        const singleAlarmSet = {
            rodNum: singleAlarmGroup.rod_num,
            alarmInfo: singleAlarmGroup.alarm_info,
            updateTime: singleAlarmGroup.update_dtm
        };
        singleAlarmDetail.push(singleAlarmSet);
    }
    const returndata = { singleAlarmDetail };
    console.log(returndata);
    return JSON.stringify(returndata);
});

/* 网页——当前警报,移动端——警报 */
const fn_fetchAlarmNow = sharedRouteHandlerGenerator([SPECIFIC_API.GET_NOW_ALARM], undefined, ([data]) => {
    const { node_name, alarm_info, alarm_time } = data;
    let i = 0;
    const alarmNow = [];
    for (const nodeNameI of node_name){
        let j = 0;
        for (const nodeNameJ of nodeNameI) {
            const alarmNowSet = {
                nodeName: node_name[i][j],
                alarmInfo: alarm_info[i][j],
                alarmTime: alarm_time[i][j]
            };
            alarmNow.push(alarmNowSet);
            j++;
        }
       i++;
    }
    const returndata = { alarmNow };
    return JSON.stringify(returndata);
});

// 设置时控信息
const fn_setTimeControlInfo = sharedRouteHandlerGenerator([SPECIFIC_API.SET_ONOFFTIME], param => {
    const { devID, period, statusGroup, config } = param,
        { workPeriod } = config;

    const weekArray = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
    let week_str = '';
    for (const weekDay of weekArray) {
        if (workPeriod.includes(weekDay)) week_str += '1';
        else week_str += '0';
    }

    let parameter = {};
    for (let i = 0; i < 8; i++) {
        parameter[`time${i + 1}_on`] = statusGroup[i].startTime || '0:00';
        parameter[`time${i + 1}_off`] = statusGroup[i].endTime || '0:00';
    }

    return { ...parameter, Dev_id: devID, term_str: period, week_str };
});

module.exports = {
    'POST /manual_lamp_switching/get_status': fn_fetchSwitchingStatus,
    'POST /manual_lamp_switching/set_status': fn_setSwitchingStatus,
    'POST /electrical_parameter/get_status': fn_fetchElectricalParameter,
    'POST /lamp_switching_time/get_status': fn_fetchTimeControlInfo,
    'POST /lamp_switching_time/set_status': fn_setTimeControlInfo,
    'POST /single_alarm_terminal_message/get_status': fn_fetchSingleAlarmTerminalMessage,
    'POST /single_lamp_warning_info/get_status': fn_fetchSingleAlarmSingleMessage,
    'POST /current_warning/get_status': fn_fetchAlarmNow
};