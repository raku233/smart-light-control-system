import React, { Component } from 'react';
import { Button, Select, Switch, Icon } from 'antd';

import './index.css';

const { Option } = Select;


export default function ConfigConsole() {
    return (
        <div className="c-sls-cc-container">
            <div className="c-sls-cc-title">配置</div>
            <div className="c-sls-cc-config-group">
                <div className="c-sls-cc-config">
                    <span className="c-sls-cc-label">是否联动开关灯</span>
                    <Switch unCheckedChildren={<Icon type="cross" />} checkedChildren={<Icon type="check" />} />
                </div>
                <div className="c-sls-cc-config">
                    <span className="c-sls-cc-label">开关灯模式</span>
                    <Select className="c-sls-cc-selector" dropdownMatchSelectWidth >
                        <Option value="正常模式">正常模式</Option>
                        <Option value="应急模式">应急模式</Option>
                    </Select>
                </div>
                <div className="c-sls-cc-button-group">
                    <Button className="c-sls-cc-button" type="default">刷新</Button>
                    <Button className="c-sls-cc-button" type="primary">全部开灯</Button>
                    <Button className="c-sls-cc-button" type="danger">设置</Button>
                </div>
            </div>
        </div>
    );
}