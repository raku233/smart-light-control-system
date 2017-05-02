import React, { Component } from 'react';
import $ from 'jquery';
import Highcharts from 'highcharts/highstock';

import moment from 'moment';

import { Select, Button, Spin, DatePicker } from 'antd';
import QueueAnim from 'rc-queue-anim';

import './index.css';


window.$ = $;
window.Highcharts = Highcharts;

const { Option } = Select,
    { RangePicker } = DatePicker;

export default class DailyElectricityConsumptionChart extends Component {

    constructor(props) {
        super(props);

        this.chartQuery = this.chartQuery.bind(this);
        this.handleDateRangeChange = this.handleDateRangeChange.bind(this);
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

    chartQuery() {
        this.props.loadChart();
    }

    renderChart(code) {
        // 我能怎样，我也很绝望
        code = `Highcharts.chart('container', ${code.substring(code.indexOf('highcharts') + 11, code.length - 3)}`;
        eval(code);
    }

    render() {
        const { devID, chartType, statisticsType, statusType, loading } = this.props;
        let { startDate, endDate } = this.props;
        startDate = moment(startDate, 'YYYY-MM-DD');
        endDate = moment(endDate, 'YYYY-MM-DD');

        return (
            <div className="c-decq-decc-container">
                <QueueAnim className="c-decq-decc-anim-wrapper" delay={100} interval={200} type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    { devID ? [
                        <div key="config" className="c-decq-decc-config-group">
                            <div className="c-decq-decc-config">
                                <span className="c-decq-decc-label">起止时间:</span>
                                <RangePicker value={[startDate, endDate]} onChange={this.handleDateRangeChange} />
                            </div>
                            <div className="c-decq-decc-config">
                                <span className="c-decq-decc-label">统计类型</span>
                                <Select className="c-decq-decc-selector" value={statisticsType} dropdownMatchSelectWidth onSelect={this.handleSelectChange.bind(this, 'statisticsType')}>
                                    <Option value="按年统计">按年统计</Option>
                                    <Option value="按月统计">按月统计</Option>
                                    <Option value="按日统计">按日统计</Option>
                                    <Option value="时间段统计">时间段统计</Option>
                                </Select>
                                <span className="c-decq-decc-label">图表类型:</span>
                                <Select className="c-decq-decc-selector" value={chartType} dropdownMatchSelectWidth onSelect={this.handleSelectChange.bind(this, 'chartType')}>
                                    <Option value="line">曲线图</Option>
                                    <Option value="column">列图</Option>
                                    <Option value="bar">柱状图</Option>
                                </Select>
                                <span className="c-decq-decc-label">参数类型:</span>
                                <Select className="c-decq-decc-selector" value={statusType} dropdownMatchSelectWidth onSelect={this.handleSelectChange.bind(this, 'statusType')}>
                                    <Option value="0">用电量</Option>
                                    <Option value="1">开灯时长</Option>
                                </Select>
                                <Button className="c-decq-decc-query-btn" onClick={this.chartQuery}>查询</Button>
                            </div>
                        </div>,
                        <Spin key="chart" className="c-decq-decc-spin" spinning={loading}>
                            <div id="container"></div>
                        </Spin>
                    ] : <span className="c-decq-decc-placeholder">从左侧列表中选择设备后展开设置</span>}
                </QueueAnim>
            </div>
        );
    }
}