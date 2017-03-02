import React from 'react';
import { Menu, Icon } from 'antd';
import './sider.css';

const { SubMenu } = Menu;

class Sider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: '1',
            openKeys: []
        };
    }

    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }

    getAncestorKeys = (key) => {
        const map = {};
        return map[key] || [];
    }

    handleClick = (e) => {
        this.setState({ current: e.key });
        this.props.push(`/${e.key}/123`);
    }

    render() {
        return (
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              selectedKeys={[this.state.current]}
              onOpenChange={this.onOpenChange}
              onClick={this.handleClick}
              style={{ width: '100%', height: '100%' }}
            >
                <SubMenu key="sub1" title={<span><Icon type="bars" />集中控制管理</span>}>
                    <Menu.Item key="manual_lamp_switching">手动开关灯</Menu.Item>
                    <Menu.Item key="lamp_switching_time">开关灯时间</Menu.Item>
                    <Menu.Item key="electrical_parameter">详细电参数</Menu.Item>
                    <Menu.Item key="stabilivolt_interval">时段稳压</Menu.Item>
                    <Menu.Item key="group_control_setting">组控设置</Menu.Item>
                    <Menu.Item key="baidu_map">百度地图</Menu.Item>
                    <Menu.Item key="record_query">记录查询</Menu.Item>
                    <Menu.Item key="current_warning">当前警报</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="bulb" />单灯控制管理</span>}>
                    <Menu.Item key="single_lamp_map">单灯地图</Menu.Item>
                    <Menu.Item key="single_lamp_timing">单灯校时</Menu.Item>
                    <Menu.Item key="compulsive_lamp_switching">强制开关灯</Menu.Item>
                    <Menu.Item key="single_lamp_control">单灯简易控制</Menu.Item>
                    <Menu.Item key="single_lamp_switching_time">单灯开关灯时间</Menu.Item>
                    <Menu.Item key="history">历史记录</Menu.Item>
                    <Menu.Item key="single_lamp_warning_info">单灯警报信息</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default Sider;