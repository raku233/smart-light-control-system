import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from './redux';
import DeviceList from '../../components/common/device-list';
import LampMap from '../../components/common/lamp-map';
import ElectricParamModal from '../../components/single-lamp-map/electric-param-modal';

class SingleLampMap extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;

        return (
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <div style={{ flex: 1, height: '100%' }}>
                    <LampMap {...deviceList} {...viewData} {...viewActions} />
                </div>
                <ElectricParamModal {...viewData} {...viewActions} />
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList,
        viewData: state.SingleLampMap.viewData

    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(SingleLampMap);