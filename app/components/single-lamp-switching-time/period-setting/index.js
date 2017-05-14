import React, { Component } from 'react';
import { Button, Select } from 'antd';
import './index.css';

const { Option } = Select;

export default class PeriodSetting extends Component {

    onChange = (value) => {
        this.props.updateLightNum(value);
    }

    handleTimeControlSetting() {
        this.props.uploadTimeControlSetting();
    }

    render() {
        return (
            <div className="c-slst-ps-container">
                <Select onChange={this.onChange.bind(this)} placeholder="请选择时控灯" style={{ width: 120, marginBottom: '4px' }} defaultValue="时控灯1">
                    <Option value="时控灯1">时控灯1</Option>
                    <Option value="时控灯2">时控灯2</Option>
                </Select>
                <Button type="danger" className="c-slst-ps-button" onClick={this.handleTimeControlSetting.bind(this)}>设置</Button>
            </div>
        );
    }
}