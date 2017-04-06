import React, { Component } from 'react';

import { TimePicker, Tooltip } from 'antd';
import moment from 'moment';
import classNames from 'classnames';

import './index.css';

export default class TimeRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: moment('00:00:00', 'HH:mm:ss'),
            endTime: moment('00:00:00', 'HH:mm:ss'),
            couldDeal: false,
            isStartTimeRight: true,
            isEndTimeRight: true
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(type, time, timeStr) {
        const { startTime, endTime, couldDeal } = this.state;
        let isStartTimeRight = true,
            isEndTimeRight = true;

        switch (type) {
        case 'start': {
            if (moment(time).isAfter(endTime) && couldDeal) {
                isStartTimeRight = false;
            }
            this.setState({ startTime: time, isStartTimeRight });
            break;
        }
        case 'end': {
            if (moment(time).isBefore(startTime) && couldDeal) {
                isEndTimeRight = false;
            }
            this.setState({ endTime: time, couldDeal: true, isEndTimeRight });
            break;
        }
        default: break;
        }
    }

    render() {
        const { startTime, endTime, isStartTimeRight, isEndTimeRight } = this.state;
        const sTimePickerClass = classNames({
                'c-tr-start-time': true,
                'c-tr-wrong-time': !isStartTimeRight
            }),
            eTimePickerClass = classNames({
                'c-tr-end-time': true,
                'c-tr-wrong-time': !isEndTimeRight
            });

        return (
            <div className="c-tr-container">
                <Tooltip visible={!isStartTimeRight} title="起始时间晚于结束时间">
                    <TimePicker className={sTimePickerClass} size="small" value={startTime} onChange={this.handleChange.bind(this, 'start')} />
                </Tooltip>
                <span className="c-tr-divider">--</span>
                <Tooltip visible={!isEndTimeRight} title="结束时间早于起始时间">
                    <TimePicker className={eTimePickerClass} size="small" value={endTime} onChange={this.handleChange.bind(this, 'end')} />
                </Tooltip>
            </div>
        );
    }
}

