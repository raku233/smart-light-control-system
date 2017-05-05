import React, { Component } from 'react';

import { Switch, Select, Button, Icon } from 'antd';
import PeriodCheckbox from '../period-checkbox';

import './index.css';

const { Option } = Select;

export default class TimeSettingConsole extends Component {

    constructor(props) {
        super(props);

        this.refreshData = this.refreshData.bind(this);
        this.uploadData = this.uploadData.bind(this);
        this.updateCheckedList = this.updateCheckedList.bind(this);
        this.updateWeekAvailable = this.updateWeekAvailable.bind(this);
        this.updatePeriod = this.updatePeriod.bind(this);
    }

    refreshData() {
        this.props.loadViewData();
    }

    uploadData() {
        this.props.uploadViewData();
    }

    updateCheckedList(workPeriod) {
        const { config } = this.props;
        config.workPeriod = workPeriod;
        this.props.updateViewData({ config });
    }

    updateWeekAvailable(value) {
        const { config } = this.props;
        config.weekAvailable = value;
        this.props.updateViewData({ config });
    }

    updatePeriod(period) {
        this.props.updateViewData({ period });
    }

    render() {
        const { workPeriod, weekAvailable } = this.props.config;
        const { period } = this.props;

        return (
            <div className="c-tsc-container">
                <div className="c-tsc-config-group">
                    <div className="c-tsc-config">
                        <span className="c-tsc-label">当前时间段：</span>
                        <Select style={{ width: 80 }} value={period} onChange={this.updatePeriod} >
                            <Option value="时间段1">时间段1</Option>
                            <Option value="时间段2">时间段2</Option>
                        </Select>
                    </div>
                    <div className="c-tsc-config">
                        <span className="c-tsc-label">是否采用星期来开灯</span>
                        <Switch unCheckedChildren={<Icon type="cross" />} checkedChildren={<Icon type="check" />} checked={weekAvailable} onChange={this.updateWeekAvailable} />
                    </div>
                    <div className="c-tsc-config">
                        <div className="c-tsc-label">周期配置：</div>
                        <PeriodCheckbox checkedList={workPeriod} updateCheckedList={this.updateCheckedList} />
                    </div>
                </div>
                <div className="c-tsc-btn-group">
                    <Button type="default" className="c-tsc-btn" onClick={this.refreshData}>刷新</Button>
                    <Button type="danger" className="c-tsc-btn" onClick={this.uploadData}>设置</Button>
                </div>
            </div>
        );
    }
}