const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');

const COMMON_API = require('../api/common.js');
const SINGLELAMP_API = require('../api/singleLamp.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);

//网页：单灯报警信息——终端信息 移动端：单灯报警——终端信息
const fn_fetchSingleAlarmTerminalMessage = sharedRouteHandlerGenerator([SINGLELAMP_API.GET_TERMINAL_MES], undefined, ([data]) =>{
    const {DevNo , DevName , alarm_count} = data;
    const terminalAlarmMes = [];
    let i = 0;
    for(const devNo of DevNo)
    {
         const devalarmSet =  {
                key: i,
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

//移动端：单灯报警——单灯信息
const fn_fetchSingleAlarmSingleMessage = sharedRouteHandlerGenerator([SINGLELAMP_API.GET_SINGLE_ALARM_MES], undefined, ([data]) => {
    const {single_volt_detail} = data;
    let i = 0;
    const singleAlarmDetail = [];
    for(const singleAlarmGroup of single_volt_detail)
    {
        const AddTime = singleAlarmGroup.update_dtm.trim().replace(/[^0-9]/g, '');
        let date = new Date(parseInt(AddTime));
        date = date.getFullYear() + '-' + (date.getMonth()+1) + '-' +(date.getDate()) + ' '+ date.getHours() + ':' + date.getMinutes();
            
        const singleAlarmSet = {
                key: i + 1,
                rodNum: singleAlarmGroup.rod_num.trim(),
                alarmInfo: singleAlarmGroup.alarm_info.trim(),
                updateTime: date,
            };
            i++;
        singleAlarmDetail.push(singleAlarmSet);
    }
    const returndata = {singleAlarmDetail: singleAlarmDetail};
    //console.log(returndata);
    return JSON.stringify(returndata);
});

/*网页：单灯报警信息——单灯信息 
const fn_fetchSingleAlarmAllSingleMessage = sharedSpecialRouteHandlerGenerator([SINGLELAMP_API.GET_ALL_SINGLE_ALARM_MES]);*/



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
                 key: i + 1,
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

// 移动端：单灯电参历史 （初始化）
const fn_fetchSingleParamHistoryInitMessage = sharedRouteHandlerGenerator([SINGLELAMP_API.GET_SINGLE_PARAM_HISTRORY_INIT], undefined, ([data]) => {
    const { single_volt_detail } = data ;
    let ParamList = [];
    let item = {};
    for(let i = 0; i < single_volt_detail.length; i++) { 
        item = {}; 
        for ( let k in single_volt_detail[i] ) {
            let {rod_num} =  single_volt_detail[i] ;
             item = {
                 key: rod_num.toString().trim(),
                 rodNum: rod_num.toString().trim(),
             }
        }
        let temp = true;
        for(let i = 0 ;i < ParamList.length ; i++){
            if(ParamList[i]. rodNum == item.rodNum){
                temp = false;
                break;
            }
        }
        if(temp ==true ){
            ParamList.push(item);
        }

        
    }
    const returnData = {statusGroup: ParamList};
    return JSON.stringify(returnData);
});

// 移动端：单灯电参历史 （查询）
const fn_fetchSingleParamHistoryQueryMessage = sharedRouteHandlerGenerator([SINGLELAMP_API.GET_SINGLE_PARAM_HISTRORY_QUERY], undefined, ([data]) => {
    const { single_volt_detail_alarm_his } = data ;
    let ParamList = [];
    let item = {};
    for(let i = 0; i < single_volt_detail_alarm_his.length; i++) { 
        item = {}; 
        for ( let k in single_volt_detail_alarm_his[i] ) {
            let {update_dtm , rod_num , rod_real , V_rod , V_rod2 , I1, I2, w1, w2} =  single_volt_detail_alarm_his[i] ;
            //处理返回的时间
            update_dtm =update_dtm.replace(/[^0-9]/g, '');
            let date = new Date(parseInt(update_dtm));
            date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate())+' '+date.getHours()+':'+date.getMinutes();
             //devNo:终端号,date时间，rodNum杆号, rodReal末端编码，rodName杆名,alarmInfo警报
             item = {
                 key: i + 1,
                 date: date,
                 rodNum: rod_num.toString().trim(),
                 rodReal: rod_real.toString().trim(),
                 VRod: V_rod.toString().trim(),
                 VRod2: V_rod2.toString().trim(),
                 I1: I1.toString().trim(),
                 I2: I2.toString().trim(),
                 w1: w1.toString().trim(),
                 w2: w2.toString().trim()
             }
        }
        ParamList.push(item);
    }
    const returnData = {statusGroup: ParamList};
    return JSON.stringify(returnData);
});

module.exports = {
    'POST /single_alarm_terminal_message/get_status': fn_fetchSingleAlarmTerminalMessage,
    'POST /single_lamp_warning_info/get_status': fn_fetchSingleAlarmSingleMessage,
    'POST /single_fault_query/get_status': fn_fetchSingleFaultMessage,
    'POST /single_param_history_init/get_status': fn_fetchSingleParamHistoryInitMessage,
    'POST /single_param_history_query/get_status': fn_fetchSingleParamHistoryQueryMessage,
    //'POST /web_single_lamp_warning_info/get_status' : fn_fetchSingleAlarmAllSingleMessage,
};