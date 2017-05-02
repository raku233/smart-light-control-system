import React, { Component } from 'react';
import { Button, Select, Switch, Icon } from 'antd';

import './index.css';

const { Option } = Select;

export default class LampSwitchingConsole extends Component {

    constructor(props) {
        super(props);

        this.handleModeSelect = this.handleModeSelect.bind(this);
        this.uploadSetting = this.uploadSetting.bind(this);
        this.openAllSwitching = this.openAllSwitching.bind(this);
    }

    handleModeSelect(mode) {
        const { lampSwitchingConfig } = this.props;
        lampSwitchingConfig.mode = mode;
        this.props.updateViewData({ lampSwitchingConfig });
    }

    handleSwitchChange(type, value) {
        const { lampSwitchingConfig } = this.props;
        lampSwitchingConfig[type] = value;
        this.props.updateViewData({ lampSwitchingConfig });
    }

    openAllSwitching() {
        this.props.updateGroupControlAllSwitch();
    }

    uploadSetting() {
        this.props.uploadGroupSwitchingControlSetting();
    }

    render() {
        const { lampSwitchingConfig } = this.props;
        const { mode, isManualControl, isTimeControl } = lampSwitchingConfig;

        return (
            <div className="c-gcs-lsc-container">
                <div className="c-gcs-lsc-config-group">
                    <div className="c-gcs-lsc-config">
                        <span className="c-gcs-lsc-label">单灯手动联动</span>
                        <Switch unCheckedChildren={<Icon type="cross" />} checkedChildren={<Icon type="check" />} checked={isManualControl} onChange={this.handleSwitchChange.bind(this, 'isManualControl')} />
                    </div>
                    <div className="c-gcs-lsc-config">
                        <span className="c-gcs-lsc-label">单灯时控联动</span>
                        <Switch unCheckedChildren={<Icon type="cross" />} checkedChildren={<Icon type="check" />} checked={isTimeControl} onChange={this.handleSwitchChange.bind(this, 'isTimeControl')} />
                    </div>
                    <div className="c-gcs-lsc-config">
                        <span className="c-gcs-lsc-label">开关灯模式</span>
                        <Select className="c-gcs-lsc-selector" dropdownMatchSelectWidth value={mode} onSelect={this.handleModeSelect}>
                            <Option value="normal">正常模式</Option>
                            <Option value="emergency">应急模式</Option>
                        </Select>
                    </div>
                    <div className="c-gcs-lsc-button-group">
                        <Button className="c-gcs-lsc-button" type="primary" onClick={this.openAllSwitching}>全部开灯</Button>
                        <Button className="c-gcs-lsc-button" type="danger" onClick={this.uploadSetting}>设置</Button>
                    </div>
                </div>
            </div>
        );
    }
}