const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');
const getTimeString = require('../utils/time.js');

const COMMON_API = require('../api/common.js'),
    SYSTEMFUNCTION_API = require('../api/systemFunction.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);

//手机端——电参——刷新
const fn_fetchElectricParamRefresh = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.GET_CS_TABLE], undefined, ([data]) => {
    const electricParamMes = data.cs_table;
    const electricParamMesSet = {
        数据时间: electricParamMes.AddTime,
        A相电压: electricParamMes.Ua,
        B相电压: electricParamMes.Ub,
        C相电压: electricParamMes.Uc,
        输出电压A: electricParamMes.Ua_out,
        输出电压B: electricParamMes.Ub_out,
        输出电压C: electricParamMes.Uc_out,
        A相电流: electricParamMes.Ia,
        B相电流: electricParamMes.Ib,
        C相电流: electricParamMes.Ic,
        总有功电度: electricParamMes.Kwha,
        总无功电度: electricParamMes.Kwhb,
        总功率: electricParamMes.Kwhc,
        I1: electricParamMes.I01,
        I2: electricParamMes.I02,
        I3: electricParamMes.I03,
        I4: electricParamMes.I04,
        I5: electricParamMes.I05,
        I6: electricParamMes.I06,
        I7: electricParamMes.I07,
        I8: electricParamMes.I08,
        I9: electricParamMes.I09,
        I10: electricParamMes.I10,
        I11: electricParamMes.I11,
        I12: electricParamMes.I12,
        接触器1: electricParamMes.con1,
        接触器2: electricParamMes.con2,
        接触器3: electricParamMes.con3,
        接触器4: electricParamMes.con4,
        接触器5: electricParamMes.con5,
        接触器6: electricParamMes.con6,
        接触器7: electricParamMes.con7,
        接触器8: electricParamMes.con8,
        门禁1: electricParamMes.door1,
        门禁2: electricParamMes.door2,
        输出空开1: electricParamMes.No1,
        输出空开2: electricParamMes.No2,
        输出空开3: electricParamMes.No3,
        输出空开4: electricParamMes.No4,
        回路时钟: electricParamMes.No5,
        主空开: electricParamMes.No6,
        是否漏电: electricParamMes.No7,
        监控开关: electricParamMes.No8
    };
    const returnData = {
        electricParam: electricParamMesSet
    };
    return JSON.stringify(returnData);
});
//手机端——电参——获取
const fn_fetchElectricParamGet = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.GET_DETAILELECMSG]);
//手机端——初始化单灯
const fn_fetchSingleLampInitialization = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.GET_SINGLE_VOLT_DETAIL], undefined, ([data]) => {
    const { single_volt_detail } = data;
    const singleLampTimeRefreshSet = [];
    let i = 0;
    for(const singleLampTimeRefreshGroup of single_volt_detail) {
        //解析时间
        const AddTime = singleLampTimeRefreshGroup.update_dtm.trim().replace(/[^0-9]/g, '');
        let date = new Date(parseInt(AddTime));
        date = date.getFullYear() + '-' + (date.getMonth()+1) + '-' +(date.getDate()) + ' '+ date.getHours() + ':' + date.getMinutes();
        //解析开关灯状态
        const singleStatus = singleLampTimeRefreshGroup.single_state3.trim();
        let lampOnOffStatus = "0000";
        if(singleStatus.split('#').length >= 2 && singleStatus.split('#')[1].length >= 4){
            lampOnOffStatus = singleStatus.split('#')[1];
        }
        const lamp1Status = lampOnOffStatus.substring(0,1);
        const lamp2Status = lampOnOffStatus.substring(0,1);

        const singleLampTimeRefreshMes = {
            key: singleLampTimeRefreshGroup.rod_num.trim(),
            rodReal: singleLampTimeRefreshGroup.rod_real.trim(), //末端编号
            rodNum: singleLampTimeRefreshGroup.rod_num.trim(), //灯杆号
            lamp1Status: lamp1Status,
            lamp2Status: lamp2Status,
            // 开关灯状态: singleLampTimeRefreshGroup.single_state3.trim(), //开关灯状态
            date: date, //时间
            result: singleLampTimeRefreshGroup.single_state2.trim(), //结果
            I1: singleLampTimeRefreshGroup.I1, //灯1电流
            V1: singleLampTimeRefreshGroup.V_rod, //灯1电压
            lux1: singleLampTimeRefreshGroup.Lux_1, //灯1亮度
            I2: singleLampTimeRefreshGroup.I2, //灯2电流
            V2: singleLampTimeRefreshGroup.V_rod2, //灯2电压
            lux2: singleLampTimeRefreshGroup.Lux_2, //灯2亮度
            rodAlarm: singleLampTimeRefreshGroup.rod_alarm.trim(), //灯杆警报
            alarmInfo: singleLampTimeRefreshGroup.alarm_info.trim(), //总警报内容
            alarm1: singleLampTimeRefreshGroup.alarm_1.trim(), //灯1警报
            alarm2: singleLampTimeRefreshGroup.alarm_2.trim(), //灯2警报
            lamp1Alarm: singleLampTimeRefreshGroup.alarm_3.trim(), //灯1扩警报
            lamp2Alarm: singleLampTimeRefreshGroup.alarm_4.trim(), //灯2扩警报
            rodVUp: singleLampTimeRefreshGroup.rod_V_up, //电压上限
            rodVDown: singleLampTimeRefreshGroup.rod_V_down, //电压下限
            I1Up: singleLampTimeRefreshGroup.I1_up, //电流1上限
            I2Up: singleLampTimeRefreshGroup.I2_up, //电流2上限
            lamp1Up: singleLampTimeRefreshGroup.I3_up, //灯1阈值
            lamp2Up: singleLampTimeRefreshGroup.I4_up, //灯2阈值
    };
    i++;
    singleLampTimeRefreshSet.push(singleLampTimeRefreshMes);
    }
    const returnData = {
        singleLampDetial: singleLampTimeRefreshSet
    };
    return returnData;
});
//手机端——单灯时控组设——刷新
const fn_fetchSingleLampTimeSetRefresh = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.GETDEV_SINGLE_TIME_GHO], undefined, ([data]) => {
    const{ Dev_single_time_gbo } = data;
    const sg = [
        Dev_single_time_gbo.sg1,
        Dev_single_time_gbo.sg1b,
        Dev_single_time_gbo.sg2,
        Dev_single_time_gbo.sg2b,
        Dev_single_time_gbo.sg3,
        Dev_single_time_gbo.sg3b,
        Dev_single_time_gbo.sg4,
        Dev_single_time_gbo.sg4b,
    ];
    const sgTimeon = [
       Dev_single_time_gbo.sg1_timeon1,
       Dev_single_time_gbo.sg1_timeon2,
       Dev_single_time_gbo.sg2_timeon1,
       Dev_single_time_gbo.sg2_timeon2,
       Dev_single_time_gbo.sg3_timeon1,
       Dev_single_time_gbo.sg3_timeon2,
       Dev_single_time_gbo.sg4_timeon1,
       Dev_single_time_gbo.sg4_timeon2,
    ];
    const sgTimeoff = [
        Dev_single_time_gbo.sg1_timeoff1,
        Dev_single_time_gbo.sg1_timeoff2,
        Dev_single_time_gbo.sg2_timeoff1,
        Dev_single_time_gbo.sg2_timeoff2,
        Dev_single_time_gbo.sg3_timeoff1,
        Dev_single_time_gbo.sg3_timeoff2,
        Dev_single_time_gbo.sg4_timeoff1,
        Dev_single_time_gbo.sg4_timeoff2,
    ];
    const timeTerm = [
        Dev_single_time_gbo.time_term1,
        Dev_single_time_gbo.time_term2,
        Dev_single_time_gbo.time_term3,
        Dev_single_time_gbo.time_term4,
        Dev_single_time_gbo.time_term5,
        Dev_single_time_gbo.time_term6,
        Dev_single_time_gbo.time_term7,
        Dev_single_time_gbo.time_term8,
    ];
    const sgLux = [
        Dev_single_time_gbo.sg1_lux1,
        Dev_single_time_gbo.sg1_lux2,
        Dev_single_time_gbo.sg2_lux1,
        Dev_single_time_gbo.sg2_lux2,
        Dev_single_time_gbo.sg3_lux1,
        Dev_single_time_gbo.sg3_lux2,
        Dev_single_time_gbo.sg4_lux1,
        Dev_single_time_gbo.sg4_lux2,
    ];
    const returnData = {
        sg: sg,
        sgTimeon: sgTimeon,
        sgTimeoff: sgTimeoff,
        timeTerm: timeTerm,
        sgLux: sgLux,
        updateDate: Dev_single_time_gbo.update_dtm,
    };
    return JSON.stringify(returnData);
});
//手机端——单灯时控组设——获取
const fn_fetchSingleLampTimeSetGet = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.GET_SINGLE_TIME_GROUP]);
//手机端——单灯时控组设——设置
const fn_fetchSingleLampTimeSet = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.SET_SINGLE_TIME_GROUP]);
//手机端——上传日志
const fn_fetchUploadSavelog = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.SAVELOG]);
// 手机端——单灯调光——获取
const fn_fetchSingleLampDimmingGet = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.ADWEB_SINGLE_QUERY]);
// 手机端——单灯调光——手动设置亮度
const fn_fetchSingleLampDimmingSet = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.SETWEB_SINGLE_ONOFF]);
// 手机端——单灯调光——单灯简易控制
const fn_fetchSingleLampDimmingEasySet = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.SETWEB_SINGLE_BO_ONOFF]);
// 手机端——单灯调光——"支路X-N"的获取、刷新
const fn_fetchSingleLampDimmingGetXN = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.GETSINGLE_VOLT_DETAIL_GROUP]);
// 手机端——单灯时控——强制开关灯——设置时段开关灯 & 单灯简易控制——单控设置
const fn_fetchSingleLampTimeControlForcedSwitch = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.SETWEB_SINGLE_TIME_ONOFF]);
// 手机端——时控——组设时间
const fn_fetchTimeControlSetGroupTime = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.SET_GROUP_ONOFFTIME], param => {
    const { groupName, groupType, period, statusGroup } = param;

    const parameter = {};

    for (let i = 0; i < statusGroup.length; i++) {
        parameter[`time${i + 1}_on`] = statusGroup[i].startTime || '0:00';
        parameter[`time${i + 1}_off`] = statusGroup[i].endTime || '0:00';
        parameter[`team_set${i + 1}_int`] = statusGroup[i].lampType || '0';
    }
    return {
        ...parameter,
        group_name: groupName,
        group_typ: groupType,
        term_str: period,
    };
});

// 手机端——时控——组设星期
const fn_fetchTimeControlSetGroupWeek = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.SET_GROUP_WEEK], param => {
    const { groupName, groupType, workPeriod } = param;

    const weekArray = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
    const period = {};
    for (let i = 0; i < weekArray.length; i++) {
        period[`week${i + 1}_int`] = workPeriod.indexOf(weekArray[i]) ? '1' : '0';
    }

    return {
        ...period,
        group_name: groupName,
        group_typ: groupType
    };
});

// 手机端——集中开关——组设
const fn_fetchCentralizedSwitchGroupSet = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.SET_ONOFF], param => {
    const { devID, statusGroup, config } = param;

    let N8_str = '',
      mode_str = '';
    // 开关灯状态
    for (const status of statusGroup) {
        if (status) N8_str += '1';
        else N8_str += '0';
    }
    N8_str = N8_str.split('').reverse().join('');
    // 开关灯模式
    mode_str += config.mode === 'normal' ? '110' : '101';
    mode_str += config.isManualControl ? '1' : '0';
    mode_str += config.isTimeControl ? '1' : '0';
    mode_str += '110';

    return {
        Dev_id: devID,
        N8_str,
        mode_str,
    };
});

module.exports = {
    'POST /electric_parameter_refresh/get_status': fn_fetchElectricParamRefresh,
    'POST /electric_parameter_get': fn_fetchElectricParamGet,
    'POST /single_lamp_detail_initialization/get_status': fn_fetchSingleLampInitialization,
    'POST /single_lamp_time_set_refresh/get_status': fn_fetchSingleLampTimeSetRefresh,
    'POST /single_lamp_time_set_get': fn_fetchSingleLampTimeSetGet,
    'POST /single_lamp_time_set/set_status': fn_fetchSingleLampTimeSet,
    'POST /upload_savelog': fn_fetchUploadSavelog,
    'POST /single_lamp_dimming_get': fn_fetchSingleLampDimmingGet,
    'POST /single_lamp_dimming_easy_set/set_status': fn_fetchSingleLampDimmingEasySet,
    'POST /single_lamp_dimming_get_xn/get_status': fn_fetchSingleLampDimmingGetXN,
    'POST /single_lamp_dimming_time_control_forced_switch/set_status': fn_fetchSingleLampTimeControlForcedSwitch,
    'POST /time_control_set_group_time/set_status': fn_fetchTimeControlSetGroupTime,
    'POST /time_control_set_group_week/set_status': fn_fetchTimeControlSetGroupWeek,
    'POST /centralized_switch_group_set/set_status': fn_fetchCentralizedSwitchGroupSet,
};