import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';
import { actions as manualSwitchingStatusActions } from '../../views/manual-lamp-switching/redux';

import DeviceList from '../../components/common/device-list';
import SwitchingConsole from '../../components/manual-lamp-switching/switching-console';
import LampSwitchingConsole from '../../components/common/lamp-switching-console';

import './index.css';

class ManualLampSwitching extends Component {
    render() {
        const { deviceList, deviceListActions, manualSwitchingStatusActions } = this.props;

        return (
            <div className="v-mls-container">
                <DeviceList {...deviceList} {...deviceListActions} {...manualSwitchingStatusActions} />
                <SwitchingConsole />
                <LampSwitchingConsole />
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.common.deviceList,
        switchingStatus: state.ManualLampSwitching.switchingStatus
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        manualSwitchingStatusActions: bindActionCreators(manualSwitchingStatusActions, dispatch)
    };
})(ManualLampSwitching);