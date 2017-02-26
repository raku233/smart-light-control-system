import React, { PropTypes, Component } from 'react';

export default class Preview extends Component {
    static propTypes = {
        title: PropTypes.string,
        link: PropTypes.string,
        push: PropTypes.func,
    };

    handleNavigate(id, e) {
        e.preventDefault();
        this.props.push(`/detail/${id}`);
    }

    render() {
        const { id, title, date, description } = this.props;
        return (
            <article className="article-preview-item">
                <h1 className="title">
                    <a href={`/detail/${id}`} onClick={this.handleNavigate.bind(this, id)}>{title}</a>
                </h1>
                <span className="date">{date}</span>
                <p className="desc">{description}</p>
            </article>
        );
    }
}
