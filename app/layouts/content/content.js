import React from 'react';
import { Layout, Row, Col } from 'antd';
import Sider from './sider.js';
import './content.css';

const { Content } = Layout;

class FrameContent extends React.Component {
    render() {
        return (
            <Content className="content">
                <Row style={{ height: '100%' }}>
                    <Col xs={10} sm={4} md={4} lg={4} style={{ height: '100%' }}>
                        <Sider push={ this.props.push } />
                    </Col>
                    <Col xs={14} sm={20} md={20} lg={20} style={{ height: '100%' }}>
                        <Content className="container">
                            {this.props.children}
                        </Content>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default FrameContent;
