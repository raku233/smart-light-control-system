import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css';

const { Column } = Table;

class WarningTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            terminalMessage: [],
            warningInfoList: [],
            expandedRowKeys: []
        };
    }

    componentDidMount() {
        this.props.loadTerminalMessage();
    }

    componentWillReceiveProps(nextProps) {
        const { terminalMessage } = nextProps;
        this.setState({
            terminalMessage
        });
    }

    onExpandedRowsChange(expanded, record) {
        if (expanded) {
            const nextOpenKey = [].concat(record.key);
            this.props.loadWarningInfo(record.devId);
            this.setState({
                expandedRowKeys: nextOpenKey
            });
        } else {
            this.setState({
                expandedRowKeys: []
            });
        }
    }

    expandedRowRender(record) {
        return (
            <Table pagination={false} dataSource={this.props.warningInfo}>
                <Column
                  width={100}
                  title="杆号"
                  key="rodNum"
                  dataIndex="rodNum"
                />
                <Column
                  width={200}
                  title="时间"
                  key="updateTime"
                  dataIndex="updateTime"
                />
                <Column
                  title="报警内容"
                  key="alarmInfo"
                  dataIndex="alarmInfo"
                />
            </Table>
        );
    }

    render() {       
        return (
            <Table
              className="c-slwi-wt-table"
              expandedRowRender={record => this.expandedRowRender(record)}
              onExpand={(expanded, record) => this.onExpandedRowsChange(expanded, record)}
              expandedRowKeys={this.state.expandedRowKeys}
              dataSource={this.state.terminalMessage}
              scroll={{ x: false, y: 350 }}
              pagination={false}
            >
                <Column
                  width={100}
                  title="终端号"
                  key="devId"
                  dataIndex="devId"
                />
                <Column
                  width={200}
                  title="终端名"
                  key="devName"
                  dataIndex="devName"
                />
                <Column
                  title="警报"
                  key="devAlarm"
                  dataIndex="devAlarm"
                />
            </Table>
        );
    }
}

export default WarningTable;