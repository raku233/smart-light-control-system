import React, { Component } from 'react';

import { Checkbox, Button } from 'antd';

import './index.css';

const CheckboxGroup = Checkbox.Group;

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
            <div className="c-gcs-msc-container">
                <div className="c-gcs-msc-title">配置</div>
                <div className="c-gcs-msc-config">
                    <div className="c-gcs-msc-label">周期配置：</div>
                        <Checkbox
                          className="c-gcs-msc-checkbox4all"
                          indeterminate={indeterminate}
                          onChange={this.handleCheckAllChange}
                          checked={checkAll}
                        >
                            全选
                        </Checkbox>
                        <CheckboxGroup options={plainOptions} value={checkedList} onChange={this.handleChange} />
                </div>
                <div className="c-gcs-msc-btn-group">
                    <Button className="c-gcs-msc-btn" type="default">刷新</Button>
                    <Button className="c-gcs-msc-btn" type="danger">设置</Button>
                </div>
            </div>
        );
    }
}