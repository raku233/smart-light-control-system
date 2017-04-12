import React, { Component } from 'react';
import { Tabs } from 'antd';
import QueryHistory from '../../components/history/query-history';
import ElectricalParameterTable from '../../components/history/electrical-parameter-table';
import WarningTable from '../../components/history/warning-table';

import './index.css';

const { TabPane } = Tabs;

class History extends Component {
    render() {
        return (
            <div className="v-h-container">
                <QueryHistory />
                <Tabs defaultActiveKey="1" className="v-h-tabs">
                    <TabPane tab="电参数历史记录" key="1">
                        <ElectricalParameterTable />
                    </TabPane>
                    <TabPane tab="警报历史记录" key="2">
                        <WarningTable />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default History;