import React, { Component } from 'react';

import { Switch, Select, Button, Checkbox, Icon } from 'antd';

import './index.css';

const { Option } = Select,
    CheckboxGroup = Checkbox.Group;

export default class ModeSettingConsole extends Component {

    constructor(props) {
        super(props);

        this.state = {
            plainOptions: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
            checkedList: [],
            indeterminate: true,
            checkAll: false
        };

        this.handleCheckAllChange = this.handleCheckAllChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checkedList) {
        const { plainOptions } = this.state;
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length
        });
    }

    handleCheckAllChange(e) {
        const { plainOptions } = this.state;

        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked
        });
    }

    render() {
        const { plainOptions, checkedList, indeterminate, checkAll } = this.state;

        return (
            <div className="c-lst-msc-container">
                <div className="c-lst-msc-title">配置</div>
                <div className="c-lst-msc-config-group">
                    <div className="c-lst-msc-config">
                        <span className="c-lst-msc-label">当前时间段：</span>
                        <Select style={{ width: 80 }}>
                            <Option value="时间段1">时间段1</Option>
                            <Option value="时间段2">时间段2</Option>
                        </Select>
                    </div>
                    <div className="c-lst-msc-config">
                        <span className="c-lst-msc-label">是否采用星期来开灯</span>
                        <Switch unCheckedChildren={<Icon type="cross" />} checkedChildren={<Icon type="check" />} />
                    </div>
                    <div className="c-lst-msc-config">
                        <div className="c-lst-msc-label">周期配置：</div>
                        <Checkbox
                          className="c-lst-msc-checkbox4all"
                          indeterminate={indeterminate}
                          onChange={this.handleCheckAllChange}
                          checked={checkAll}
                        >
                            全选
                        </Checkbox>
                        <CheckboxGroup options={plainOptions} value={checkedList} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="c-lst-msc-btn-group">
                    <Button type="default" className="c-lst-msc-btn">刷新</Button>
                    <Button type="danger" className="c-lst-msc-btn">设置</Button>
                </div>
            </div>
        );
    }
}