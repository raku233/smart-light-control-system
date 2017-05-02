import React, { Component } from 'react';
import { Modal, Table, Button } from 'antd';

const { Column } = Table;

class ElectricDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            electricParameter: []
        };
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        const { currentDetail } = nextProps;
        const electricParameter = [
            { key: '灯1电流', value: currentDetail.I1 },
            { key: '灯1电压', value: currentDetail.V1 },
            { key: '灯1亮度', value: currentDetail.lux1 },
            { key: '灯2电流', value: currentDetail.I2 },
            { key: '灯2电压', value: currentDetail.V2 },
            { key: '灯2亮度', value: currentDetail.lux2 },
            { key: '灯杆警报', value: currentDetail.rodAlarm },
            { key: '总警报信息', value: currentDetail.alarmInfo },
            { key: '灯1警报', value: currentDetail.alarm1 },
            { key: '灯2警报', value: currentDetail.alarm2 },
            { key: '灯1扩警报', value: currentDetail.lamp1Alarm },
            { key: '灯2扩警报', value: currentDetail.lamp2Alarm },
            { key: '电压上限', value: currentDetail.rodVUp },
            { key: '电压下限', value: currentDetail.rodVDown },
            { key: '电流1上限', value: currentDetail.I1Up },
            { key: '电流2上限', value: currentDetail.I2Up },
            { key: '灯1阈值', value: currentDetail.lamp1Up },
            { key: '灯2阈值', value: currentDetail.lamp2Up }
        ];

        this.setState({
            electricParameter

        });
    }

    handleCancel() {
        this.props.uploadModalVisible(false);
    }

    render() {
        return (
            <Modal
              className="c-slm-epm-modal"
              title={`详情(${this.props.currentDetail.rodNum})`}
              visible={this.props.modalVisible}
              width={600}
              onCancel={this.handleCancel.bind(this)}
              footer={false}
            >
                <Table
                  className="c-slm-epm-table" 
                  dataSource={this.state.electricParameter} 
                  scroll={{ x: 550, y: 300 }}
                  showHeader={false}
                  pagination={false}
                  size="small"
                >
                    <Column
                      title=""
                      key="key"
                      dataIndex="key"
                    />
                    <Column 
                      title=""
                      key="value"
                      dataIndex="value"
                    />
              </Table>
            </Modal>
        );
    }
}

export default ElectricDetail;