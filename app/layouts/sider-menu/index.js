import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import './index.css';

const { SubMenu } = Menu;

class SiderMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openKeys: [this.props.pathname[1]]
        };
    }

    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = [].concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = [];
        }
        this.setState({ openKeys: nextOpenKeys });
    }

    handleClick = (e) => {
        this.props.push(`/${`${e.keyPath[1]}/${e.key}`}`);
    }

    render() {
        return (
            <Menu
              theme="dark"
              mode={this.props.mode}
              openKeys={this.state.openKeys}
              selectedKeys={[this.props.pathname[2]]}
              onOpenChange={this.onOpenChange}
              onClick={this.handleClick}
              style={{ width: '100%', fontSize: '16px' }}
            >
                <SubMenu key="integrated_terminal" title={<span><Icon type="bars" /><span className="nav-text">集中控制管理</span></span>}>
                    <Menu.Item key="manual_lamp_switching">手动开关灯</Menu.Item>
                    <Menu.Item key="lamp_switching_time">开关灯时间</Menu.Item>
                    <Menu.Item key="electrical_parameter">详细电参数</Menu.Item>
                    <Menu.Item key="stabilivolt_interval">时段稳压</Menu.Item>
                    <Menu.Item key="group_control_setting">组控设置</Menu.Item>
                    <Menu.Item key="baidu_map">百度地图</Menu.Item>
                    <Menu.Item key="record_query">记录查询</Menu.Item>
                    <Menu.Item key="current_warning">当前警报</Menu.Item>
                    <Menu.Item key="energy_consumption_query">能耗查询</Menu.Item>
                    <Menu.Item key="assets_proportion_chart">资产比例图</Menu.Item>
                </SubMenu>
                <SubMenu key="single_lamp" title={<span><Icon type="bulb" /><span className="nav-text">单灯控制管理</span></span>}>
                    <Menu.Item key="single_lamp_map">单灯地图</Menu.Item>
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

export default connect(state => {
    const path = state.routing.locationBeforeTransitions.pathname.split('/');
    return {
        pathname: path
    };
}, dispatch => {
    return {
    };
})(SiderMenu);