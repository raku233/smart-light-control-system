import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout, Button } from 'antd';
import { Map } from 'react-amap';
import { actions as commonActions } from '../../components/common/redux';
import DeviceList from '../../components/common/device-list';

const AMAP_KEY = 'a8501da295b13fe4f4d1ebf51da6bf3c';

class SingleLampMap extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;
        const plugins = ['Scale', 'OverView', 'ToolBar'];

        return (
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                <DeviceList {...deviceList} {...deviceListActions}></DeviceList>
                <div style={{ flex: 1, height: '100%' }}>
                    <Map amapkey={AMAP_KEY} plugins={plugins} />
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.common.deviceList
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch)
    };
})(SingleLampMap);