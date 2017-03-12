import React from 'react';
import { Menu, Layout } from 'antd';
import './index.css';

const { Header } = Layout;

class FrameHeader extends React.Component {
    render() {
        return (
            <Header className="l-h-header" />
        );
    }
}

export default FrameHeader;
