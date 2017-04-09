import React, { Component } from 'react';
import { Table, Popconfirm, Row, Col } from 'antd';
import TimeRange from '../../common/time-range';
import EditableText from '../../common/editable-text/index';
import './index.css';

const { Column } = Table;

export default class SwitchingTimeTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { key: '1', lampNum: '1', luminance: { editable: false, value: 100 } },
                { key: '2', lampNum: '2', luminance: { editable: false, value: 100 } },
                { key: '3', lampNum: '3', luminance: { editable: false, value: 100 } },
                { key: '4', lampNum: '4', luminance: { editable: false, value: 100 } },
            ]
        };
    }

    handleValueChange(key, index, value) {
        const { data } = this.state;
        data[index][key].value = value;
        this.setState({ data });
    }

    edit(index) {
        const { data } = this.state;
        Object.keys(data[index]).forEach(item => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = true;
            }
        });
        this.setState({ data });
    }

    editDone(index, type) {
        const { data } = this.state;
        Object.keys(data[index]).forEach(item => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = false;
                data[index][item].status = type;
            }
        });
        this.setState({ data }, () => {
            Object.keys(data[index]).forEach(item => {
                if (data[index][item] && data[index][item].editable !== 'undefined') {
                    delete data[index][item].status;
                }
            });
        });
    }

    renderEditableColumn(data, index, key, unit, object) {
        const { editable, status } = data[index][key];
        if (typeof editable === 'undefined') {
            return object;
        }

        return (
            <EditableText
              editable={editable}
              value={object.value}
              onChange={value => this.handleValueChange(key, index, value)}
              unit={unit}
              status={status}
            />
        );
    }

    render() {
        const { data } = this.state;

        return (
            <div className="c-slst-stt-container">
                <Table size="small" dataSource={data} pagination={false}>
                    <Column
                      title="灯号"
                      width="40"
                      key="lampNum"
                      dataIndex="lampNum"
                    />
                    <Column
                      title="起止时间"
                      key="timeRange"
                      dataIndex="timeRange"
                      render={(text, record) => {
                          return (
                              <TimeRange />
                          );
                      }}
                    />
                    <Column
                      title="亮度"
                      width="100"
                      key="luminance"
                      dataIndex="luminance"
                      render={(object, record, index) => this.renderEditableColumn(data, index, 'luminance', '%', object)}
                    />
                    <Column
                      width={100}
                      title="操作"
                      key="operation"
                      render={(text, record, index) => {
                          const { editable } = this.state.data[index].luminance;

                          return (
                            <div>
                                {
                                    editable ?
                                        <span>
                                            <a className="c-si-ssc-btn" onClick={() => this.editDone(index, 'save')}>保存</a>
                                            <Popconfirm title="确定取消编辑吗？" onConfirm={() => this.editDone(index, 'cancel')}>
                                                <a className="c-si-ssc-btn">取消</a>
                                            </Popconfirm>
                                        </span>
                                        :
                                        <span>
                                            <a onClick={() => this.edit(index)}>编辑</a>
                                        </span>
                                }
                            </div>
                          );
                      }}
                    />
                </Table>
            </div>
        );
    }
}