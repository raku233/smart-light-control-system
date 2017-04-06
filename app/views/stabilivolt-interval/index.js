import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';

import DeviceList from '../../components/common/device-list';
import StabilivoltSettingConsole from '../../components/stabilivolt-interval/stabilivolt-setting-console';
import OperationConsole from '../../components/stabilivolt-interval/operation-console';

import './index.css';

class StabilivoltInterval extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;

        return (
            <div className="v-si-container">
                <DeviceList {...deviceList} {...deviceListActions} />
                <div className="v-si-config-panel">
                    <div className="v-si-title">时段稳压</div>
                    <StabilivoltSettingConsole />
                    <OperationConsole />
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
})(StabilivoltInterval);