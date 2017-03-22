import React, { Component } from 'react';

import { Table, InputNumber } from 'antd';

import './index.css';

const { Column } = Table;

export default class WarningInfoTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
            { number: 1, devID: 3, devName: 'G105陈村跨线桥生产队饭店对面', areaGroup: '陈村连接线', relatedPhoneCard: '13423434543', yellowWarningContent: '第一接触器异常', redWarningContent: '', warningTime: '2014/6/18 19:23:23' },
            { number: 2, devID: 3, devName: 'G105陈村跨线桥生产队饭店对面', areaGroup: '陈村连接线', relatedPhoneCard: '13423434543', yellowWarningContent: '第一接触器异常', redWarningContent: '', warningTime: '2014/6/18 19:23:23' },
            { number: 3, devID: 3, devName: 'G105陈村跨线桥生产队饭店对面', areaGroup: '陈村连接线', relatedPhoneCard: '13423434543', yellowWarningContent: '第一接触器异常', redWarningContent: '', warningTime: '2014/6/18 19:23:23' },
            { number: 4, devID: 3, devName: 'G105陈村跨线桥生产队饭店对面', areaGroup: '陈村连接线', relatedPhoneCard: '13423434543', yellowWarningContent: '第一接触器异常', redWarningContent: '', warningTime: '2014/6/18 19:23:23' },
            { number: 5, devID: 3, devName: 'G105陈村跨线桥生产队饭店对面', areaGroup: '陈村连接线', relatedPhoneCard: '13423434543', yellowWarningContent: '第一接触器异常', redWarningContent: '', warningTime: '2014/6/18 19:23:23' },
            { number: 6, devID: 3, devName: 'G105陈村跨线桥生产队饭店对面', areaGroup: '陈村连接线', relatedPhoneCard: '13423434543', yellowWarningContent: '第一接触器异常', redWarningContent: '', warningTime: '2014/6/18 19:23:23' },
            { number: 7, devID: 3, devName: 'G105陈村跨线桥生产队饭店对面', areaGroup: '陈村连接线', relatedPhoneCard: '13423434543', yellowWarningContent: '第一接触器异常', redWarningContent: '', warningTime: '2014/6/18 19:23:23' },
            { number: 8, devID: 3, devName: 'G105陈村跨线桥生产队饭店对面', areaGroup: '陈村连接线', relatedPhoneCard: '13423434543', yellowWarningContent: '第一接触器异常', redWarningContent: '', warningTime: '2014/6/18 19:23:23' }
            ],
            showNumber: 8
        };

        this.handleNumberInputChanged = this.handleNumberInputChanged.bind(this);
    }

    handleNumberInputChanged(value) {
        this.setState({ showNumber: value });
    }

    render() {
        const { data, showNumber } = this.state;

        return (
          <div className="c-cw-wit-container">
            <div className="c-cw-wit-number-input">
              <span className="c-cw-wit-label">当页显示历史记录条数: </span>
              <InputNumber min={1} max={50} value={showNumber} onChange={this.handleNumberInputChanged} />
            </div>
            <Table dataSource={data} scroll={{ x: true, y: 300 }} pagination={{ pageSize: showNumber }} size="small">
                <Column
                  width={40}
                  title="编号"
                  dataIndex="number"
                  key="number"
                />
                <Column
                  width={60}
                  title="终端号"
                  dataIndex="devID"
                  key="devID"
                />
                <Column
                  width={160}
                  title="终端名"
                  dataIndex="devName"
                  key="devName"
                />
                <Column
                  width={100}
                  title="区域分组"
                  dataIndex="areaGroup"
                  key="areaGroup"
                />
                <Column
                  width={130}
                  title="终端设备对应电话卡"
                  dataIndex="relatedPhoneCard"
                  key="relatedPhoneCard"
                />
                <Column
                  width={180}
                  title="黄色警报内容"
                  dataIndex="yellowWarningContent"
                  key="ywllowWarningContent"
                />
                <Column
                  width={180}
                  title="红色警报内容"
                  dataIndex="redWarningContent"
                  key="redWarningContent"
                />
                <Column
                  width={150}
                  title="警报时间"
                  dataIndex="warningTime"
                  key="warningTime"
                />
            </Table>
          </div>
        );
    }

}