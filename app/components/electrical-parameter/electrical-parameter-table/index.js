import React, { Component } from 'react';

import { Table } from 'antd';

const { Column } = Table;

export default function ElectricalParameterTable(props) {
    const data = [
        { key: 1, groupType: 'A组' },
        { key: 2, groupType: 'B组' },
        { key: 3, groupType: 'C组' },
    ];
    const defaultColumnWidth = 74;

    return (
        <Table dataSource={data} size="small" pagination={false}>
            <Column
              width={defaultColumnWidth}
              title=""
              key="groupType"
              dataIndex="groupType"
            />
            <Column
              width={defaultColumnWidth}
              title="电压(V)"
              key="voltage"
              dataIndex="voltage"
            />
            <Column
              width={defaultColumnWidth}
              title="电流(A)"
              key="current"
              dataIndex="current"
            />
            <Column
              width={defaultColumnWidth}
              title="输出电压"
              key="outputVoltage"
              dataIndex="outputVoltage"
            />
            <Column
              width={defaultColumnWidth}
              title="功率因素"
              key="powerFactor"
              dataIndex="powerFactor"
            />
            <Column
              width={defaultColumnWidth}
              title="有功(kw)"
              key="activePower"
              dataIndex="activePower"
            />
            <Column
              width={defaultColumnWidth}
              title="无功(kvar)"
              key="reactivePower"
              dataIndex="reactivePower"
            />
        </Table>
    );
}