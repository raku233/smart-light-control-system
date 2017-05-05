import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import QueueAnim from 'rc-queue-anim';
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
        const { devID } = viewData;
        return (
            <div className="v-h-container">
                <DeviceList {...deviceList} {...deviceListActions} {...viewActions} />
                <QueueAnim className="v-mls-anim-wrapper" delay={100} interval={200} type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    { devID ? [
                        <div key="config" style={{ flex: 1, height: '100%' }}>
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
                    ] : <span className="v-mls-placeholder">从左侧列表中选择设备后展开设置</span> }
                </QueueAnim>   
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