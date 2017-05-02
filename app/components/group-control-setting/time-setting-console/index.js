import React, { Component } from 'react';

import { Switch, Select, Button, Icon } from 'antd';
import PeriodCheckbox from '../../common/period-checkbox';

import './index.css';

const { Option } = Select;

export default class TimeSettingConsole extends Component {

    constructor(props) {
        super(props);

        this.refreshData = this.refreshData.bind(this);
        this.uploadData = this.uploadData.bind(this);
        this.updateCheckedList = this.updateCheckedList.bind(this);
        this.updatePeriod = this.updatePeriod.bind(this);
        this.updateSwitch = this.updateSwitch.bind(this);
        this.uploadGroupTimeControlSetting = this.uploadGroupTimeControlSetting.bind(this);
        this.uploadGroupWeekControlSetting = this.uploadGroupWeekControlSetting.bind(this);
    }

    refreshData() {
        this.props.loadViewData();
    }

    uploadData() {
        this.props.uploadViewData();
    }

    updateCheckedList(workPeriod) {
        const { timeSettingConfig } = this.props;
        timeSettingConfig.workPeriod = workPeriod;
        this.props.updateViewData({ timeSettingConfig });
    }

    updateSwitch(value) {
        const { timeSettingConfig } = this.props;
        timeSettingConfig.weekAvailable = value;
        this.props.updateViewData({ timeSettingConfig });
    }

    updatePeriod(period) {
        const { timeSettingConfig } = this.props;
        timeSettingConfig.period = period;
        this.props.updateViewData({ timeSettingConfig });
    }

    uploadGroupTimeControlSetting() {
        this.props.uploadGroupTimeControlSetting();
    }

    uploadGroupWeekControlSetting() {
        this.props.uploadGroupWeekControlSetting();
    }

    render() {
        const { workPeriod, period, weekAvailable } = this.props.timeSettingConfig;

        return (
            <div className="c-gcs-tsc-container">
                <div className="c-gcs-tsc-config-group">
                    <div className="c-gcs-tsc-config">
                        <span className="c-gcs-tsc-label">当前时间段：</span>
                        <Select style={{ width: 80 }} value={period} onChange={this.updatePeriod} >
                            <Option value="时间段1">时间段1</Option>
                            <Option value="时间段2">时间段2</Option>
                        </Select>
                    </div>
                    <div className="c-gcs-tsc-config">
                        <span className="c-gcs-tsc-label">是否采用星期来开灯</span>
                        <Switch unCheckedChildren={<Icon type="cross" />} checkedChildren={<Icon type="check" />} checked={weekAvailable} onChange={this.updateSwitch} />
                    </div>
                    <div className="c-gcs-tsc-config">
                        <div className="c-gcs-tsc-label">周期配置：</div>
                        <PeriodCheckbox checkedList={workPeriod} updateCheckedList={this.updateCheckedList} />
                    </div>
                </div>
                <div className="c-gcs-tsc-btn-group">
                    <Button type="danger" className="c-gcs-tsc-btn" onClick={this.uploadGroupWeekControlSetting}>设置组控星期</Button>
                    <Button type="danger" className="c-gcs-tsc-btn" onClick={this.uploadGroupTimeControlSetting}>设置组控时间</Button>
                </div>
            </div>
        );
    }
}