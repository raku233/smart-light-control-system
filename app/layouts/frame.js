import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import FrameHeader from './header/header.js';
import FrameContent from './content/content.js';
import FrameFooter from './footer/footer.js';

class Frame extends React.Component {
    render() {
        return (
            <Layout>
                <FrameHeader />
                <FrameContent children={this.props.children}/>
                <FrameFooter />
            </Layout>
        );
    }
}

export default Frame;