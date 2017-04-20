import React, { Component } from 'react';

import { TimePicker, Tooltip } from 'antd';
import moment from 'moment';
import classNames from 'classnames';

import './index.css';

export default class TimeRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            couldDeal: false,
            isStartTimeRight: true,
            isEndTimeRight: true
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(type, time, timeStr) {
        const { startTime, endTime } = this.props;
        let { couldDeal } = this.state;
        let isStartTimeRight = true,
            isEndTimeRight = true;

        if (!(startTime === '0:00' && endTime === '0:00')) {
            couldDeal = true;
        }

        switch (type) {
        case 'start': {
            if (moment(time).isAfter(moment(endTime, 'HH:mm')) && couldDeal) {
                isStartTimeRight = false;
            }
            this.props.updateTimeRange({ startTime: time.format('HH:mm'), endTime });
            this.setState({ isStartTimeRight, isEndTimeRight });
            break;
        }
        case 'end': {
            if (moment(time).isBefore(moment(startTime, 'HH:mm')) && couldDeal) {
                isEndTimeRight = false;
            }
            this.props.updateTimeRange({ startTime, endTime: time.format('HH:mm') });
            this.setState({ couldDeal: true, isStartTimeRight, isEndTimeRight });
            break;
        }
        default: break;
        }
    }

    render() {
        const { isStartTimeRight, isEndTimeRight } = this.state;
        let { startTime, endTime } = this.props;
        startTime = moment(startTime, 'HH:mm');
        endTime = moment(endTime, 'HH:mm');

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
                    <TimePicker className={sTimePickerClass} size="small" format="HH:mm" value={startTime} onChange={this.handleChange.bind(this, 'start')} />
                </Tooltip>
                <span className="c-tr-divider">--</span>
                <Tooltip visible={!isEndTimeRight} title="结束时间早于起始时间">
                    <TimePicker className={eTimePickerClass} size="small" format="HH:mm" value={endTime} onChange={this.handleChange.bind(this, 'end')} />
                </Tooltip>
            </div>
        );
    }
}

