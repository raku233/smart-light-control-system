 import React, { Component } from 'react';

import { Select, Tree } from 'antd';

import './index.css';

const { Option } = Select,
      { TreeNode } = Tree;

export default class DeviceList extends Component {

    constructor(props) {
        super(props);

        this.fillDeviceList = this.fillDeviceList.bind(this);
    }

    fillDeviceList(groupType) {
        this.props.loadDeviceList(groupType);
    }
    render() {
        const { groupType } = this.props;
        console.log(this.props);

        return (
            <div className="c-dl-container">
                <div className="c-dl-group-selector">
                    <span className="c-dl-label">设备分组：</span>
                    <Select className="c-dl-selector" dropdownMatchSelectWidth defaultValue={groupType} onSelect={this.fillDeviceList}>
                        <Option value="区域分组">区域分组</Option>
                        <Option value="电话分组">电话分组</Option>
                        <Option value="自定义分组">自定义分组</Option>
                    </Select>
                </div>
                <div className="c-dl-wrapper">
                    <div className="c-dl-title">
                        设备列表
                    </div>
                    <Tree className="c-dl-list">
                        <TreeNode title="组1" key="0-0">
                            <TreeNode title="设备1" key="0-0-1"></TreeNode>
                        </TreeNode>
                        <TreeNode title="组2" key="0-1"></TreeNode>
                        <TreeNode title="组3" key="0-2"></TreeNode>
                    </Tree>
                </div>
            </div>
        );
    }
}