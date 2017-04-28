import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';
import { EnergyConsumptionQueryViewActions as viewActions } from '../../components/common/chart-query/redux';

import ChartQuery from '../../components/common/chart-query';
import DeviceList from '../../components/common/device-list';


import './index.css';

class EnergyConsumptionQuery extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;
        return (
            <div className="v-ecq-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <ChartQuery {...viewData} {...viewActions} />
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