import React, { Component } from 'react';
import { Modal, Table, Button } from 'antd';
import './index.css';

const { Column } = Table;


class ElectricParamModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            electricParameter: []
        };
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { modalVisible, electricParam } = nextProps;
        this.handleElectricParameterLayout(electricParam, modalVisible);
    }

    handleElectricParameterLayout(data, visible) {
        const electricParameter = [];
        for (const key in data) {
            electricParameter.push({
                key,
                value: data[key]
            });
        }

        this.setState({
            visible,
            electricParameter
        });
    }

    handleCancel(e) {
        this.props.uploadModalVisible(false);
    }

    render() {
        // const columns = [
        //     { width: 120, title: '输出时间', dataIndex: '', key: '' },
        //     { width: 120, title: 'A相电压', dataIndex: '', key: '' },
        //     { width: 120, title: 'B相电压', dataIndex: '', key: '' },
        //     { width: 120, title: 'C相电压', dataIndex: '', key: '' },
        //     { width: 120, title: 'D相电压', dataIndex: '', key: '' },
        //     { width: 120, title: '输出电压A', dataIndex: '', key: '' },
        //     { width: 120, title: '输出电压B', dataIndex: '', key: '' },
        //     { width: 120, title: '输出电压C', dataIndex: '', key: '' },
        //     { width: 120, title: 'A相电流', dataIndex: '', key: '' },
        //     { width: 120, title: 'B相电流', dataIndex: '', key: '' },
        //     { width: 120, title: 'C相电流', dataIndex: '', key: '' },
        //     { width: 120, title: '总有功电度', dataIndex: '', key: '' },
        //     { width: 120, title: '总无功电度', dataIndex: '', key: '' },
        //     { width: 120, title: '总功率', dataIndex: '', key: '' },
        //     { width: 120, title: 'I1', dataIndex: '', key: '' },
        //     { width: 120, title: 'I2', dataIndex: '', key: '' },
        //     { width: 120, title: 'I3', dataIndex: '', key: '' },
        //     { width: 120, title: 'I4', dataIndex: '', key: '' },
        //     { width: 120, title: 'I5', dataIndex: '', key: '' },
        //     { width: 120, title: 'I6', dataIndex: '', key: '' },
        //     { width: 120, title: 'I7', dataIndex: '', key: '' },
        //     { width: 120, title: 'I8', dataIndex: '', key: '' },
        //     { width: 120, title: 'I9', dataIndex: '', key: '' },
        //     { width: 120, title: 'I10', dataIndex: '', key: '' },
        //     { width: 120, title: 'I11', dataIndex: '', key: '' },
        //     { width: 120, title: 'I12', dataIndex: '', key: '' },
        //     { width: 120, title: '接触器1', dataIndex: '', key: '' },
        //     { width: 120, title: '接触器2', dataIndex: '', key: '' },
        //     { width: 120, title: '接触器3', dataIndex: '', key: '' },
        //     { width: 120, title: '接触器4', dataIndex: '', key: '' },
        //     { width: 120, title: '接触器5', dataIndex: '', key: '' },
        //     { width: 120, title: '接触器6', dataIndex: '', key: '' },
        //     { width: 120, title: '接触器7', dataIndex: '', key: '' },
        //     { width: 120, title: '接触器8', dataIndex: '', key: '' },
        //     { width: 120, title: '门禁1', dataIndex: '', key: '' },
        //     { width: 120, title: '门禁2', dataIndex: '', key: '' },
        //     { width: 120, title: '输出空开1', dataIndex: '', key: '' },
        //     { width: 120, title: '输出空开2', dataIndex: '', key: '' },
        //     { width: 120, title: '输出空开3', dataIndex: '', key: '' },
        //     { width: 120, title: '输出空开4', dataIndex: '', key: '' },
        //     { width: 120, title: '主空开', dataIndex: '', key: '' },
        //     { width: 120, title: '是否漏电', dataIndex: '', key: '' },
        //     { width: 120, title: '监控开关', dataIndex: '', key: '' },
        // ];
        return (
            <Modal
              className="c-slm-epm-modal"
              title={`电参详情(设备：${this.props.devID}）`}
              visible={this.state.visible}
              width={600}
              onCancel={this.handleCancel}
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

export default ElectricParamModal;