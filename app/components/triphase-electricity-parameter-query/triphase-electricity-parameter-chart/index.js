import React, { Component } from 'react';
import $ from 'jquery';
import Highcharts from 'highcharts/highstock';
import moment from 'moment';

import { Select, Button, Spin, DatePicker, Checkbox } from 'antd';

import TimeRange from '../../common/time-range';


import './index.css';

window.$ = $;
window.Highcharts = Highcharts;

const { Option } = Select;
const { RangePicker } = DatePicker;

export default class TriphaseElectricityParameterChart extends Component {
    constructor(props) {
        super(props);

        this.chartQuery = this.chartQuery.bind(this);
        this.handleDateRangeChange = this.handleDateRangeChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.updateTimeRange = this.updateTimeRange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { code } = nextProps;
        if (code && code !== this.props.code) {
            this.renderChart(code);
        }
    }

    handleDateRangeChange(dates, [startDate, endDate]) {
        this.props.updateViewData({ startDate, endDate });
    }

    handleSelectChange(type, value) {
        const status = {};
        status[type] = value;
        this.props.updateViewData(status);
    }

    handleCheckboxChange(e) {
        this.props.updateViewData({ couldPeriodConfig: e.target.checked });
    }

    updateTimeRange({ startTime, endTime }) {
        this.props.updateViewData({ startTime, endTime });
    }

    chartQuery() {
        this.props.loadChart();
    }

    renderChart(code) {
        // 我能怎样，我也很绝望
        code = `Highcharts.chart('container', ${code.substring(code.indexOf('highcharts') + 11, code.length - 3)}`;
        eval(code);
    }

    render() {
        const { loading, couldPeriodConfig, startTime, endTime, chartType, statusType } = this.props;
        console.log('render', this.props);

        return (
            <div className="c-tepq-tepc-container">
                <div className="c-tepq-tepc-config-group">
                    <div className="c-tepq-tepc-config">
                        <span className="c-tepq-tepc-label">起止时间</span>
                        <RangePicker onChange={this.handleDateRangeChange} />
                        <Checkbox className="c-tepq-tepc-checkbox" checked={couldPeriodConfig} onChange={this.handleCheckboxChange}>数据采样时间段</Checkbox>
                        <TimeRange startTime={startTime} endTime={endTime} disabled={!couldPeriodConfig} updateTimeRange={this.updateTimeRange} />
                    </div>
                    <div className="c-tepq-tepc-config">
                        <span className="c-tepq-tepc-label">图表类型</span>
                        <Select className="c-tepq-tepc-selector" dropdownMatchSelectWidth value={chartType} onSelect={this.handleSelectChange.bind(this, 'chartType')}>
                            <Option value="line">曲线图</Option>
                            <Option value="column">列图</Option>
                            <Option value="bar">柱状图</Option>
                        </Select>
                        <span className="c-tepq-tepc-label">参数类型</span>
                        <Select className="c-tepq-tepc-selector" dropdownMatchSelectWidth value={statusType} onSelect={this.handleSelectChange.bind(this, 'statusType')}>
                            <Option value="0">三相电压</Option>
                            <Option value="1">三相电流</Option>
                            <Option value="2">能耗电度</Option>
                        </Select>
                        <Button className="c-tepq-tepc-query-btn" onClick={this.chartQuery}>查询</Button>
                    </div>
                </div>

                <Spin className="c-tepq-tepc-spin" spinning={loading}>
                    <div id="container"></div>
                </Spin>
            </div>
        );
    }
}