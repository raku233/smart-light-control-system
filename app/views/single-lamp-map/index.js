import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'react-amap';
import { actions as commonActions } from '../../components/common/redux';
import DeviceList from '../../components/common/device-list';
import LampMap from '../../components/common/lamp-map';

class SingleLampMap extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;

        return (
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                <DeviceList {...deviceList} {...deviceListActions}></DeviceList>
                <div style={{ flex: 1, height: '100%' }}>
                    <LampMap deviceList={deviceList} />
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
})(SingleLampMap);