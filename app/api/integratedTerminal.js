import fetch from 'isomorphic-fetch';
import { dataFetcher } from '../utils/dataFetcher';

const URL = {
    FETCH_SWITCHING_STATUS: '/manual_lamp_switching/get_status',
    UPLOAD_SWITCHING_STATUS: '/manual_lamp_switching/set_status',
    FETCH_ELECTRICAL_PARAMETER: '/electrical_parameter/get_status',
    FETCH_TIMECONTROL_INFO: '/lamp_switching_time/get_status',
    UPLOAD_TIMECONTROL_INFO: '/lamp_switching_time/set_status',
    FETCH_CURRENT_ALARM: '/current_warning/get_status',
    FETCH_ENERGY_CONSUMPTION_CHART: '/energy_search/get_status',
    FETCH_ASSET_PROPORTION_CHART: '/asset_ratio_chart/get_status',
    FETCH_DAILY_CONSUMPTION_CHART: '/daily_power/get_status',
    FETCH_TRIPHASE_ELECTRICITY_PARAMETER_CHART: '/three_phase_electric_parameter/get_status'
};

export const fetchSwitchingStatus = dataFetcher(URL.FETCH_SWITCHING_STATUS);
export const uploadSwitchingStatus = dataFetcher(URL.UPLOAD_SWITCHING_STATUS);
export const fetchElectricalParameter = dataFetcher(URL.FETCH_ELECTRICAL_PARAMETER);
export const fetchTimeControlInfo = dataFetcher(URL.FETCH_TIMECONTROL_INFO);
export const uploadTimeControlInfo = dataFetcher(URL.UPLOAD_TIMECONTROL_INFO);
export const fetchCurrentAlarm = dataFetcher(URL.FETCH_CURRENT_ALARM);
export const fetchEnergyConsumptionChart = dataFetcher(URL.FETCH_ENERGY_CONSUMPTION_CHART);
export const fetchAssetProportionChart = dataFetcher(URL.FETCH_ASSET_PROPORTION_CHART);
export const fetchDailyConsumptionChart = dataFetcher(URL.FETCH_DAILY_CONSUMPTION_CHART);
export const fetchTriphaseElectricityParameterChart = dataFetcher(URL.FETCH_TRIPHASE_ELECTRICITY_PARAMETER_CHART);