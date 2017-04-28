import React, { Component } from 'react';
import $ from 'jquery';
import Highcharts from 'highcharts/highstock';

import moment from 'moment';

import { Select, Button, Spin, DatePicker } from 'antd';

import './index.css';


window.$ = $;
window.Highcharts = Highcharts;

const { Option } = Select,
    { RangePicker } = DatePicker;

export default class ChartQuery extends Component {

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
        const { chartType, statisticsType, statusType, loading } = this.props;
        const format = 'YYYY-MM-DD';

        return (
            <div className="c-cq-container">
                <div className="c-cq-config-group">
                    <div className="c-cq-config">
                        <span className="c-cq-label">起止时间:</span>
                        <RangePicker format={format} onChange={this.handleDateRangeChange} />
                    </div>
                    <div className="c-cq-config">
                        <span className="c-cq-label">统计类型</span>
                        <Select className="c-cq-selector" value={statisticsType} dropdownMatchSelectWidth onSelect={this.handleSelectChange.bind(this, 'statisticsType')}>
                            <Option value="按年能耗统计">按年能耗统计</Option>
                            <Option value="按月能耗统计">按月能耗统计</Option>
                            <Option value="按日能耗统计">按日能耗统计</Option>
                        </Select>
                        <span className="c-cq-label">图表类型:</span>
                        <Select className="c-cq-selector" value={chartType}dropdownMatchSelectWidth onSelect={this.handleSelectChange.bind(this, 'chartType')}>
                            <Option value="line">曲线图</Option>
                            <Option value="column">柱状图</Option>
                        </Select>
                        <span className="c-cq-label">数据类型:</span>
                        <Select className="c-cq-selector" value={statusType} dropdownMatchSelectWidth onSelect={this.handleSelectChange.bind(this, 'statusType')}>
                            <Option value="0">总有功耗电量</Option>
                            <Option value="1">抄表电度</Option>
                            <Option value="2">终端数</Option>
                            <Option value="3">灯数</Option>
                            <Option value="4">照明密度</Option>
                            <Option value="5">照明密度标准</Option>
                            <Option value="6">全部显示</Option>
                        </Select>
                        <Button className="c-cq-query-btn" onClick={this.chartQuery}>查询</Button>
                    </div>
                </div>

                <Spin className="c-cq-spin" spinning={loading}>
                    <div id="container"></div>
                </Spin>
            </div>
        );
    }
}