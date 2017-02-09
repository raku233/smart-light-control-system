import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { actions } from './redux';

import PreviewList from '../../components/home/previewList';

class Home extends Component {
    render() {
        const { list, listActions, push } = this.props;
        return (
            <div>
                 <h1>Home</h1>
                <PreviewList {...list} {...listActions} push={push} />
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