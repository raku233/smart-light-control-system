import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as viewActions } from '../../views/current-warning/redux';

import WarnInfoTable from '../../components/current-warning/warning-info-table';

import './index.css';

class CurrentWarning extends Component {
    render() {
        const { viewData, viewActions } = this.props;
        return (
            <div className="v-cw-container">
                <div className="v-cw-title">报警信息</div>
                <WarnInfoTable {...viewData} {...viewActions} />
            </div>
        );
    }
}

export default connect(state => {
    return {
        viewData: state.CurrentAlarm.viewData
    };
}, dispatch => {
    return {
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(CurrentWarning);