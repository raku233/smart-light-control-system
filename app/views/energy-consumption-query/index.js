import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';

import EnergyConsumptionChart from '../../components/energy-consumption-query/energy-consumption-chart';
import DeviceList from '../../components/common/device-list';

import { actions as viewActions } from '../../views/energy-consumption-query/redux';

import './index.css';

class EnergyConsumptionQuery extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;
        return (
            <div className="v-ecq-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <EnergyConsumptionChart {...viewData} {...viewActions} />
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList,
        viewData: state.EnergyConsumptionQuery.viewData
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(EnergyConsumptionQuery);