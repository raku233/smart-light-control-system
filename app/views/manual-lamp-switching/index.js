import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';

import DeviceList from '../../components/common/device-list';
import SwitchingConsole from '../../components/single-light-switching/switching-console';
import ConfigConsole from '../../components/single-light-switching/config-console';

import './index.css';

class ManualLampSwitching extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;

        return (
            <div className="v-mls-container">
                <DeviceList {...deviceList} {...deviceListActions} />
                <SwitchingConsole />
                <ConfigConsole />
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
})(ManualLampSwitching);