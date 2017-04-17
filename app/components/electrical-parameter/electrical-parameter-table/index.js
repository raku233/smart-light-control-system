import React, { Component } from 'react';

import { Table } from 'antd';

import './index.css';

const { Column } = Table;

export default function ElectricalParameterTable(props) {
    const data = props.deviceParameter,
        loading = props.loading;

    return (
        <Table className="c-ep-ept-table" dataSource={data} loading={loading} size="small" pagination={false}>
            <Column
              title=""
              key="groupType"
              dataIndex="groupType"
            />
            <Column
              title="电压(V)"
              key="voltage"
              dataIndex="voltage"
            />
            <Column
              title="电流(A)"
              key="current"
              dataIndex="current"
            />
            <Column
              title="输出电压"
              key="outputVoltage"
              dataIndex="outputVoltage"
            />
            <Column
              title="功率因素"
              key="powerFactor"
              dataIndex="powerFactor"
            />
            <Column
              title="有功(kw)"
              key="activePower"
              dataIndex="activePower"
            />
            <Column
              title="无功(kvar)"
              key="reactivePower"
              dataIndex="reactivePower"
            />
        </Table>
    );
}