import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from '../../views/manual-lamp-switching/redux';

import DeviceList from '../../components/common/device-list';
import SwitchingConsole from '../../components/manual-lamp-switching/switching-console';
import LampSwitchingConsole from '../../components/common/lamp-switching-console';

import './index.css';

class ManualLampSwitching extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;

        return (
            <div className="v-mls-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <SwitchingConsole {...viewData} {...viewActions} />
                <LampSwitchingConsole {...viewData} {...viewActions} />
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList,
        viewData: state.ManualLampSwitching.viewData
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(ManualLampSwitching);