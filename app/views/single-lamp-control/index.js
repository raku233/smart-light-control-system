import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Card, Switch, Button, Checkbox } from 'antd';
import { actions as commonActions } from '../../components/common/redux';
import SingleLampParameterTable from '../../components/common/single-lamp-parameter-table';
import DeviceList from '../../components/common/device-list';

import './index.css';

class SingleLampControl extends Component {
    render() {
        const { deviceList, deviceListActions } = this.props;

        return (
            <div className="v-mls-container">
                <DeviceList {...deviceList} {...deviceListActions} />
                <div style={{ flex: 1, height: '100%' }}>
                    <Row>
                        <Col span="10" className="v-slc-col">
                            <Card title={<Switch checkedChildren={'开'} unCheckedChildren={'关'} />}>
                                <div className="v-slc-card-container">
                                    <Button className="v-slc-button">全手动开灯</Button>
                                </div>
                                <div className="v-slc-card-container">
                                    <Button type="primary" className="v-slc-button">全恢复时控</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col span="14">
                            <Card title={<Checkbox>对各单灯进行广播</Checkbox>}>
                                <div className="v-slc-card-container">
                                    <Button className="v-slc-button">查询时段1</Button>
                                    <Button type="primary" className="v-slc-button">查询时段2</Button>
                                </div>
                                <div className="v-slc-card-container">
                                    <Button className="v-slc-button">查询开关状态</Button>
                                    <Button type="primary" className="v-slc-button">查询电流信息</Button>
                                    <Button className="v-slc-button">查询电杆状态</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <SingleLampParameterTable />
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
})(SingleLampControl);