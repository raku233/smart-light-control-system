import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as commonActions } from '../../components/common/redux';
import DeviceList from '../../components/common/device-list';
import LampSwitchingState from '../../components/compulsive-lamp-switching/lamp-switching-state';
import SingleLampParameterTable from '../../components/common/single-lamp-parameter-table';
import './index.css';


class CompulsiveLampSwitching extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;

        return (
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                <DeviceList {...deviceList} {...deviceListActions}></DeviceList>
                <div style={{ flex: 1, height: '100%' }}>
                    <LampSwitchingState />
                    <SingleLampParameterTable />
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch)
    };
})(CompulsiveLampSwitching);