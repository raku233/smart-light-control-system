import React, { Component } from 'react';
import { DatePicker, Button, message } from 'antd';
import './index.css';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

class QueryHistory extends Component {
    constructor(props) {
        super(props);

        this.onDateChange = this.onDateChange.bind(this);
        this.onFaultQueryClick = this.onFaultQueryClick.bind(this);
    }

    onDateChange(value) {
        const rangeDate = [];
        if (value !== undefined) {
            for (const date of value) {
                rangeDate.push(date.format(dateFormat));
            }
        }
        this.props.uploadRangeDate(rangeDate);
    }

    onFaultQueryClick() {
        const { rangeDate, devID } = this.props;
        console.log(this.props);
        if (!devID) {
            message.error('请选择终端设备');
            return;
        }

        if (rangeDate.length !== 2) {
            message.error('请输入时间');
            return;
        }

        this.props.loadSingleFaultStatus(devID, rangeDate);
    }

    render() {
        return (
            <div className="c-h-qh-container">
                <span>起止时间：</span>
                <RangePicker format={dateFormat} onChange={this.onDateChange} />
                <Button className="c-h-qh-button" type="primary">电参历史查询</Button>
                <Button className="c-h-qh-button" type="primary" onClick={this.onFaultQueryClick}>报警历史查询</Button>
            </div>
        );
    }
}

export default QueryHistory;