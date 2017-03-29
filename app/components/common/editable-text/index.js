import React, { Component } from 'react';

import { Input } from 'antd';

export default class EditableText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            editable: this.props.editable || false,
            unit: this.props.unit || ''
        };
        console.log('value', this.state.value);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editable !== this.state.editable) {
            this.setState({ editable: nextProps.editable });
            if (nextProps.editable) {
                this.cacheValue = this.state.value;
            }
        }
        if (nextProps.status && nextProps.status !== this.props.status) {
            if (nextProps.status === 'save') {
                this.props.onChange(this.state.value);
            } else if (nextProps.status === 'cancel') {
                this.setState({ value: this.cacheValue });
                this.props.onChange(this.cacheValue);
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.editable !== this.state.editable || nextState.value !== this.state.value;
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({ value });
    }

    render() {
        const { value, editable, unit } = this.state;

        return (
            <div className="c-et-container">
                {
                    editable ?
                        <div>
                            <Input
                              size="small"
                              value={value}
                              onChange={e => this.handleChange(e)}
                              addonAfter={unit}
                            />
                        </div>
                        :
                        <div className="c-et-row-text">
                            {`${value} ${unit}` || ` ${unit}`}
                        </div>
                }
            </div>
        );
    }
}