const routeHandlerGenerator = require('../utils/routeHandlerGenerator.js');

const COMMON_API = require('../api/common.js'),
    OTHERPHONE_API = require('../api/otherFunctions.js');

const sharedRouteHandlerGenerator = routeHandlerGenerator(COMMON_API);

// 手机端——能耗查询
const fn_fetchEnergySearch = sharedRouteHandlerGenerator([OTHERPHONE_API.GET_ERL], param => {
    const { devID, startDate, endDate, chartType, statisticsType, statusType } = param;

    return {
        DevNo_str: devID,
        date_type_str: statisticsType,
        dtpBeginDate_str: startDate,
        dtpEndDate_str: endDate,
        chart_type: chartType,
        para_index: statusType
    };
});

// 手机端——三项电参图
const fn_fetchThreePhaseElectricParameter = sharedRouteHandlerGenerator([OTHERPHONE_API.DEV_ERL], param => {
    const { devID, startDate, endDate, couldPeriodConfig, startTime, endTime, chartType, statusType } = param;

    return {
        DevNo: devID,
        begin_str: startDate,
        end_str: endDate,
        chk_U_time_term: couldPeriodConfig,
        OnTime_str: startTime,
        offTime_str: endTime,
        chart_type: chartType,
        para_index: statusType
    };
});

// 手机端——日用电量
const fn_fetchDailyPower = sharedRouteHandlerGenerator([OTHERPHONE_API.GET_DEV_KWH_PER], param => {
    const { devID, startDate, endDate, chartType, statisticsType, statusType } = param;

    return {
        DevNo_str: devID,
        date_type_str: statisticsType,
        dtpBeginDate_str: startDate,
        dtpEndDate_str: endDate,
        chart_type: chartType,
        para_index: statusType
    };
});

/* 移动端——资产比例图 */
const fn_fetchAssetRatio = sharedRouteHandlerGenerator([OTHERPHONE_API.GET_ASSET_RATIO],
    param => {
        const { devID, chartType, statisticsType, queryType } = param;

        return {
            DevNo_str: devID,
            pen_type_str: statisticsType,
            Query_type_str: queryType,
            table_type: chartType
        };
    }, ([dataX]) => {
        const { highcharts } = dataX;

        const data = { highcharts };
        return JSON.stringify(data);
    });

/* 移动端——杆号核对 */
const fn_fetchRodCheck = sharedRouteHandlerGenerator([OTHERPHONE_API.GET_ROD_CHECK], undefined, ([data]) => {
    const { single_map_temp } = data;
    let ParamList = [];
    let item = {};
     for(let i = 0; i < single_map_temp.length; i++) {
         item = {};
         for ( let k in single_map_temp[i] ) {
              let{ DevNo , rod_num , rod_real , rod_name , Area_name , DevX,DevY , update_dtm } = single_map_temp[i];
              // 处理返回的时间
              update_dtm =update_dtm.replace(/[^0-9]/g, '');
              let date = new Date(parseInt(update_dtm));
              date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate())+' '+date.getHours()+':'+date.getMinutes();

              if(Area_name == null) {
                  Area_name = "";
              }

              item={
                  devNo : DevNo.toString().trim(),
                  rodNum : rod_num.toString().trim(),
                  rodReal : rod_real.toString().trim(),
                  rodName : rod_name.toString().trim(),
                  areaName : Area_name.toString().trim(),
                  devX : DevX.toString().trim(),
                  devY : DevY.toString().trim(),
                  date : date
              }
          }
          ParamList.push(item);
     }
     const returnData = {statusGroup: ParamList};
    return JSON.stringify(returnData);
});


/* 移动端——集中核对 */
const fn_fetchCentralizedCheck = sharedRouteHandlerGenerator([OTHERPHONE_API.GET_CENTRALIZED_CHECK], undefined, ([data]) => {
    const {Dev_temp } = data;
    let ParamList = [];
    let item = {};
     for(let i = 0; i <Dev_temp.length; i++) {
         item = {};
         for ( let k in Dev_temp[i] ) {
              let{ DevNo , DevName , temp_char1 , Area_name , DevX , DevY , update_dtm } = Dev_temp[i];
              // 处理返回的时间
              update_dtm =update_dtm.replace(/[^0-9]/g, '');
              let date = new Date(parseInt(update_dtm));
              date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate())+' '+date.getHours()+':'+date.getMinutes();

              if(Area_name == null) {
                  Area_name = "";
              }

              item={
                  devNo : DevNo.toString().trim(),
                  devName :DevName.toString().trim(),
                  tempChar : temp_char1.toString().trim(),
                  areaName : Area_name.toString().trim(),
                  devX : DevX.toString().trim(),
                  devY : DevY.toString().trim(),
                  date : date
              }
          }
          ParamList.push(item);
     }
     const returnData = {statusGroup: ParamList};
    return JSON.stringify(returnData);
});
/*移动端——单灯采集上传*/
const fn_fetchSingleLampCollectUpload = sharedRouteHandlerGenerator([OTHERPHONE_API.SETSINGLE_MAP_TEMP], param => {
    const { devId, areaName, rodNumStr, rodRealBool, rodRealStr, rodNameBool, rodName, xyBool, devX, devY } = param;
    return {
        DevNo_int: devId, 
        Area_name: areaName, 
        rod_num_str: rodNumStr, 
        rod_real_bool: rodRealBool, 
        rod_real_str: rodRealStr, 
        rod_name_bool: rodNameBool, 
        rod_name: rodName, 
        XY_bool: xyBool, 
        DevX: devX, 
        DevY: devY
    };
});
/*移动端——集中采集上传*/
const fn_fetchDevCollectUpload = sharedRouteHandlerGenerator([OTHERPHONE_API.SETDEVTEMP], param => {
    const { devId, areaName, tempChar1, devnameBool, devName, xyBool, devX, devY } = param;
    return {
        DevNo_int: devId, 
        Area_name: areaName, 
        temp_char1: tempChar1, 
        DevName_bool: devnameBool, 
        DevName: devName,
        XY_bool: xyBool, 
        DevX: devX, 
        DevY: devY
    };
});
/*移动端——集中采集上传*/
module.exports = {
   'POST /energy_search/get_status': fn_fetchEnergySearch,
   'POST /three_phase_electric_parameter/get_status': fn_fetchThreePhaseElectricParameter,
   'POST /daily_power/get_status': fn_fetchDailyPower,
   'POST /asset_ratio_chart/get_status': fn_fetchAssetRatio,
   'POST /rod_check_msg/get_status': fn_fetchRodCheck,
   'POST /Centralized_check_msg/get_status': fn_fetchCentralizedCheck,
   'POST /single_lamp_collect_upload/set_status': fn_fetchSingleLampCollectUpload,
   'POST /dev_collect_upload/set_status': fn_fetchDevCollectUpload,
};