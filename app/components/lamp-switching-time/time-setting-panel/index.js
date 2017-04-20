import React, { Component } from 'react';

import { Table, Select } from 'antd';
import TimeRange from '../../common/time-range/index';


const { Column } = Table,
    { Option } = Select;

export default class TimeSettingPanel extends Component {

    updateTimeRange(index, timeRange) {
        const { statusGroup } = this.props;
        statusGroup[index].startTime = timeRange.startTime;
        statusGroup[index].endTime = timeRange.endTime;
        this.props.updateViewData(statusGroup);
    }

    render() {
        const { statusGroup } = this.props;

        return (
            <Table size="small" pagination={false} dataSource={statusGroup}>
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
                  render={(text, record, index) => {
                      return (
                          <TimeRange startTime={record.startTime} endTime={record.endTime} updateTimeRange={this.updateTimeRange.bind(this, index)} />
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