import React, { Component } from 'react';

import { Table } from 'antd';

import './index.css';

const { Column } = Table;

export default function ContractorInfoTable(props) {
    const data = props.contactorParameter,
        loading = props.loading;

    return (
        <Table className="c-ep-cit-table" dataSource={data} loading={loading} size="small" pagination={false}>
            <Column
              title="1路"
              key="con1"
              dataIndex="con1"
            />
            <Column
              title="2路"
              key="con2"
              dataIndex="con2"
            />
            <Column
              title="3路"
              key="con3"
              dataIndex="con3"
            />
            <Column
              title="4路"
              key="con4"
              dataIndex="con4"
            />
            <Column
              title="5路"
              key="con5"
              dataIndex="con5"
            />
            <Column
              title="6路"
              key="con6"
              dataIndex="con6"
            />
            <Column
              title="7路"
              key="con7"
              dataIndex="con7"
            />
            <Column
              title="8路"
              key="con8"
              dataIndex="con8"
            />
            <Column
              title="节能/旁路"
              key="savings"
              dataIndex="saving"
            />
            <Column
              title="门禁一"
              key="door1"
              dataIndex="door1"
            />
            <Column
              title="门禁二"
              key="door2"
              dataIndex="door2"
            />
        </Table>
    );
}