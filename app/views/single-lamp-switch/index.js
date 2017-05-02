import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from './redux';
import DeviceList from '../../components/common/device-list';
import LampSwitchingState from '../../components/single-lamp-switch/lamp-switching-state';
import SingleLampParameterTable from '../../components/common/single-lamp-parameter-table';
import './index.css';


class SingleLampSwitch extends Component {
    render() {
        const { deviceList, rodList, rodListActions, deviceListActions, viewData, viewActions } = this.props;
        return (
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                <DeviceList {...deviceList} {...deviceListActions} {...rodListActions}></DeviceList>
                <div style={{ flex: 1, height: '100%' }}>
                    <SingleLampParameterTable {...rodList} {...rodListActions} />
                    <LampSwitchingState {...viewActions} {...viewData} />
                </div>
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