import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';


import { Select, Button, Spin } from 'antd';
import QueueAnim from 'rc-queue-anim';

import './index.css';

const { Option } = Select;

export default class AssetsProportionDisplayChart extends Component {
    constructor(props) {
        super(props);

        this.chartQuery = this.chartQuery.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { code } = nextProps;
        if (code && code !== this.props.code) {
            this.renderChart(code);
        }
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
        code = `Highcharts.chart('container', ${code.substring(code.indexOf('highcharts') + 11, code.length - 3)}`;
        eval(code);
    }

    render() {
        const { loading, devID, statisticsType, queryType, chartType } = this.props;

        return (
            <div className="c-apc-apdc-container">
                <QueueAnim className="c-apc-apdc-anim-wrapper" delay={100} interval={200} type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    { devID ? [
                        <div key="config" className="c-apc-apdc-config">
                            <span className="c-apc-apdc-label">统计参数类型:</span>
                            <Select className="c-apc-apdc-selector c-apc-apdc-statistics-type" value={statisticsType} dropdownMatchSelectWidth onSelect={this.handleSelectChange.bind(this, 'statisticsType')}>
                                <Option value="灯杆厂家占有比例图">灯杆厂家</Option>
                                <Option value="灯杆类型占有比例图">灯杆类型</Option>
                                <Option value="灯具厂家占有比例图">灯具厂家</Option>
                                <Option value="灯具类型占有比例图">灯具类型</Option>
                                <Option value="标准功率瓦数分类型占有比例图">标准功率瓦数分类型</Option>
                                <Option value="电容有与没有和容量比例图">电容有与没有和容量</Option>
                                <Option value="灯具型号瓦数等参数比例图">灯具型号瓦数等参数</Option>
                            </Select>
                            <span className="c-apc-apdc-label">查询类型:</span>
                            <Select className="c-apc-apdc-selector c-apc-apdc-query-type" value={queryType} dropdownMatchSelectWidth onSelect={this.handleSelectChange.bind(this, 'queryType')}>
                                <Option value="终端号查询">终端号查询</Option>
                                <Option value="区域查询">区域查询</Option>
                                <Option value="全部城市查询">全部城市查询</Option>
                            </Select>
                            <span className="c-apc-apdc-label">图表类型:</span>
                            <Select className="c-apc-apdc-selector c-apc-apdc-chart-type" value={chartType} dropdownMatchSelectWidth onSelect={this.handleSelectChange.bind(this, 'chartType')}>
                                <Option value="灯具型号瓦数">灯具型号瓦数</Option>
                                <Option value="设备型号">设备型号</Option>
                            </Select>
                            <Button className="c-apc-apdc-query-btn" onClick={this.chartQuery}>查询</Button>
                        </div>,

                        <Spin key="chart" className="c-apc-apdc-spin" spinning={loading}>
                            <div id="container"></div>
                        </Spin>
                    ] : <span className="c-apc-apdc-placeholder">从左侧列表中选择设备后展开设置</span>}
                </QueueAnim>
            </div>
        );
    }
}
