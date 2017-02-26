import React from 'react';
import { Layout } from 'antd';
import FrameHeader from './header/header.js';
import FrameContent from './content/content.js';
import FrameFooter from './footer/footer.js';

class Frame extends React.Component {
    render() {
        return (
            <Layout>
                <FrameHeader />
                <FrameContent >
                    {this.props.children}
                </FrameContent>
                <FrameFooter />
            </Layout>
        );
    }
}

export default Frame;
