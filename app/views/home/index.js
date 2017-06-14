import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { actions } from './redux';

import './index.css';

class Home extends Component {
    render() {
        return (
            <div className="v-home-container">
                 <h1 className="v-home-title" >欢迎使用智慧路灯管理系统</h1>
            </div>
        );
    }
}

export default connect(state => {
    return {
        list: state.home.list
    };
}, dispatch => {
    return {
        listActions: bindActionCreators(actions.listActions, dispatch),
        push: bindActionCreators(push, dispatch)
    };
})(Home);