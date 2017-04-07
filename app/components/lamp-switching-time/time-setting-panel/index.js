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
                { key: 1, outputGroups: '第1路输出' },
                { key: 2, outputGroups: '第2路输出' },
                { key: 3, outputGroups: '第3路输出' },
                { key: 4, outputGroups: '第4路输出' },
                { key: 5, outputGroups: '第5路输出' },
                { key: 6, outputGroups: '第6路输出' },
                { key: 7, outputGroups: '第7路输出' },
                { key: 8, outputGroups: '第8路输出' }
            ]
        };
    }

    render() {
        const { data } = this.state;

        return (
            <Table size="small" pagination={false} dataSource={data}>
                <Column
                  width={100}
                  title="8路支路输出"
                  dataIndex="outputGroups"
                  key="outputGroups"
                />
                <Column
                  width={280}
                  title="起止时间"
                  dataIndex="timeRange"
                  key="timeRange"
                  render={(text, record) => {
                      return (
                          <TimeRange />
                      );
                  }}
                />
                <Column
                  width={80}
                  title="灯的类型"
                  dataIndex="lampType"
                  key="lampType"
                  render={(text, record) => {
                      return (
                          <Select size="small" style={{ width: 80 }}>
                              <Option value="禁用">禁用</Option>
                          </Select>
                      );
                  }}
                />
            </Table>
        );
    }
}