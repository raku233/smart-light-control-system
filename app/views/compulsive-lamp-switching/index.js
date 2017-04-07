import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Slider, Card, Row, Col, Checkbox, Table } from 'antd';
import { actions as commonActions } from '../../components/common/redux';
import DeviceList from '../../components/common/device-list';
import SingleLampParameterTable from '../../components/common/single-lamp-parameter-table';
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
                    <SingleLampParameterTable />
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