import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Menu, Layout } from 'antd';

import { actions as viewActions } from '../../views/login/redux';

import UserInfo from '../../components/common/user-info';

import './index.css';

const { Header } = Layout;

class FrameHeader extends React.Component {
    render() {
        const { viewActions } = this.props;

        return (
            <Header className="l-h-header">
                <UserInfo {...viewActions} />
            </Header>
        );
    }
}

export default connect(state => {
    return {
        viewData: state.Login.viewData
    };
}, dispatch => {
    return {
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(FrameHeader);
