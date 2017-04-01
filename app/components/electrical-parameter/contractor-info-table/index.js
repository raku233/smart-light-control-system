import React, { Component } from 'react';

import { Table } from 'antd';

const { Column } = Table;

export default function ContractorInfoTable(props) {
    const data = [

    ];
    const defaultColumnWidth = 74;

    return (
        <Table dataSource={data} size="small">
            <Column
              width={defaultColumnWidth}
              title="1路"
            />
            <Column
              width={defaultColumnWidth}
              title="2路"
            />
            <Column
              width={defaultColumnWidth}
              title="3路"
            />
            <Column
              width={defaultColumnWidth}
              title="4路"
            />
            <Column
              width={defaultColumnWidth}
              title="5路"
            />
            <Column
              width={defaultColumnWidth}
              title="6路"
            />
            <Column
              width={defaultColumnWidth}
              title="7路"
            />
            <Column
              width={defaultColumnWidth}
              title="8路"
            />
            <Column
              width={defaultColumnWidth}
              title="节能/旁路"
            />
            <Column
              width={defaultColumnWidth}
              title="门禁一"
            />
            <Column
              width={defaultColumnWidth}
              title="门禁二"
            />
        </Table>
    );
}