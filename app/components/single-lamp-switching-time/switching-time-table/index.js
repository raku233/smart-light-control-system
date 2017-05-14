import React, { Component } from 'react';
import { Table, Popconfirm, Row, Col } from 'antd';
import TimeRange from '../../common/time-range';
import EditableText from '../../common/editable-text/index';
import './index.css';

const { Column } = Table;

export default class SwitchingTimeTable extends Component {
    updateTimeRange(index, timeRange) {
        const { statusGroup } = this.props;
        statusGroup[index].startTime = timeRange.startTime;
        statusGroup[index].endTime = timeRange.endTime;
        this.props.updateViewData(statusGroup);
    }

    handleValueChange(key, index, value) {
        const { statusGroup } = this.props;
        statusGroup[index][key].value = value;
        this.props.updateViewData(statusGroup);
    }

    edit(index) {
        const { statusGroup } = this.props;
        Object.keys(statusGroup[index]).forEach(item => {
            if (statusGroup[index][item] && typeof statusGroup[index][item].editable !== 'undefined') {
                statusGroup[index][item].editable = true;
            }
        });
        this.props.updateViewData(statusGroup);
    }

    editDone(index, type) {
        const { statusGroup } = this.props;
        Object.keys(statusGroup[index]).forEach(item => {
            if (statusGroup[index][item] && typeof statusGroup[index][item].editable !== 'undefined') {
                statusGroup[index][item].editable = false;
                statusGroup[index][item].status = type;
            }
        });
        this.props.updateViewData(statusGroup);
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
        return (
            <div className="c-slst-stt-container">
                <Table size="small" dataSource={this.props.statusGroup} pagination={false}>
                    <Column
                      title="时段"
                      width="40"
                      key="period"
                      dataIndex="period"
                    />
                    <Column
                      width={280}
                      title="起止时间"
                      key="timeRange"
                      dataIndex="timeRange"
                      render={(text, record, index) => {
                          return (
                              <TimeRange startTime={record.startTime} endTime={record.endTime} updateTimeRange={this.updateTimeRange.bind(this, index)} />
                          );
                      }}
                    />
                    <Column
                      title="亮度"
                      width="100"
                      key="luminance"
                      dataIndex="luminance"
                      render={(object, record, index) => this.renderEditableColumn(this.props.statusGroup, index, 'luminance', '%', object)}
                    />
                    <Column
                      width={100}
                      title="操作"
                      key="operation"
                      render={(text, record, index) => {
                          const { editable } = this.props.statusGroup[index].luminance;

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