import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css';

const { Column } = Table;
const DEFAULT_WIDTH = 120;

class ElectricalParameterTable extends Component {
    render() {
        return (
          <Table loading={this.props.loading} dataSource={this.props.singleParamStatus} scroll={{ x: false, y: 300 }} pagination={false}>
              <Column
                width={170}
                title="时间"
                key="date"
                dataIndex="date"
              />
              <Column
                width={DEFAULT_WIDTH}
                title="杆号"
                key="rodNum"
                dataIndex="rodNum"
              />
              <Column
                width={DEFAULT_WIDTH}
                title="末杆编码"
                key="rodReal"
                dataIndex="rodReal"
              />
              <Column
                width={DEFAULT_WIDTH}
                title="电压1"
                key="VRod"
                dataIndex="VRod"
              />
              <Column
                width={DEFAULT_WIDTH}
                title="电压2"
                key="VRod2"
                dataIndex="VRod2"
              />
              <Column
                width={DEFAULT_WIDTH}
                title="电流1"
                key="I1"
                dataIndex="I1"
              />
              <Column
                width={DEFAULT_WIDTH}
                title="电流2"
                key="I2"
                dataIndex="I2"
              />
              <Column
                width={DEFAULT_WIDTH}
                title="功率1"
                key="w1"
                dataIndex="w1"
              />
              <Column
                width={DEFAULT_WIDTH}
                title="功率2"
                key="w2"
                dataIndex="w2"
              />
          </Table>
        );
    }
}

export default ElectricalParameterTable;