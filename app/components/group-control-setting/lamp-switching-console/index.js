import React, { Component } from 'react';

import { Card, Switch } from 'antd';

import './index.css';

export default function LampSwitchingConsole() {
    return (
        <div className="c-gcs-lsc-container">
            <Card className="c-gcs-lsc-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsc-label">第1支路</span>
                <Switch className="c-gcs-lsc-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsc-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsc-label">第2支路</span>
                <Switch className="c-gcs-lsc-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsc-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsc-label">第3支路</span>
                <Switch className="c-gcs-lsc-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsc-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsc-label">第4支路</span>
                <Switch className="c-gcs-lsc-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsc-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsc-label">第5支路</span>
                <Switch className="c-gcs-lsc-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsc-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsc-label">第6支路</span>
                <Switch className="c-gcs-lsc-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsc-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsc-label">第7支路</span>
                <Switch className="c-gcs-lsc-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsc-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsc-label">第8支路</span>
                <Switch className="c-gcs-lsc-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
        </div>
    );
}