import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import QueueAnim from 'rc-queue-anim';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from '../../views/group-control-setting/redux';


import DeviceGroup from '../../components/common/device-group';
import LampSwitchingPanel from '../../components/group-control-setting/lamp-switching-panel';
import TimeSettingPanel from '../../components/group-control-setting/time-setting-panel';
import LampSwitchingConsole from '../../components/group-control-setting/lamp-switching-console';
import TimeSettingConsole from '../../components/group-control-setting/time-setting-console';



import './index.css';

class GroupControlSetting extends Component {
    render() {
        const { deviceGroup, deviceGroupActions, viewData, viewActions } = this.props;
        const { groupName } = viewData;

        return (
            <div className="v-gcs-container">
                <DeviceGroup {...deviceGroup} {...deviceGroupActions} {...viewActions} />
                <div className="v-gcs-config-panel">
                    <QueueAnim className="v-gcs-anim-wrapper" delay={100} interval={200} type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                        { groupName ? [
                            <div key="title1" className="v-gcs-title">开关灯时间组控</div>,
                            <div key="config1" className="v-gcs-config">
                                <TimeSettingPanel {...viewData} {...viewActions} />
                                <TimeSettingConsole {...viewData} {...viewActions} />
                            </div>,
                            <div key="title2" className="v-gcs-title">手动开关灯组控</div>,
                            <div key="config2" className="v-gcs-config">
                                <LampSwitchingPanel {...viewData} {...viewActions} />
                                <LampSwitchingConsole {...viewData} {...viewActions} />
                            </div>
                        ] : <span className="v-gcs-placeholder">从左侧列表中选择分组后展开设置</span> }
                    </QueueAnim>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceGroup: state.Common.deviceGroup,
        viewData: state.GroupControlSetting.viewData
    };
}, dispatch => {
    return {
        deviceGroupActions: bindActionCreators(commonActions.deviceGroupActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(GroupControlSetting);