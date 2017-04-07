import React, { Component } from 'react';

import { Switch, Select, Button, Icon } from 'antd';
import PeriodCheckbox from '../period-checkbox';

import './index.css';

const { Option } = Select;

export default class TimeSettingConsole extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="c-tsc-container">
                <div className="c-tsc-config-group">
                    <div className="c-tsc-config">
                        <span className="c-tsc-label">当前时间段：</span>
                        <Select style={{ width: 80 }}>
                            <Option value="时间段1">时间段1</Option>
                            <Option value="时间段2">时间段2</Option>
                        </Select>
                    </div>
                    <div className="c-tsc-config">
                        <span className="c-tsc-label">是否采用星期来开灯</span>
                        <Switch unCheckedChildren={<Icon type="cross" />} checkedChildren={<Icon type="check" />} />
                    </div>
                    <div className="c-tsc-config">
                        <div className="c-tsc-label">周期配置：</div>
                        <PeriodCheckbox />
                    </div>
                </div>
                <div className="c-tsc-btn-group">
                    <Button type="default" className="c-tsc-btn">刷新</Button>
                    <Button type="danger" className="c-tsc-btn">设置</Button>
                </div>
            </div>
        );
    }
}