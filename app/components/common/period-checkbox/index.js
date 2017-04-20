import React, { Component } from 'react';

import { Checkbox } from 'antd';

import './index.css';

const CheckboxGroup = Checkbox.Group;

export default class PeriodCheckbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plainOptions: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
            indeterminate: true,
            checkAll: false
        };

        this.handleCheckAllChange = this.handleCheckAllChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { checkedList } = nextProps;
        const { plainOptions } = this.state;
        if (checkedList && checkedList.length === plainOptions.length) {
            this.setState({ checkAll: true });
        }
    }

    handleChange(checkedList) {
        const { plainOptions } = this.state;
        this.props.updateCheckedList(checkedList);
        this.setState({
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length
        });
    }

    handleCheckAllChange(e) {
        const { plainOptions } = this.state;

        this.props.updateCheckedList(e.target.checked ? plainOptions : []);
        this.setState({
            indeterminate: false,
            checkAll: e.target.checked
        });
    }

    render() {
        const { plainOptions, indeterminate, checkAll } = this.state;
        const { checkedList } = this.props;

        return (
            <div className="c-pc-container">
                <Checkbox
                  className="c-pc-checkbox4all"
                  indeterminate={indeterminate}
                  onChange={this.handleCheckAllChange}
                  checked={checkAll}
                >
                    全选
                </Checkbox>
                <CheckboxGroup
                  options={plainOptions}
                  value={checkedList}
                  onChange={this.handleChange}
                />
            </div>
        );
    }
}