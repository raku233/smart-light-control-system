import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

class FrameFooter extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                智慧路灯管理系统
            </Footer>
        );
    }
}

export default FrameFooter;