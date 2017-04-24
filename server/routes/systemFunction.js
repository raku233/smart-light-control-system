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
const fn_fetchSingleLampTimeRefresh = sharedRouteHandlerGenerator([SYSTEMFUNCTION_API.GETDEV_SINGLE_TIME_GHO], undefined, ([data]) => {
});

module.exports = {
    'POST /electric_parameter_refresh/get_status': fn_fetchElectricParamRefresh,
    'POST /electric_parameter_get': fn_fetchElectricParamGet,
};