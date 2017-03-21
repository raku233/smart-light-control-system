import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Layout } from 'antd';
import FrameHeader from './header/';
import FrameContent from './content/';
import FrameFooter from './footer/';
import SiderMenu from './sider-menu/index';
import './frame.css';

const { Sider } = Layout;

class Frame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
            mode: 'inline'
        };
    }

    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline'
        });
    }

    render() {
        const { push } = this.props;
        return (
            <Layout style={{ height: '100vh' }}>
                <Sider
                  collapsible
                  collapsed={this.state.collapsed}
                  onCollapse={this.onCollapse}
                >
                    <div className="l-f-logo"></div>
                    <SiderMenu mode={this.state.mode} push={push} />
                </Sider>
                <Layout style={{ minWidth: '900px' }}>
                    <FrameHeader />
                    <FrameContent push={ push }>
                        {this.props.children}
                    </FrameContent>
                    <FrameFooter />
                </Layout>
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
