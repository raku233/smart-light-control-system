import React, { Component } from 'react';

import { Table, InputNumber, DatePicker, Button } from 'antd';

import './index.css';

const { Column } = Table,
      { RangePicker } = DatePicker;


export default class RecordInfoTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
              { key: 1, number: 1, devAddress: '70', devAddTime: '2014-06-18T04:23 18:08:00', inputVoltage4A: 239.6, inputVoltage4B: 238.9, inputVoltage4C: 238.3, inputCurrent4A: 0, inputCurrent4B: 0, inputCurrent4C: 0 },
              { key: 2, number: 1, devAddress: '70', devAddTime: '2014-06-18T04:23 18:08:00', inputVoltage4A: 239.6, inputVoltage4B: 238.9, inputVoltage4C: 238.3, inputCurrent4A: 0, inputCurrent4B: 0, inputCurrent4C: 0 },
              { key: 3, number: 1, devAddress: '70', devAddTime: '2014-06-18T04:23 18:08:00', inputVoltage4A: 239.6, inputVoltage4B: 238.9, inputVoltage4C: 238.3, inputCurrent4A: 0, inputCurrent4B: 0, inputCurrent4C: 0 },
              { key: 4, number: 1, devAddress: '70', devAddTime: '2014-06-18T04:23 18:08:00', inputVoltage4A: 239.6, inputVoltage4B: 238.9, inputVoltage4C: 238.3, inputCurrent4A: 0, inputCurrent4B: 0, inputCurrent4C: 0 },
              { key: 5, number: 1, devAddress: '70', devAddTime: '2014-06-18T04:23 18:08:00', inputVoltage4A: 239.6, inputVoltage4B: 238.9, inputVoltage4C: 238.3, inputCurrent4A: 0, inputCurrent4B: 0, inputCurrent4C: 0 },
              { key: 6, number: 1, devAddress: '70', devAddTime: '2014-06-18T04:23 18:08:00', inputVoltage4A: 239.6, inputVoltage4B: 238.9, inputVoltage4C: 238.3, inputCurrent4A: 0, inputCurrent4B: 0, inputCurrent4C: 0 },
              { key: 7, number: 1, devAddress: '70', devAddTime: '2014-06-18T04:23 18:08:00', inputVoltage4A: 239.6, inputVoltage4B: 238.9, inputVoltage4C: 238.3, inputCurrent4A: 0, inputCurrent4B: 0, inputCurrent4C: 0 },
              { key: 8, number: 1, devAddress: '70', devAddTime: '2014-06-18T04:23 18:08:00', inputVoltage4A: 239.6, inputVoltage4B: 238.9, inputVoltage4C: 238.3, inputCurrent4A: 0, inputCurrent4B: 0, inputCurrent4C: 0 },
              { key: 9, number: 1, devAddress: '70', devAddTime: '2014-06-18T04:23 18:08:00', inputVoltage4A: 239.6, inputVoltage4B: 238.9, inputVoltage4C: 238.3, inputCurrent4A: 0, inputCurrent4B: 0, inputCurrent4C: 0 },
            ]
        };
    }

    render() {
        const { data } = this.state;
        const defaultColumnWidth = 80;

        return (
            <div className="c-rq-rit-container">
                <div className="c-rq-rit-query">
                    <span className="c-rq-rit-label">起止时间：</span>
                    <RangePicker />
                    <Button className="c-rq-rit-button" type="default">查询</Button>
                </div>
                <div className="c-rq-rit-config">
                    <span className="c-rq-rit-label">当页显示历史记录条数：</span>
                    <InputNumber />
                    <div className="c-rq-rit-record-info">
                      <span className="c-rq-rit-label">当前显示 1 - 20 条记录  共 200 条记录</span>
                    </div>
                </div>
                <Table className="c-rq-rit-table" dataSource={data} scroll={{ x: 2000, y: 250 }}>
                    <Column
                      width={40}
                      title=""
                      dataIndex="number"
                      key="number"
                      fixed="left"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="设备地址"
                      dataIndex="devAddress"
                      key="devAddress"
                    />
                    <Column
                      width={160}
                      title="设备添加时间"
                      dataIndex="devAddTime"
                      key="devAddTime"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="A项输入电压"
                      dataIndex="inputVoltage4A"
                      key="inputVoltage4A"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="B项输入电压"
                      dataIndex="inputVoltage4B"
                      key="inputVoltage4B"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="C项输入电压"
                      dataIndex="inputVoltage4C"
                      key="inputVoltage4C"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="A项输入电流"
                      dataIndex="inputCurrent4A"
                      key="inputCurrent4A"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="B项输入电流"
                      dataIndex="inputCurrent4B"
                      key="inputCurrent4B"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="C项输入电流"
                      dataIndex="inputCurrent4C"
                      key="inputCurrent4C"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="A项输出电压"
                      dataIndex="ouputVoltage4A"
                      key="ouputVoltage4A"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="B项输出电压"
                      dataIndex="ouputVoltage4B"
                      key="ouputVoltage4B"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="C项输出电压"
                      dataIndex="ouputVoltage4C"
                      key="ouputVoltage4C"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="A项输出电流"
                      dataIndex="outputCurrent4A"
                      key="outputCurrent4A"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="B项输出电流"
                      dataIndex="outputCurrent4B"
                      key="outputCurrent4B"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="C项输出电流"
                      dataIndex="outputCurrent4C"
                      key="outputCurrent4C"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="A项有功功率"
                      dataIndex="activePower4A"
                      key="activePower4A"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="B项有功功率"
                      dataIndex="activePower4B"
                      key="activePower4B"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="C项有功功率"
                      dataIndex="activePower4C"
                      key="activePower4C"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="A项无功功率"
                      dataIndex="reactivePower4A"
                      key="reactivePower4A"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="B项无功功率"
                      dataIndex="reactivePower4B"
                      key="reactivePower4B"
                    />
                    <Column
                      width={defaultColumnWidth}
                      title="C项无功功率"
                      dataIndex="reactivePower4C"
                      key="reactivePower4C"
                    />
                </Table>
            </div>
        );
    }
}