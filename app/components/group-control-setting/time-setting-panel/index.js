import React, { Component } from 'react';

import { Table, Select } from 'antd';
import TimeRange from '../../common/time-range/index';

const { Column } = Table,
    { Option } = Select;

export default class TimeSettingPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { key: 1, group: '组控1', lampType: '不组控' },
                { key: 2, group: '组控2', lampType: '不组控' },
                { key: 3, group: '组控3', lampType: '不组控' },
                { key: 4, group: '组控4', lampType: '不组控' },
            ]
        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange(index, value) {
        const { timeStatusGroup } = this.props;
        timeStatusGroup[index].lampType = value;
        this.props.updateViewData({ timeStatusGroup });
    }

    updateTimeRange(index, timeRange) {
        const { timeStatusGroup } = this.props;
        timeStatusGroup[index].startTime = timeRange.startTime;
        timeStatusGroup[index].endTime = timeRange.endTime;
        this.props.updateViewData(timeStatusGroup);
    }

    renderSelectColumn(index, record) {
        return (
            <Select style={{ width: 100 }} value={record.lampType} onChange={value => this.handleSelectChange(index, value)}>
                <Option value="0">不组控</Option>
                <Option value="1">全夜灯1</Option>
                <Option value="2">全夜灯2</Option>
                <Option value="3">半夜灯1</Option>
                <Option value="4">半夜灯2</Option>
                <Option value="5">景观灯1</Option>
                <Option value="6">景观灯2</Option>
                <Option value="7">自定义灯1</Option>
                <Option value="8">自定义灯2</Option>
            </Select>
        );
    }

    render() {
        const { timeStatusGroup } = this.props;

        return (
            <Table size="small" pagination={false} dataSource={timeStatusGroup}>
                <Column
                  title=""
                  key="group"
                  dataIndex="group"
                />
                <Column
                  title="灯的类型"
                  key="lampType"
                  dataIndex="lampType"
                  render={(text, record, index) => this.renderSelectColumn(index, record)}
                />
                <Column
                  title="起止时间"
                  key="timeRange"
                  dataIndex="timeRange"
                  render={(text, record, index) => {
                      return (
                          <TimeRange size="small" startTime={record.startTime} endTime={record.endTime} updateTimeRange={this.updateTimeRange.bind(this, index)} />
                      );
                  }}
                />
            </Table>
        );
    }
}