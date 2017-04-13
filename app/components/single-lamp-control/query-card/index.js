import React, { Component } from 'react';
import { Checkbox, Button, Card } from 'antd';
import './index.css';

export default class QueryCard extends Component {
    render() {
        return (
            <Card title={<Checkbox>对各单灯进行广播</Checkbox>}>
                <div className="c-slc-qc-container">
                    <Button className="v-slc-button">查询时段1</Button>
                    <Button type="primary" className="v-slc-button">查询时段2</Button>
                </div>
                <div className="c-slc-qc-container">
                    <Button className="v-slc-button">查询开关状态</Button>
                    <Button type="primary" className="v-slc-button">查询电流信息</Button>
                    <Button className="v-slc-button">查询电杆状态</Button>
                </div>
            </Card>
);
    }
}