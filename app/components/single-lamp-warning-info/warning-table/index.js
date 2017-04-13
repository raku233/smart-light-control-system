import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css';

const { Column } = Table;

class WarningTable extends Component {
    render() {
        return (
            <Table className="c-slwi-wt-table">
                <Column
                  title="删除"
                />
                <Column
                  title="终端号"
                  key="terminalNum"
                  dataIndex="terminalNum"
                />
                <Column
                  title="终端名"
                  key="terminalName"
                  dataIndex="terminalName"
                />
                <Column
                  title="杆号"
                  key="rodNum"
                  dataIndex="rodNum"
                />
                <Column
                  title="报警内容"
                  key="warningContent"
                  dataIndex="warningContent"
                />
                <Column
                  title="时间"
                  key="date"
                  dataIndex="date"
                />
            </Table>
        );
    }
}

export default WarningTable;