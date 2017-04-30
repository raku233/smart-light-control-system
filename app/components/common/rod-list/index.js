import React, { Component } from 'react';
import { Modal, Table, Button } from 'antd';

import './index.css';

const { Column, ColumnGroup } = Table;

class RodList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            devID: '',
        };
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        const { modalVisible, devID } = nextProps;
        this.setState({
            visible: modalVisible,
            devID
        });
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.props.uploadSelectedRods(selectedRowKeys);
    }

    handleCancel(e) {
        this.props.uploadModalVisible(false);
    }

    renderLampStatus(text, record, idx) {
        const lampStatus = text <= 3 && text > 0 ? 'light_on' : 'light_off';
        return <img alt="灯2" src={require(`../../../assets/${lampStatus}.png`)} width={25} />;
    }

    render() {
        const rowSelection = {
            onChange: this.onSelectChange
        };
        return (
            <Modal
              className="c-c-rl-modal"
              title="灯杆列表"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              width={700}
              footer={null}
            >
                <Table 
                  className="c-c-rl-table" 
                  size="small" 
                  rowSelection={rowSelection} 
                  dataSource={this.props.rodList} 
                  scroll={{ x: 2200, y: 200 }}
                  loading={this.props.loading}
                  pagination={false}
                >
                    <Column
                      width={70}
                      title="末端编号"
                      key="rodReal"
                      dataIndex="rodReal"
                    />
                    <Column
                      width={70}
                      title="灯杆号"
                      key="rodNum"
                      dataIndex="rodNum"
                    />
                    <ColumnGroup title="开关灯状态" key="singleState">
                        <Column
                          width={40}
                          title="灯1"
                          key="lamp1Status"
                          dataIndex="lamp1Status"
                          render={this.renderLampStatus}
                        />
                        <Column
                          width={40}
                          title="灯2"
                          key="lamp2Status"
                          dataIndex="lamp2Status"
                          render={this.renderLampStatus}
                        />
                    </ColumnGroup>
                    <Column
                      width={120}
                      title="时间"
                      key="date"
                      dataIndex="date"
                    />
                    <Column
                      width={200}
                      title="结果"
                      key="result"
                      dataIndex="result"
                    />
                    <Column
                      width={50}
                      title="灯1电流"
                      key="I1"
                      dataIndex="I1"
                    />
                    <Column
                      width={50}
                      title="灯1电压"
                      key="V1"
                      dataIndex="V1"
                    />
                    <Column
                      width={50}
                      title="灯1亮度"
                      key="lux1"
                      dataIndex="lux1"
                    />
                    <Column
                      width={50}
                      title="灯2电流"
                      key="I2"
                      dataIndex="I2"
                    />
                    <Column
                      width={50}
                      title="灯2电压"
                      key="V2"
                      dataIndex="V2"
                    />
                    <Column
                      width={50}
                      title="灯2亮度"
                      key="lux2"
                      dataIndex="lux2"
                    />
                    <Column
                      width={50}
                      title="灯杆警报"
                      key="rodAlarm"
                      dataIndex="rodAlarm"
                    />
                    <Column
                      width={70}
                      title="总警报内容"
                      key="alarmInfo"
                      dataIndex="alarmInfo"
                    />
                    <Column
                      width={50}
                      title="灯1警报"
                      key="alarm1"
                      dataIndex="alarm1"
                    />
                    <Column
                      width={70}
                      title="灯2警报"
                      key="alarm2"
                      dataIndex="alarm2"
                    />
                    <Column
                      width={70}
                      title="灯1扩警报"
                      key="lamp1Alarm"
                      dataIndex="lamp1Alarm"
                    />
                    <Column
                      width={70}
                      title="灯2扩警报"
                      key="lamp2Alarm"
                      dataIndex="lamp2Alarm"
                    />
                    <Column
                      width={50}
                      title="电压上限"
                      key="rodVUp"
                      dataIndex="rodVUp"
                    />
                    <Column
                      width={50}
                      title="电压下限"
                      key="rodVDown"
                      dataIndex="rodVDown"
                    />
                    <Column
                      width={70}
                      title="电流1上限"
                      key="I1Up"
                      dataIndex="I1Up"
                    />
                    <Column
                      width={70}
                      title="电流2上限"
                      key="I2Up"
                      dataIndex="I2Up"
                    />
                    <Column
                      width={50}
                      title="灯1阈值"
                      key="lamp1Up"
                      dataIndex="lamp1Up"
                    />
                    <Column
                      width={50}
                      title="灯2阈值"
                      key="lamp2Up"
                      dataIndex="lamp2Up"
                    />
                </Table>
            </Modal>
        );
    }
}

export default RodList;