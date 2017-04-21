import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from '../../views/electrical-parameter/redux';

import DeviceList from '../../components/common/device-list/index';
import ElectricalParameterTable from '../../components/electrical-parameter/electrical-parameter-table';
import ContractorInfoTable from '../../components/electrical-parameter/contractor-info-table';
import BranchInfoTable from '../../components/electrical-parameter/branch-info-table';

import './index.css';

class ElectricalParameter extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;

        return (
            <div className="v-ep-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <div className="v-ep-config-panel">
                    <div className="v-ep-title">终端电参数</div>
                    <ElectricalParameterTable {...viewData} />
                    <div className="v-ep-title">接触器</div>
                    <ContractorInfoTable {...viewData} />
                    <div className="v-ep-title">支路详细信息</div>
                    <BranchInfoTable />
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList,
        viewData: state.ElectricalParameter.viewData
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(ElectricalParameter);