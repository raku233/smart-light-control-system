import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from './redux';
import DeviceList from '../../components/common/device-list';
import LampMap from '../../components/common/lamp-map';

class SingleLampMap extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;

        return (
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <div style={{ flex: 1, height: '100%' }}>
                    <LampMap deviceList={deviceList} {...viewData} />
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.common.deviceList,
        viewData: state.SingleLampMap.viewData

    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(SingleLampMap);