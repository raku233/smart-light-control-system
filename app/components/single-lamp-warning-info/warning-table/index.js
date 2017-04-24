import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css';

const { Column } = Table;

class WarningTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            terminalMessage: [],
            curExpandDevID: null
        };
    }

    componentWillReceiveProps(nextProps) {
        const { terminalMessage } = nextProps;

        this.setState({
            terminalMessage
        });
    }

    loadWarningInfo(terminalMessage) {
        const WarningInfoList = Array(terminalMessage.length).fill(true);
        for (const value of terminalMessage) {
            WarningInfoList[value.key] = this.props.loadWarningInfo(value.devId);
        }
    }

    expandedRowRender(record) {
        this.state.curExpandDevID = record.devId;
        return (
            <Table pagination={false}>
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

    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',
            }),
        };
        
        return (
            <Table
              className="c-slwi-wt-table"
              expandedRowRender={record => this.expandedRowRender(record)}
              dataSource={this.state.terminalMessage}
              rowSelection={rowSelection}
              scroll={{ x: false, y: 350 }}
              pagination={false}
            >
                <Column
                  title="终端号"
                  key="devId"
                  dataIndex="devId"
                />
                <Column
                  title="终端名"
                  key="devName"
                  dataIndex="devName"
                />
            </Table>
        );
    }
}

export default WarningTable;