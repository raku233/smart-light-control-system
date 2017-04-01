import React, { Component } from 'react';

import { Table, Switch, Popconfirm, Icon } from 'antd';
import EditableText from '../../common/editable-text';

import './index.css';

const { Column } = Table;

export default class BranchInfoTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { key: 1, branches: '支路1', latestCurrent: 0, backupCurrent: { editable: false, value: 1 }, lowerAlarmLimit: { editable: false, value: 2 }, contractorParallel: { checked: false }, branchAlarm: { checked: false } }
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

    renderSwitchColumn(index, key, record) {
        return (
            <Switch
              unCheckedChildren={<Icon type="cross" />}
              checkedChildren={<Icon type="check" />}
              checked={record[key].checked}
              onChange={value => this.handleSwitchChange(key, index, value)}
            />
        );
    }

    handleValueChange(key, index, value) {
        const { data } = this.state;
        data[index][key].value = value;
        this.setState({ data });
    }

    handleSwitchChange(key, index, value) {
        const { data } = this.state;
        data[index][key].checked = value;
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
            <Table dataSource={data} size="small">
                <Column
                  title="支路项目"
                  dataIndex="branches"
                  key="branches"
                />
                <Column
                  title="最新电流"
                  dataIndex="latestCurrent"
                  key="latestCurrent"
                />
                <Column
                  width={100}
                  title="备份电流"
                  dataIndex="backupCurrent"
                  key="backupCurrent"
                  render={(object, record, index) => this.renderEditableColumn(data, index, 'backupCurrent', 'A', object)}
                />
                <Column
                  width={100}
                  title="告警下限"
                  dataIndex="lowerAlarmLimit"
                  key="lowerAlarmLimit"
                  render={(object, record, index) => this.renderEditableColumn(data, index, 'lowerAlarmLimit', '%', object)}
                />
                <Column
                  title="接触器并联"
                  dataIndex="contractorParallel"
                  key="contractorParallel"
                  render={(text, record, index) => this.renderSwitchColumn(index, 'contractorParallel', record)}
                />
                <Column
                  title="支路报警"
                  dataIndex="branchAlarm"
                  key="branchAlarm"
                  render={(text, record, index) => this.renderSwitchColumn(index, 'branchAlarm', record)}
                />
                <Column
                  width={100}
                  title="操作"
                  dataIndex="operation"
                  key="operation"
                  render={(text, record, index) => {
                      const { editable } = this.state.data[index].backupCurrent;

                      return (
                        <div>
                            {
                                editable ?
                                    <span>
                                        <a className="c-ep-bit-btn" onClick={() => this.editDone(index, 'save')}>保存</a>
                                        <Popconfirm title="确定取消编辑吗？" onConfirm={() => this.editDone(index, 'cancel')}>
                                            <a className="c-ep-bit-btn">取消</a>
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