import React, { Component } from 'react';

import { Table, InputNumber, Button } from 'antd';

import './index.css';

const { Column } = Table;

export default class WarningInfoTable extends Component {
    constructor(props) {
        super(props);

        this.handleNumberInputChange = this.handleNumberInputChange.bind(this);
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
        this.reloadData = this.reloadData.bind(this);
    }

    componentDidMount() {
        this.props.loadViewData();
    }

    handleNumberInputChange(value) {
        this.props.updateViewData({ displayQuantity: value });
    }

    handlePaginationChange(page, pageSize) {
        this.props.updateViewData({ currentPage: page });
    }

    reloadData() {
       this.props.loadViewData();
    }

    render() {
        const { statusGroup, displayQuantity, currentPage, loading } = this.props;
        const length = statusGroup.length;

        const start = (currentPage - 1) * displayQuantity,
            end = currentPage * displayQuantity < length
                ? currentPage * displayQuantity
                : length;

        return (
          <div className="c-cw-wit-container">
            <div className="c-cw-wit-config">
              <div className="c-cw-wit-number-input">
                <span className="c-cw-wit-label">当页显示历史记录条数: </span>
                <InputNumber min={1} max={50} value={displayQuantity} onChange={this.handleNumberInputChange} />
                <Button className="c-cw-wit-reload-btn" shape="circle" icon="reload" onClick={this.reloadData}></Button>
              </div>
              <div className="c-cw-wit-table-info">
                <span className="c-rq-rit-label">当前显示 {start} - {end} 条记录  共 {length} 条记录</span>
              </div>
            </div>

            <Table className="c-cw-wit-table" dataSource={statusGroup} loading={loading} scroll={{ x: true, y: 300 }} pagination={{ pageSize: displayQuantity, current: currentPage, onChange: this.handlePaginationChange }} size="small">
                <Column
                  width={40}
                  title="编号"
                  dataIndex="key"
                  key="key"
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
                  title="警报内容"
                  dataIndex="alarmInfo"
                  key="alarmInfo"
                />
                <Column
                  width={150}
                  title="警报时间"
                  dataIndex="alarmTime"
                  key="alarmTime"
                />
            </Table>
          </div>
        );
    }

}