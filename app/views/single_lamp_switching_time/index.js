import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { actions as commonActions } from '../../components/common/redux';
import DeviceList from '../../components/common/device-list';
import SingleLampParameterTable from '../../components/common/single-lamp-parameter-table';
import SwitchingTimeTable from '../../components/single-lamp-switching-time/switching-time-table';
import PeriodSetting from '../../components/single-lamp-switching-time/period-setting';
import './index.css';

class SIngleLampSwitchingTime extends Component {
    render() {
        const { deviceList, deviceListActions, rodList, rodListActions } = this.props;
        const { devID } = rodList;

        return (
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                <DeviceList {...deviceList} {...deviceListActions} {...rodListActions}></DeviceList>
                <QueueAnim className="v-mls-anim-wrapper" delay={100} interval={200} type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    { devID ? [
                        <div key="title" style={{ flex: 1, height: '100%' }}>
                            <SingleLampParameterTable key="table" {...rodList} {...rodListActions} />
                            <Row key="row" style={{ marginLeft: 4, marginTop: 16 }}>
                                <Col span="18">
                                    <SwitchingTimeTable />
                                </Col>
                                <Col span="6">
                                    <PeriodSetting />
                                </Col>
                            </Row>
                        </div>
                    ] : <span className="v-mls-placeholder">从左侧列表中选择设备后展开设置</span> }
                </QueueAnim>
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList,
        rodList: state.Common.rodList
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        rodListActions: bindActionCreators(commonActions.rodListActions, dispatch)
    };
})(SIngleLampSwitchingTime);