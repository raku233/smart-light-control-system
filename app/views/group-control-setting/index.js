import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';


import DeviceList from '../../components/common/device-list';
import LampSwitchingPanel from '../../components/group-control-setting/lamp-switching-panel';
import TimeSettingPanel from '../../components/group-control-setting/time-setting-panel';
import LampSwitchingConsole from '../../components/common/lamp-switching-console';
import TimeSettingConsole from '../../components/common/time-setting-console';



import './index.css';

class GroupControlSetting extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;
        return (
            <div className="v-gcs-container">
                <DeviceList {...deviceList} {...deviceListActions} />
                <div className="v-gcs-config-panel">
                    <div className="v-gcs-title">开关灯时间组控</div>
                    <div className="v-gcs-config">
                        <TimeSettingPanel />
                        <TimeSettingConsole />
                    </div>
                    <div className="v-gcs-title">手动开关灯组控</div>
                    <div className="v-gcs-config">
                        <LampSwitchingPanel />
                        <LampSwitchingConsole />
                    </div>
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
})(GroupControlSetting);