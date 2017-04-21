import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from '../../views/lamp-switching-time/redux';

import DeviceList from '../../components/common/device-list/index';
import TimeSettingPanel from '../../components/lamp-switching-time/time-setting-panel';
import TimeSettingConsole from '../../components/common/time-setting-console';

import './index.css';

class LampSwitchingTime extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;

        return (
            <div className="v-lst-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <div className="v-lst-config-panel">
                    <div className="v-lst-title">开关灯时间设置</div>
                    <div className="v-lst-config-console">
                        <TimeSettingPanel {...viewData} {...viewActions} />
                        <TimeSettingConsole {...viewData} {...viewActions} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList,
        viewData: state.LampSwitchingTime.viewData
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(LampSwitchingTime);