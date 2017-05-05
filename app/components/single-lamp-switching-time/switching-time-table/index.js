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
            statusGroup: [
                { key: '1', lampNum: '1', timeRange: { startTime: '00:00', endTime: '00:00' }, luminance: { editable: false, value: 100 } },
                { key: '2', lampNum: '2', timeRange: { startTime: '00:00', endTime: '00:00' }, luminance: { editable: false, value: 100 } },
                { key: '3', lampNum: '3', timeRange: { startTime: '00:00', endTime: '00:00' }, luminance: { editable: false, value: 100 } },
                { key: '4', lampNum: '4', timeRange: { startTime: '00:00', endTime: '00:00' }, luminance: { editable: false, value: 100 } },
            ]
        };
    }

    updateTimeRange(index, timeRange) {
        const { statusGroup } = this.props;
        statusGroup[index].startTime = timeRange.startTime;
        statusGroup[index].endTime = timeRange.endTime;
        this.props.updateViewData(statusGroup);
    }

    handleValueChange(key, index, value) {
        const { statusGroup } = this.state;
        statusGroup[index][key].value = value;
        this.setState({ statusGroup });
    }

    edit(index) {
        const { statusGroup } = this.state;
        Object.keys(statusGroup[index]).forEach(item => {
            if (statusGroup[index][item] && typeof statusGroup[index][item].editable !== 'undefined') {
                statusGroup[index][item].editable = true;
            }
        });
        this.setState({ statusGroup });
    }

    editDone(index, type) {
        const { statusGroup } = this.state;
        Object.keys(statusGroup[index]).forEach(item => {
            if (statusGroup[index][item] && typeof statusGroup[index][item].editable !== 'undefined') {
                statusGroup[index][item].editable = false;
                statusGroup[index][item].status = type;
            }
        });
        this.setState({ statusGroup }, () => {
            Object.keys(statusGroup[index]).forEach(item => {
                if (statusGroup[index][item] && statusGroup[index][item].editable !== 'undefined') {
                    delete statusGroup[index][item].status;
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
        const { statusGroup } = this.state;

        return (
            <div className="c-slst-stt-container">
                <Table size="small" dataSource={statusGroup} pagination={false}>
                    <Column
                      title="灯号"
                      width="40"
                      key="lampNum"
                      dataIndex="lampNum"
                    />
                    <Column
                      width={280}
                      title="起止时间"
                      key="timeRange"
                      dataIndex="timeRange"
                      render={(text, record, index) => {
                          return (
                              <TimeRange startTime={record.startTime} endTime={record.endTime} updateTimeRange={this.updateTimeRange.bind(this, index)}/>
                          );
                      }}
                    />
                    <Column
                      title="亮度"
                      width="100"
                      key="luminance"
                      dataIndex="luminance"
                      render={(object, record, index) => this.renderEditableColumn(statusGroup, index, 'luminance', '%', object)}
                    />
                    <Column
                      width={100}
                      title="操作"
                      key="operation"
                      render={(text, record, index) => {
                          const { editable } = this.state.statusGroup[index].luminance;

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