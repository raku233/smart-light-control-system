import React from 'react';
import { Layout, Row, Col } from 'antd';
import SiderMenu from '../sider-menu/';
import './index.css';

const { Content, } = Layout;

class FrameContent extends React.Component {
    render() {
        return (
            <Content className="l-c-content">
                {this.props.children}
            </Content>
        );
    }
}

export default FrameContent;
