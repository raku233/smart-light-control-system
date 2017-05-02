import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from './redux';

import DailyElectricityConsumptionChart from '../../components/daily-electricity-consumption-query/daily-electricity-consumption-chart';
import DeviceList from '../../components/common/device-list';

import './index.css';

class DailyElectricityConsumptionQuery extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;
        return (
            <div className="v-dec-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <DailyElectricityConsumptionChart {...viewData} {...viewActions} />
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList,
        viewData: state.DailyElectricityConsumptionQuery.viewData
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(DailyElectricityConsumptionQuery);