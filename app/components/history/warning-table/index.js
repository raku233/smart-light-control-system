import React, { Component } from 'react';
import { Table } from 'antd';

const { Column } = Table;

class WarningTable extends Component {
    render() {
        return (
            <Table>
                <Column
                  title="终端号"
                  key="terminalNum"
                  dataIndex="terminalNum"
                />
                <Column
                  title="时间"
                  key="date"
                  dataIndex="date"
                />
                <Column
                  title="杆号"
                  key="rodNum"
                  dataIndex="rodNum"
                />
                <Column
                  title="报警1灯"
                  key="warningLamp1"
                  dataIndex="warningLamp1"
                />
                <Column
                  title="报警2灯"
                  key="warningLamp2"
                  dataIndex="warningLamp2"
                />
                <Column
                  title="报警3灯"
                  key="warningLamp3"
                  dataIndex="warningLamp3"
                />
                <Column
                  title="报警4灯"
                  key="warningLamp4"
                  dataIndex="warningLamp4"
                />
                <Column
                  title="灯杆警报"
                  key="warningRod"
                  dataIndex="warningRod"
                />
                <Column
                  title="灯数"
                  key="lampNum"
                  dataIndex="lampNum"
                />
            </Table>
        );
    }
}

export default WarningTable;