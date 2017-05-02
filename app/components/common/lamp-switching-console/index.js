import React, { Component } from 'react';
import { Button, Select, Switch, Icon } from 'antd';

import './index.css';

const { Option } = Select;

export default class LampSwitchingConsole extends Component {

    constructor(props) {
        super(props);

        this.refreshData = this.refreshData.bind(this);
        this.uploadData = this.uploadData.bind(this);
        this.handleModeSelect = this.handleModeSelect.bind(this);
        this.openAllSwitching = this.openAllSwitching.bind(this);
    }

    handleModeSelect(mode) {
        const { config } = this.props;
        config.mode = mode;
        this.props.updateViewData({ config });
    }

    handleSwitchChange(type, value) {
        const { config } = this.props;
        config[type] = value;
        this.props.updateViewData({ config });
    }

    openAllSwitching() {
        const { statusGroup } = this.props;
        for (let i = 0; i < statusGroup.length; i++) {
            statusGroup[i].checked = true;
        }
        this.props.updateManualSwitchingAllSwitch(statusGroup);
    }

    refreshData() {
        this.props.loadViewData();
    }

    uploadData() {
        this.props.uploadViewData();
    }

    render() {
        const { config } = this.props;
        const { mode, isManualControl, isTimeControl } = config;

        return (
            <div className="c-lsc-container">
                <div className="c-lsc-config-group">
                    <div className="c-lsc-config">
                        <span className="c-lsc-label">单灯手动联动</span>
                        <Switch unCheckedChildren={<Icon type="cross" />} checkedChildren={<Icon type="check" />} checked={isManualControl} onChange={this.handleSwitchChange.bind(this, 'isManualControl')} />
                    </div>
                    <div className="c-lsc-config">
                        <span className="c-lsc-label">单灯时控联动</span>
                        <Switch unCheckedChildren={<Icon type="cross" />} checkedChildren={<Icon type="check" />} checked={isTimeControl} onChange={this.handleSwitchChange.bind(this, 'isTimeControl')} />
                    </div>
                    <div className="c-lsc-config">
                        <span className="c-lsc-label">开关灯模式</span>
                        <Select className="c-lsc-selector" dropdownMatchSelectWidth value={mode} onSelect={this.handleModeSelect}>
                            <Option value="normal">正常模式</Option>
                            <Option value="emergency">应急模式</Option>
                        </Select>
                    </div>
                    <div className="c-lsc-button-group">
                        <Button className="c-lsc-button" type="default" onClick={this.refreshData}>刷新</Button>
                        <Button className="c-lsc-button" type="primary" onClick={this.openAllSwitching}>全部开灯</Button>
                        <Button className="c-lsc-button" type="danger" onClick={this.uploadData}>设置</Button>
                    </div>
                </div>
            </div>
        );
    }
}