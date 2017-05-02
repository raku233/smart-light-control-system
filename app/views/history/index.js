import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tabs } from 'antd';

import { actions as commonActions } from '../../components/common/redux';
import { actions as viewActions } from '../../views/history/redux';

import DeviceList from '../../components/common/device-list';
import QueryHistory from '../../components/history/query-history';
import ElectricalParameterTable from '../../components/history/electrical-parameter-table';
import WarningTable from '../../components/history/warning-table';
import QueryElectric from '../../components/history/query-electric';

import './index.css';

const { TabPane } = Tabs;

class History extends Component {
    render() {
        const { deviceList, deviceListActions, viewData, viewActions } = this.props;

        return (
            <div className="v-h-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <div style={{ flex: 1, height: '100%' }}>
                    <QueryHistory {...viewActions} {...viewData} />
                    <Tabs defaultActiveKey="1" className="v-h-tabs">
                        <TabPane tab="电参数历史记录" key="1">
                            <QueryElectric {...viewData} {...viewActions} />
                            <ElectricalParameterTable {...viewData} />
                        </TabPane>
                        <TabPane tab="警报历史记录" key="2">
                            <WarningTable {...viewData} />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        deviceList: state.Common.deviceList,
        viewData: state.History.viewData
    };
}, dispatch => {
    return {
        deviceListActions: bindActionCreators(commonActions.deviceListActions, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(History);