import React, { Component } from 'react';

import { Table, Select } from 'antd';
import TimeRange from '../../common/time-range/index';

const { Column } = Table,
    { Option } = Select;

export default class TimeSettingConsole extends Component {
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

    renderSelectColumn(index, record) {
        return (
            <Select style={{ width: 100 }} value={record.lampType} onChange={value => this.handleSelectChange(index, value)}>
                <Option value="全夜灯1">全夜灯1</Option>
                <Option value="全夜灯2">全夜灯2</Option>
                <Option value="半夜灯1">半夜灯1</Option>
                <Option value="半夜灯2">半夜灯2</Option>
                <Option value="景观灯1">景观灯1</Option>
                <Option value="景观灯2">景观灯2</Option>
                <Option value="自定义灯1">自定义灯1</Option>
                <Option value="自定义灯2">自定义灯2</Option>
                <Option value="不组控">不组控</Option>
            </Select>
        );
    }

    handleSelectChange(index, value) {
        const { data } = this.state;
        data[index].lampType = value;
        this.setState({ data });
    }

    render() {
        const { data } = this.state;

        return (
            <Table size="small" pagination={false} dataSource={data}>
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
                  render={(text, record) => {
                      return (
                          <TimeRange />
                      );
                  }}
                />
            </Table>
        );
    }
}