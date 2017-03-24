import React, { Component } from 'react';

import RecordInfoTable from '../../components/record-query/record-info-table/index';

import './index.css';

class RecordQuery extends Component {
    render() {
        return (
            <div className="v-rq-container">
                <div className="v-rq-title">记录查询</div>
                <RecordInfoTable />
            </div>
        );
    }
}

export default RecordQuery;