import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from '../../views/assets-proportion-chart/redux';

import AssetsProportionDisplayChart from '../../components/assets-proportion-chart/assets-proportion-display-chart';
import DeviceList from '../../components/common/device-list';

import './index.css';

class AssetsProportionChart extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;
        return (
            <div className="v-apc-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <AssetsProportionDisplayChart {...viewData} {...viewActions} />
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList,
        viewData: state.AssetsProportionChart.viewData
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(AssetsProportionChart);