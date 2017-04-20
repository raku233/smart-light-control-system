import React, { Component } from 'react';

import { Select, Tree, Spin, message } from 'antd';

import './index.css';

const { Option } = Select,
    { TreeNode } = Tree;

export default class DeviceList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            treeNodes: []
        };

        this.fillDeviceList = this.fillDeviceList.bind(this);
        this.handleDeviceSelect = this.handleDeviceSelect.bind(this);
    }

    componentDidMount() {
        const { groupType, loadDeviceList } = this.props;
        loadDeviceList(groupType);
    }

    componentWillReceiveProps(nextProps) {
        const { error, deviceList } = nextProps;
        const treeNodes = [];

        if (error) message.error('设备列表获取失败！');

        // 根据设备列表数据生成视图
        if (deviceList && !error) {
            for (const deviceGroup in deviceList) {
                treeNodes.push(<TreeNode title={deviceGroup} key={deviceGroup} >
                    {deviceList[deviceGroup].map(deviceInfo => (
                        <TreeNode title={deviceInfo.name} key={deviceInfo.name} deviceInfo={deviceInfo} ></TreeNode>
                    ))}
                </TreeNode>);
            }
        }

        this.setState({ treeNodes });
    }

    fillDeviceList(groupType) {
        this.props.loadDeviceList(groupType);
    }

    handleDeviceSelect(selectedKey, e) {
        const [deviceNode] = e.selectedNodes;
        const { deviceInfo } = deviceNode.props;
        this.props.loadViewData(deviceInfo);
    }

    handleDeviceGroupSelect(selectedKey, e) {
        console.log('selectedKey', selectedKey);
        console.log('e', e);
    }

    render() {
        const { loading, groupType } = this.props,
            { treeNodes } = this.state;

        return (
            <div className="c-dl-container">
                <div className="c-dl-group-selector">
                    <span className="c-dl-label">设备分组：</span>
                    <Select className="c-dl-selector" dropdownMatchSelectWidth value={groupType} onSelect={this.fillDeviceList}>
                        <Option value="区域分组">区域分组</Option>
                        <Option value="电话分组">电话分组</Option>
                        <Option value="自定义分组">自定义分组</Option>
                    </Select>
                </div>
                <div className="c-dl-wrapper">
                    <div className="c-dl-title">
                        设备列表
                    </div>
                    <Spin spinning={loading} tip="加载中...">
                        <Tree className="c-dl-list" onSelect={this.handleDeviceSelect}>
                            { treeNodes }
                        </Tree>
                    </Spin>
                </div>
            </div>
        );
    }
}