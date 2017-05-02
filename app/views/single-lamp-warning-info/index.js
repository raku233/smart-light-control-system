import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as viewActions } from './redux.js';
import QueryWarning from '../../components/single-lamp-warning-info/query-warning';
import WarningTable from '../../components/single-lamp-warning-info/warning-table';

class SingleLampWarningInfo extends Component {
    render() {
        const { viewActions, viewData } = this.props;
        return (
            <div className="v-slwi-container">
                <WarningTable {...viewData} {...viewActions} />
            </div>
        );
    }
}

export default connect(state => {
    return {
        viewData: state.SingleLampWarningInfo.viewData
    };
}, dispatch => {
    return {
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(SingleLampWarningInfo);