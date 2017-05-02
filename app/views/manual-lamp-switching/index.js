import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import QueueAnim from 'rc-queue-anim';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from '../../views/manual-lamp-switching/redux';

import DeviceList from '../../components/common/device-list';
import SwitchingConsole from '../../components/manual-lamp-switching/switching-console';
import LampSwitchingConsole from '../../components/common/lamp-switching-console';

import './index.css';

class ManualLampSwitching extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;
        const { devID } = viewData;

        return (
            <div className="v-mls-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <QueueAnim className="v-mls-anim-wrapper" delay={100} interval={200} type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    { devID ? [
                        <div key="config" className="v-mls-config-panel">
                            <SwitchingConsole {...viewData} {...viewActions} />
                            <LampSwitchingConsole {...viewData} {...viewActions} />
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
        viewData: state.ManualLampSwitching.viewData
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(ManualLampSwitching);