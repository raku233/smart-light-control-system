import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Card, Switch, Button, Checkbox } from 'antd';
import { actions as commonActions } from '../../components/common/redux';
import SingleLampParameterTable from '../../components/common/single-lamp-parameter-table';
import DeviceList from '../../components/common/device-list';
import SwitchingCard from '../../components/single-lamp-control/switching-card';
import QueryCard from '../../components/single-lamp-control/query-card';
import './index.css';

class SingleLampControl extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;

        return (
            <div className="v-mls-container">
                <DeviceList {...deviceList} {...deviceListActions} />
                <div style={{ flex: 1, height: '100%' }}>
                    <Row>
                        <Col span="10" className="v-slc-col">
                            <SwitchingCard />
                        </Col>
                        <Col span="14">
                            <QueryCard />
                        </Col>
                    </Row>
                    <SingleLampParameterTable />
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch)
    };
})(SingleLampControl);