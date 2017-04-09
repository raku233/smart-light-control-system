import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Slider, Card, Row, Col, Checkbox, Table } from 'antd';
import { actions as commonActions } from '../../components/common/redux';
import DeviceList from '../../components/common/device-list';
import SingleLampParameterTable from '../../components/common/single-lamp-parameter-table';
import SwitchingTimeTable from '../../components/single-lamp-switching-time/switching-time-table';
import PeriodSetting from '../../components/single-lamp-switching-time/period-setting';
import './index.css';

const { Column } = Table;

class SIngleLampSwitchingTime extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;

        return (
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                <DeviceList {...deviceList} {...deviceListActions}></DeviceList>
                <div style={{ flex: 1, height: '100%' }}>
                    <h2>开关灯时间设置</h2>
                    <Row>
                        <Col span="18">
                            <SwitchingTimeTable />
                        </Col>
                        <Col span="6">
                            <PeriodSetting />
                        </Col>
                    </Row>
                    <div className="v-slst-button-group">
                        <Button type="primary" className="v-slst-button">查询详细信息</Button>
                        <Button type="primary" className="v-slst-button">查询电流信息</Button>
                        <Button type="primary" className="v-slst-button">查询开关状态</Button>
                        <Button type="primary" className="v-slst-button">查询亮度信息</Button>
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
})(SIngleLampSwitchingTime);