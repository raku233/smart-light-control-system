import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Card } from 'antd';

import { getCookie } from '../../utils/parser';
import { actions as viewActions } from '../../views/login/redux';
import LoginPanel from '../../components/login/login-panel';

import './index.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: false
        };
    }

    componentWillMount() {
        const { userType } = getCookie(document.cookie);
        const isLogin = userType === 'admin';
        this.setState({ isLogin });
        if (isLogin) location.href= '/';
    }

    render() {
        const { viewData, viewActions } = this.props;
        const { isLogin } = this.state;

        const component = !isLogin
            ? <LoginPanel {...viewData} {...viewActions} push={push} />
            : (<Card className="v-l-info"><span>用户已登陆，跳转至管理界面</span></Card>);

        return (
            <div className="v-l-container">
                {component}
            </div>
        );
    }
}

export default connect(state => {
    return {
        viewData: state.Login.viewData
    };
}, dispatch => {
    return {
        push: bindActionCreators(push, dispatch),
        viewActions: bindActionCreators(viewActions, dispatch)
    };
})(Login);