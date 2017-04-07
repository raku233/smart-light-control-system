import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css';

const { Column } = Table;

export default class SingleLampParameterTable extends Component {
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
                disabled: record.name === 'Disabled User',    // Column configuration not to be checked
            }),
        };

        return (
            <div>
                <div className="c-slpt-title ">单灯参数信息</div>
                <Table style={{ padding: '0 8px' }} rowSelection={rowSelection} >
                    <Column title="灯杆名" dataIndex="" key="" />
                    <Column title="灯杆号" dataIndex="" key="" />
                    <Column title="更新时间" dataIndex="" key="" />
                    <Column title="1灯电压" dataIndex="" key="" />
                    <Column title="1灯电流" dataIndex="" key="" />
                    <Column title="1灯亮度" dataIndex="" key="" />
                    <Column title="有功功率1" dataIndex="" key="" />
                    <Column title="无功功率1" dataIndex="" key="" />
                    <Column title="功率因素1" dataIndex="" key="" />
                    <Column title="映射杆号" dataIndex="" key="" />
                    <Column title="开关状态" dataIndex="" key="" />
                </Table>
            </div>
        );
    }
}