import React, { Component } from 'react';

import { TimePicker } from 'antd';
import moment from 'moment';

export default class TimeRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: moment('00:00:00', 'HH:mm:ss'),
            endTime: moment('00:00:00', 'HH:mm:ss')
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(type, time, timeStr) {
        const { startTime, endTime } = this.state;

        switch (type) {
        case 'start': {
            if (moment(time).isAfter(endTime)) {
                console.log('after');
            }
            this.setState({ startTime: time });
            break;
        }
        case 'end': {
            if (moment(time).isBefore(startTime)) {
                console.log('before');
            }
            this.setState({ endTime: time });
            break;
        }
        default: break;
        }
    }

    render() {
        const { startTime, endTime } = this.state;

        return (
            <div className="c-tr-container">
                <TimePicker className="c-tr-start-time" placeholder="起始时间" value={startTime} onChange={this.handleChange.bind(this, 'start')} />
                <TimePicker className="c-tr-end-time" placeholder="结束时间" value={endTime} onChange={this.handleChange.bind(this, 'end')} />
            </div>
        );
    }
}

