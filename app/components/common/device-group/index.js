import React, { Component } from 'react';

import { Select, Tree, Spin, message } from 'antd';

import './index.css';

const { Option } = Select,
    { TreeNode } = Tree;

export default class DeviceGroup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            treeNodes: []
        };

        this.fillDeviceList = this.fillDeviceList.bind(this);
        this.handleDeviceSelect = this.handleDeviceSelect.bind(this);
    }

    componentDidMount() {
        const { groupType, loadDeviceGroup } = this.props;
        loadDeviceGroup(groupType);
    }

    componentWillReceiveProps(nextProps) {
        const { error, deviceGroup } = nextProps;
        const treeNodes = [];

        if (error) message.error('设备分组获取失败！');

        // 根据设备分组数据生成视图
        if (deviceGroup && !error) {
            for (const group of deviceGroup) {
                treeNodes.push(<TreeNode title={group} key={group} ></TreeNode>);
            }
        }

        this.setState({ treeNodes });
    }

    fillDeviceList(groupType) {
        this.props.loadDeviceGroup(groupType);
    }

    handleDeviceSelect(selectedKey, e) {
        const [groupName] = selectedKey;
        this.props.loadViewData(groupName);
    }

    render() {
        const { loading, groupType } = this.props,
            { treeNodes } = this.state;

        return (
            <div className="c-dg-container">
                <div className="c-dg-group-selector">
                    <span className="c-dg-label">设备分组：</span>
                    <Select className="c-dg-selector" dropdownMatchSelectWidth value={groupType} onSelect={this.fillDeviceList}>
                        <Option value="区域分组">区域分组</Option>
                        <Option value="电话分组">电话分组</Option>
                        <Option value="自定义分组">自定义分组</Option>
                    </Select>
                </div>
                <div className="c-dg-wrapper">
                    <div className="c-dg-title">
                        设备分组列表
                    </div>
                    <Spin spinning={loading} tip="加载中...">
                        <Tree className="c-dg-list" showLine onSelect={this.handleDeviceSelect}>
                            { treeNodes }
                        </Tree>
                    </Spin>
                </div>
            </div>
        );
    }
}