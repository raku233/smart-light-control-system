import React, { Component } from 'react';

import { getCookie, parseCookie } from '../../../utils/parser';

import './index.css';

class UserInfo extends Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        const cookie = getCookie(document.cookie);
        cookie.userType = 'visitor';

        document.cookie = parseCookie(cookie);
        this.props.uploadViewData({ action: 'logout' });
        location.href = '/';
    }

    render() {
        return (
            <div className="c-ui-container">
                <div className="c-ui-avatar"></div>
                <div className="c-ui-user-name">管理员</div>
                <div className="c-ui-logout-btn" onClick={this.logout}>登出</div>
            </div>
        );
    }
}

export default UserInfo;