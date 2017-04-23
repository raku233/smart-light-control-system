const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');
const getTimeString = require('../utils/time.js');

const COMMON_API = require('../api/common.js'),
    SINGLELAMP_API = require('../api/singleLamp.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);

//网页：单灯报警信息——终端信息 移动端：单灯报警——终端信息
const fn_fetchSingleAlarmTerminalMessage = sharedRouteHandlerGenerator([SINGLELAMP_API.GET_TERMINAL_MES], undefined, ([data]) =>{
    const {DevNo , DevName , alarm_count} = data;
    const terminalAlarmMes = [];
    let i = 0;
    for(const devNo of DevNo)
    {
         const devalarmSet =  {
                devId: DevNo[i],
                devName: DevName[i],
                devAlarm: alarm_count[i]
            };
        terminalAlarmMes.push(devalarmSet);
        i++
    }
    const returndata = {terminalAlarmMes: terminalAlarmMes};
    console.log(returndata);
    return JSON.stringify(returndata);
}); 

//网页：单灯报警信息——单灯信息 移动端：单灯报警——单灯信息
const fn_fetchSingleAlarmSingleMessage = sharedRouteHandlerGenerator([SINGLELAMP_API.GET_SINGLE_ALARM_MES], undefined, ([data]) => {
    const {single_volt_detail} = data;
    let i = 0;
    const singleAlarmDetail = [];
    for(const singleAlarmGroup of single_volt_detail)
    {
        const singleAlarmSet = {
           
                rodNum: singleAlarmGroup.rod_num,
                alarmInfo: singleAlarmGroup.alarm_info,
                updateTime: singleAlarmGroup.update_dtm
            };
        singleAlarmDetail.push(singleAlarmSet);
    }
    const returndata = {singleAlarmDetail: singleAlarmDetail};
    //console.log(returndata);
    return JSON.stringify(returndata);
});

//移动端：单灯故障查询
const fn_fetchSingleFaultMessage = sharedRouteHandlerGenerator([SINGLELAMP_API. GET_SINGLE_FAULT_MES], undefined, ([data]) => {
    const{single_volt_detail_alarm_his} = data;
    let AlarmList = [];
    let item = {};
    for(let i = 0 ;i<single_volt_detail_alarm_his.length;i++){
         item = {};
        
         for(let k in single_volt_detail_alarm_his[i]){
             let{DevNo , update_dtm , rod_num , rod_real , rod_name , alarm_info}=single_volt_detail_alarm_his[i];
            if(rod_name==undefined){
                rod_name="";
            }
            //处理返回的时间
            update_dtm =update_dtm.replace(/[^0-9]/g, '');
            let date = new Date(parseInt(update_dtm));
            date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate())+' '+date.getHours()+':'+date.getMinutes();
            //devNo:终端号,date时间，rodNum杆号, rodReal末端编码，rodName杆名,alarmInfo警报
             item = {
                 devNo:DevNo.toString().trim(),
                 date:date,
                 rodNum: rod_num.toString().trim(),
                 rodReal:rod_real.toString().trim(),
                 rodName:rod_name.toString().trim(),
                 alarmInfo:alarm_info.toString().trim()
             }
         }
          AlarmList.push(item);
    }
    const returnData = {statusGroup: AlarmList};
    return JSON.stringify(returnData);
});

module.exports = {
    'POST /single_alarm_terminal_message/get_status': fn_fetchSingleAlarmTerminalMessage,
    'POST /single_lamp_warning_info/get_status': fn_fetchSingleAlarmSingleMessage,
    'POST /single_fault_query/get_status': fn_fetchSingleFaultMessage,
};