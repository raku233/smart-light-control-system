import React, { Component } from 'react';
import { Switch, Button, Card } from 'antd';
import './index.css';

export default class SwitchingCard extends Component {
    render() {
        return (
            <Card title={<Switch checkedChildren={'开'} unCheckedChildren={'关'} />}>
                <div className="c-slc-sc-container">
                    <Button className="v-slc-button">全手动开灯</Button>
                </div>
                <div className="c-slc-sc-container">
                    <Button type="primary" className="v-slc-button">全恢复时控</Button>
                </div>
            </Card>
        );
    }
}