import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from './redux';
import DeviceList from '../../components/common/device-list';
import LampSwitchingState from '../../components/single-lamp-switch/lamp-switching-state';
import SingleLampParameterTable from '../../components/common/single-lamp-parameter-table';
import './index.css';


class SingleLampSwitch extends Component {
    render() {
        const { deviceList, rodList, rodListActions, deviceListActions, viewData, viewActions } = this.props;
        const { devID } = rodList;
        return (
            <div style={{ height: '100%', display: 'flex' }}>
                <DeviceList {...deviceList} {...deviceListActions} {...rodListActions}></DeviceList>
                <QueueAnim 
                  className="v-mls-anim-wrapper" 
                  delay={100} interval={200} 
                  type={['right', 'left']} 
                  ease={['easeOutQuart', 'easeInOutQuart']}>
                    { devID ? [
                        <div key="config" style={{ flex: 1, height: '100%' }}>
                            <SingleLampParameterTable key="table" {...rodList} {...rodListActions} />
                            <LampSwitchingState key="config" {...viewActions} {...viewData} />
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
        rodList: state.Common.rodList,
        viewData: state.SingleLampSwitch.viewData
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        rodListActions: bindActionCreators(commonActions.rodListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(SingleLampSwitch);