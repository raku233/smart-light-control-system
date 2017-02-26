import React from 'react';
import { Menu, Layout, Icon } from 'antd';
import './content.css';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class FrameContent extends React.Component {
    render() {
        return (
            <Content className="content">
                <Layout className="layout">
                    <Sider width={200} className="sider">
                        <Menu
                          mode="inline"
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="bars" />集中控制管理</span>}>
                                <Menu.Item key="sub1-1">手动开关灯</Menu.Item>
                                <Menu.Item key="sub1-2">开关灯时间</Menu.Item>
                                <Menu.Item key="sub1-3">详细电参数</Menu.Item>
                                <Menu.Item key="sub1-4">时段稳压</Menu.Item>
                                <Menu.Item key="sub1-5">组控设置</Menu.Item>
                                <Menu.Item key="sub1-6">百度地图</Menu.Item>
                                <Menu.Item key="sub1-7">记录查询</Menu.Item>
                                <Menu.Item key="sub1-8">当前警报</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="bulb" />单灯控制管理</span>}>
                                <Menu.Item key="sub2-1">单灯地图</Menu.Item>
                                <Menu.Item key="sub2-2">单灯校时</Menu.Item>
                                <Menu.Item key="sub2-3">强制开关灯</Menu.Item>
                                <Menu.Item key="sub2-4">单灯简易控制</Menu.Item>
                                <Menu.Item key="sub2-5">单灯开关灯时间</Menu.Item>
                                <Menu.Item key="sub2-6">历史记录</Menu.Item>
                                <Menu.Item key="sub2-7">单等警报信息</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content className="container">
                        {this.props.children}
                    </Content>
                </Layout>
            </Content>
        );
    }
}

export default FrameContent;
