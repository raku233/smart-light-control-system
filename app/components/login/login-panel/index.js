import React, { Component } from 'react';

import { Input, Card, Icon, Button, message } from 'antd';

import { getCookie, parseCookie } from '../../../utils/parser';

import './index.css';

export default class LoginPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.emitUserNameEmpty = this.emitUserNameEmpty.bind(this);
        this.emitPasswordEmpty = this.emitPasswordEmpty.bind(this);
        this.login = this.login.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const { isLogin, error } = nextProps;

        if (isLogin) {
            message.info('登录成功！');
            location.href = '/';
        } else if (error && error.message) {
            message.error(error.message);
        }
    }

    onChangeUserName(e) {
        this.setState({ userName: e.target.value });
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    emitUserNameEmpty() {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    emitPasswordEmpty() {
        this.passwordInput.focus();
        this.setState({ password: '' });
    }

    login() {
        const { userName, password } = this.state;

        this.props.uploadViewData({ userName, password, action: 'login' });
    }

    render() {
        const { userName, password } = this.state;
        const userNameSuffix = userName ? <Icon type="close-circle" onClick={this.emitUserNameEmpty} /> : null;
        const passwordSuffix = password ? <Icon type="close-circle" onClick={this.emitPasswordEmpty} /> : null;

        return (
            <Card className="c-l-lp-container" style={{ padding: '20px' }} title="智慧路灯管理系统">
                <Input
                  className="c-l-lp-input"
                  placeholder="请输入账号"
                  prefix={<Icon type="user" />}
                  suffix={userNameSuffix}
                  value={userName}
                  onChange={this.onChangeUserName}
                  ref={node => this.userNameInput = node}
                />
                <Input
                  className="c-l-lp-input"
                  type="password"
                  placeholder="请输入密码"
                  prefix={<Icon type="key" />}
                  suffix={passwordSuffix}
                  value={password}
                  onChange={this.onChangePassword}
                  ref={node => this.passwordInput = node}
                />
                <Button className="c-l-lp-btn" type="default" onClick={this.login}>登录</Button>
            </Card>
        );
    }
}