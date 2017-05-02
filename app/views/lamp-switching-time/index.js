import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import QueueAnim from 'rc-queue-anim';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from '../../views/lamp-switching-time/redux';

import DeviceList from '../../components/common/device-list/index';
import TimeSettingPanel from '../../components/lamp-switching-time/time-setting-panel';
import TimeSettingConsole from '../../components/common/time-setting-console';

import './index.css';

class LampSwitchingTime extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;
        const { devID } = viewData;

        return (
            <div className="v-lst-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <QueueAnim className="v-lst-anim-wrapper" delay={100} interval={200} type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    { devID ? [
                        <div key="config" className="v-lst-config-panel">
                            <div className="v-lst-title">开关灯时间设置</div>
                            <div className="v-lst-config-console">
                                <TimeSettingPanel {...viewData} {...viewActions} />
                                <TimeSettingConsole {...viewData} {...viewActions} />
                            </div>
                        </div>
                    ] : <span className="v-lst-placeholder">从左侧列表中选择设备后展开设置</span> }
                </QueueAnim>
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