import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Layout } from 'antd';
import FrameHeader from './header/header.js';
import FrameContent from './content/content.js';
import FrameFooter from './footer/footer.js';

class Frame extends React.Component {
    render() {
        const { push } = this.props;
        return (
            <Layout>
                <FrameHeader />
                <FrameContent push={ push }>
                    {this.props.children}
                </FrameContent>
                <FrameFooter />
            </Layout>
        );
    }
}

export default connect(state => {
    return {

    };
}, dispatch => {
    return {
        push: bindActionCreators(push, dispatch)
    };
})(Frame);
