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
        const { error, deviceGroup } = nextProps;
        const treeNodes = [];

        if (error) message.error('设备列表获取失败！');

        // 根据设备列表数据生成视图
        if (deviceGroup && !error) {
            for (const group in deviceGroup) {
                treeNodes.push(<TreeNode className="c-dl-parent-node" title={group} key={group} >
                    {deviceGroup[group].map(deviceInfo => (
                        <TreeNode className={`c-dl-child-node c-dl-${deviceInfo.connection === 'disconnect' ? 'disconnect' : 'connect'}-node`} title={deviceInfo.name} key={deviceInfo.name} deviceInfo={deviceInfo} ></TreeNode>
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
        console.log('key', selectedKey);
        const [deviceNode] = e.selectedNodes;
        const { deviceInfo, connection } = deviceNode.props;
        this.props.loadViewData(deviceInfo);

        if (!connection) message.error('该设备未连接到平台！');
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
                        <Tree className="c-dl-list" showIcon onSelect={this.handleDeviceSelect}>
                            { treeNodes }
                        </Tree>
                    </Spin>
                </div>
            </div>
        );
    }
}