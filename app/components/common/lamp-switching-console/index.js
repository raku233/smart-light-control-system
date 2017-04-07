import React, { Component } from 'react';
import { Button, Select, Switch, Icon } from 'antd';

import './index.css';

const { Option } = Select;

export default function LampSwitchingConsole() {
    return (
        <div className="c-lsc-container">
            <div className="c-lsc-config-group">
                <div className="c-lsc-config">
                    <span className="c-lsc-label">是否联动开关灯</span>
                    <Switch unCheckedChildren={<Icon type="cross" />} checkedChildren={<Icon type="check" />} />
                </div>
                <div className="c-lsc-config">
                    <span className="c-lsc-label">开关灯模式</span>
                    <Select className="c-lsc-selector" dropdownMatchSelectWidth >
                        <Option value="正常模式">正常模式</Option>
                        <Option value="应急模式">应急模式</Option>
                    </Select>
                </div>
                <div className="c-lsc-button-group">
                    <Button className="c-lsc-button" type="default">刷新</Button>
                    <Button className="c-lsc-button" type="primary">全部开灯</Button>
                    <Button className="c-lsc-button" type="danger">设置</Button>
                </div>
            </div>
        </div>
    );
}