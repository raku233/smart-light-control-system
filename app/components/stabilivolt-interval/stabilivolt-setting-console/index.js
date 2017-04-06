import React, { Component } from 'react';

import { Table, Popconfirm } from 'antd';
import TimeRange from '../../common/time-range/index';
import EditableText from '../../common/editable-text/index';

import './index.css';

const { Column } = Table;

export default class StabilivoltSettingConsole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { key: 1, stabilivoltTime: '1', stabilivoltValue: { editable: false, value: 220 } },
                { key: 2, stabilivoltTime: '2', stabilivoltValue: { editable: false, value: 220 } },
                { key: 3, stabilivoltTime: '3', stabilivoltValue: { editable: false, value: 220 } },
                { key: 4, stabilivoltTime: '4', stabilivoltValue: { editable: false, value: 220 } }
            ]
        };
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
        })
    }

    render() {
        const { data } = this.state;

        return (
            <Table size="small" pagination={false} dataSource={data}>
                <Column
                  title="稳压时段"
                  key="stabilivoltTime"
                  dataIndex="stabilivoltTime"
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
                  width={100}
                  title="稳压值"
                  key="stabilivoltValue"
                  dataIndex="stabilivoltValue"
                  render={(object, record, index) => this.renderEditableColumn(data, index, 'stabilivoltValue', 'V', object)}
                />
                <Column
                  width={100}
                  title="操作"
                  key="operation"
                  render={(text, record, index) => {
                      const { editable } = this.state.data[index].stabilivoltValue;

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
        );
    }
}