import React, { Component } from 'react';
import { Table, Button } from 'antd';
import ElectricDetail from './electric-detail';
import './index.css';

const { Column, ColumnGroup } = Table;

export default class SingleLampParameterTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            devID: '',
            currentDetail: {},
            modalVisible: false
        };
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        const { devID, modalVisible } = nextProps;
        this.setState({
            devID,
            modalVisible
        });
    }

    onSelectChange(selectedRowKeys) {
        this.props.uploadSelectedRods(selectedRowKeys);
    }

    handleReloadClick() {
        this.props.loadViewData(this.props.devID);
    }

    handleDetailClick(text, record, index) {
        console.log(text, record, index);
        this.setState({
            modalVisible: true,
            currentDetail: record
        });
    }

    renderLampStatus(text, record, idx) {
        const lampStatus = text <= 3 && text > 0 ? 'light_on' : 'light_off';
        return <img alt="灯2" src={require(`../../../assets/${lampStatus}.png`)} width={25} />;
    } 

    render() {
        const rowSelection = {
            onChange: this.onSelectChange.bind(this)
        };
        return (
            <div className="c-c-slpt-container">
                <span className="c-c-slpt-span">单灯参数信息 </span>
                <Button icon="reload" shape="circle" onClick={this.handleReloadClick.bind(this)}></Button>
                <Table 
                  dataSource={this.props.rodList}
                  rowSelection={rowSelection}
                  scroll={{ x: false, y: 150 }}
                  pagination={false}
                  size="small"
                  loading={this.props.loading}
                  className="c-c-slp-table"
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
                      width={100}
                      title="详情"
                      key="detail"
                      render={(text, record, index) => {
                          return <a onClick={() => this.handleDetailClick(text, record, index)}>详情</a>;
                      }}
                    />
                </Table>
                <ElectricDetail {...this.state} uploadModalVisible={this.props.uploadModalVisible} />
            </div>
        );
    }
}