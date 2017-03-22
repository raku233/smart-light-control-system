import React, { Component } from 'react';

import WarnInfoTable from '../../components/current-warning/warning-info-table';

import './index.css';

class CurrentWarning extends Component {
    render() {
        return (
            <div className="v-cw-container">
                <div className="v-cw-title">报警信息</div>
                <WarnInfoTable />
            </div>
        );
    }
}

export default CurrentWarning;