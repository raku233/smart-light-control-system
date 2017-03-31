import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Card, Switch } from 'antd';
import { actions as commonActions } from '../../components/common/redux';

import DeviceList from '../../components/common/device-list';

class SingleLampControl extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;

        return (
            <div className="v-mls-container">
                <DeviceList {...deviceList} {...deviceListActions} />
                <div style={{ flex: 1, height: '100%' }}>
                    <Row>
                        <Col span="12">
                            <Card title={<Switch checkedChildren={'开'} unCheckedChildren={'关'} />}>

                            </Card>
                        </Col>
                    </Row>
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
})(SingleLampControl);