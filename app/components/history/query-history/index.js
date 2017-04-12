import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';
import './index.css';

const { RangePicker } = DatePicker;

class QueryHistory extends Component {
    render() {
        return (
            <div className="c-h-qh-container">
                <span>起止时间：</span>
                <RangePicker />
                <Button className="c-h-qh-button" type="primary">电参历史查询</Button>
                <Button className="c-h-qh-button" type="primary">报警历史查询</Button>
            </div>
        );
    }
}

export default QueryHistory;