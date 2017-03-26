import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Slider, Card, Row, Col, Checkbox, Table } from 'antd';
import { actions as commonActions } from '../../components/common/redux';
import DeviceList from '../../components/common/device-list';

import './index.css';

const { ColumnGroup, Column } = Table;

class CompulsiveLampSwitching extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;

        // 滑动输入条刻度
        const masks = {
            0: '0',
            25: '25',
            50: '50',
            75: '75',
            100: '100'
        };

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
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                <DeviceList {...deviceList} {...deviceListActions}></DeviceList>
                <div style={{ flex: 1, height: '100%' }}>
                    <div className="v-cls-title">开关灯状态</div>
                    <Row className="v-cls-row">
                        <Col span="6">
                            <Card title={<Checkbox key="light1">灯1</Checkbox>} bodyStyle={{ padding: 10 }}>
                                <Slider defaultValue={30} marks={masks} />
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card title={<Checkbox key="light2">灯2</Checkbox>} bodyStyle={{ padding: 10 }}>
                                <Slider defaultValue={30} marks={masks} />
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card title={<Checkbox key="light3">灯3</Checkbox>} bodyStyle={{ padding: 10 }}>
                                <Slider defaultValue={30} marks={masks} />
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card title={<Checkbox key="light4">灯4</Checkbox>} bodyStyle={{ padding: 10 }}>
                                <Slider defaultValue={30} marks={masks} />
                            </Card>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <Button type="danger" className="v-cls-button">设置</Button>
                        <Button type="primary" className="v-cls-button">恢复时控</Button>
                        <Button type="primary" className="v-cls-button">查看电流信息</Button>
                        <Button type="primary" className="v-cls-button">查看开关状态</Button>
                    </div>
                    <div className="v-cls-title">单灯参数信息</div>
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
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.common.deviceList
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch)
    };
})(CompulsiveLampSwitching);