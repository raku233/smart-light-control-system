import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css';

const { Column } = Table;

class WarningTable extends Component {
    render() {
        return (
            <Table
              className="c-h-wt-table"
              dataSource={this.props.singleFaultStatus}
              pagination={false}
              scroll={{ x: false, y: 300 }}
              loading={this.props.loading}
            >
                <Column
                  width={70}
                  title="终端号"
                  key="devNo"
                  dataIndex="devNo"
                />
                <Column
                  width={120}
                  title="时间"
                  key="date"
                  dataIndex="date"
                />
                <Column
                  width={50}
                  title="杆号"
                  key="rodNum"
                  dataIndex="rodNum"
                />
                <Column
                  width={100}
                  title="末端编码"
                  key="rodReal"
                  dataIndex="rodReal"
                />
                <Column
                  width={100}
                  title="杆名"
                  key="rodName"
                  dataIndex="rodName"
                />
                <Column
                  title="警报"
                  key="alarmInfo"
                  dataIndex="alarmInfo"
                />
            </Table>
        );
    }
}

export default WarningTable;