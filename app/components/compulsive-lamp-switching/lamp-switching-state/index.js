import React, { Component } from 'react';
import { Button, Slider, Card, Row, Col, Checkbox, Table } from 'antd';

import './index.css';

export default class LampSwitchingState extends Component {
    render() {
        // 滑动输入条刻度
        const masks = {
            0: '0',
            25: '25',
            50: '50',
            75: '75',
            100: '100'
        };


        return (
            <div className="c-cls-container">
                <h2>开关灯状态</h2>
                <Row className="c-cls-row">
                    <Col span="6">
                        <Card title={<Checkbox key="light1">灯1</Checkbox>} bodyStyle={{ padding: 10 }}>
                            <Slider defaultValue={30} marks={masks} />
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card title={<Checkbox key="light2">灯2</Checkbox>} bodyStyle={{ padding: 10 }}>
                            <Slider defaultValue={30} marks={masks} />
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card title={<Checkbox key="light3">灯3</Checkbox>} bodyStyle={{ padding: 10 }}>
                            <Slider defaultValue={30} marks={masks} />
                        </Card>
                    </Col>
                    <Col span="6">
                        <Card title={<Checkbox key="light4">灯4</Checkbox>} bodyStyle={{ padding: 10 }}>
                            <Slider defaultValue={30} marks={masks} />
                        </Card>
                    </Col>
                </Row>
                <div style={{ display: 'flex', width: '100%' }}>
                    <Button type="danger" className="c-cls-button">设置</Button>
                    <Button type="primary" className="c-cls-button">恢复时控</Button>
                    <Button type="primary" className="c-cls-button">查看电流信息</Button>
                    <Button type="primary" className="c-cls-button">查看开关状态</Button>
                </div>
            </div>
        );
    }
}