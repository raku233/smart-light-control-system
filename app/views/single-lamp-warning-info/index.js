import React, { Component } from 'react';
import QueryWarning from '../../components/single-lamp-warning-info/query-warning';
import WarningTable from '../../components/single-lamp-warning-info/warning-table';

class SingleLampWarningInfo extends Component {
    render() {
        return (
            <div className="v-slwi-container">
                <QueryWarning />
                <WarningTable />
            </div>
        );
    }
}

export default SingleLampWarningInfo;