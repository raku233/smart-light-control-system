import React, { Component } from 'react';
import { Button, Select } from 'antd';
import './index.css';

const { Option } = Select;

export default class PeriodSetting extends Component {

    onChange = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div className="c-slst-ps-container">
                <Select onChange={this.onChange} placeholder="请选择时间段" style={{ width: 120, marginBottom: '4px' }}>
                    <Option value="1">时段1</Option>
                    <Option value="2">时段2</Option>
                </Select>
                <Button type="danger" className="c-slst-ps-button">设置</Button>
            </div>
        );
    }
}