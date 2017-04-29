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
            selectedRowKeys: []
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
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
        this.setState({
            selectedRowKeys
        });
    }

    handleOk(e) {
        this.props.uploadModalVisible(false);
    }

    handleCancel(e) {
        this.props.uploadModalVisible(false);
    }

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            type: 'radio',
            onChange: this.onSelectChange
        };
        return (
            <Modal
              className="c-c-rl-modal"
              title="灯杆列表"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              width={600}
            >
                <Table 
                  className="c-c-rl-table" 
                  size="small" 
                  rowSelection={rowSelection} 
                  dataSource={this.props.rodList} 
                  scroll={{ x: false, y: 200 }}
                  loading={this.props.loading}
                >
                    <Column
                      width={80}
                      title="末端编号"
                      key="rodReal"
                      dataIndex="末端编号"
                    />
                    <Column
                      width={80}
                      title="灯杆号"
                      key="rodNum"
                      dataIndex="灯杆号"
                    />
                    <ColumnGroup title="开关灯状态" key="singleState">
                        <Column
                          width={40}
                          title="灯1"
                          key="lamp1"
                        />
                        <Column
                          width={40}
                          title="灯2"
                          key="lamp2"
                        />
                    </ColumnGroup>
                    <Column
                      width={100}
                      title="时间"
                      key="date"
                      dataIndex="时间"
                    />
                    <Column
                      title="结果"
                      key="result"
                      dataIndex="结果"
                    />
                </Table>
            </Modal>
        );
    }
}

export default RodList;