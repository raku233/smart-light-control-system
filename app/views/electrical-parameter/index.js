import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as commonActions } from '../../components/common/redux';

import DeviceList from '../../components/common/device-list/index';
import ElectricalParameterTable from '../../components/electrical-parameter/electrical-parameter-table';
import ContractorInfoTable from '../../components/electrical-parameter/contractor-info-table';
import BranchInfoTable from '../../components/electrical-parameter/branch-info-table';

import './index.css';

class ElectricalParameter extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;

        return (
            <div className="v-ep-container">
                <DeviceList {...deviceList} {...deviceListActions} />
                <div className="v-ep-config-panel">
                    <div className="v-ep-title">终端电参数</div>
                    <ElectricalParameterTable />
                    <div className="v-ep-title">接触器</div>
                    <ContractorInfoTable />
                    <div className="v-ep-title">支路详细信息</div>
                    <BranchInfoTable />
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
})(ElectricalParameter);