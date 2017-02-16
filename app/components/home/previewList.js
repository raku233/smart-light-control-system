import React, { PropTypes, Component } from 'react';

import Preview from './preview';

export default class PreviewList extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        error: PropTypes.bool,
        articleList: PropTypes.arrayOf(PropTypes.object),
        loadArticles: PropTypes.func,
        push: PropTypes.func
    };

    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const { loading, error, articleList, push } = this.props;
        if (error) {
            return <p className="message">Oops, something is wrong.</p>;
        }

        if (loading) {
            return <p className="message">Loading...</p>;
        }

        return (
            <div>
                {articleList.map(item => {
                    return (<Preview { ...item } key={item.id} push={push} />)
                })}
            </div>
        );
    }
}