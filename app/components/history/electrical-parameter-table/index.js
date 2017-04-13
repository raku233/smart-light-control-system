import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css';

const { Column } = Table;
const DEFAULT_WIDTH = 80;

class ElectricalParameterTable extends Component {
    render() {
        return (
            <Table>
                <Column
                  width={DEFAULT_WIDTH}
                  title="终端号"
                  key="terminalNum"
                  dataIndex="terminalNum"
                />
                <Column
                  width={DEFAULT_WIDTH}
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
                  title="电压1"
                  key="voltage1"
                  dataIndex="voltage1"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="电压2"
                  key="voltage2"
                  dataIndex="voltage2"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="电压3"
                  key="voltage3"
                  dataIndex="voltage3"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="电压4"
                  key="voltage4"
                  dataIndex="voltage4"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="电流1"
                  key="current1"
                  dataIndex="current1"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="电流2"
                  key="current2"
                  dataIndex="current2"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="电流3"
                  key="current3"
                  dataIndex="current3"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="电流4"
                  key="current4"
                  dataIndex="current4"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="功率1"
                  key="power1"
                  dataIndex="power1"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="功率2"
                  key="power2"
                  dataIndex="power2"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="功率3"
                  key="power3"
                  dataIndex="power3"
                />
                <Column
                  width={DEFAULT_WIDTH}
                  title="功率4"
                  key="power4"
                  dataIndex="power4"
                />
            </Table>
        );
    }
}

export default ElectricalParameterTable;