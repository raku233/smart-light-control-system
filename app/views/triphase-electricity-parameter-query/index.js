import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from '../../views/triphase-electricity-parameter-query/redux';

import TriphaseElectricityParameterChart from '../../components/triphase-electricity-parameter-query/triphase-electricity-parameter-chart';
import DeviceList from '../../components/common/device-list';


import './index.css';


class TriphaseElectricityParameterQuery extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;
        return (
            <div className="v-tepq-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <TriphaseElectricityParameterChart {...viewData} {...viewActions} />
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList,
        viewData: state.TriphaseElectricityParameterQuery.viewData
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(TriphaseElectricityParameterQuery);