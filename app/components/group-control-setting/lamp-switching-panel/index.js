import React, { Component } from 'react';

import { Card, Switch } from 'antd';

import './index.css';

export default function LampSwitchingPanel() {
    return (
        <div className="c-gcs-lsp-container">
            <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsp-label">第1支路</span>
                <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsp-label">第2支路</span>
                <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsp-label">第3支路</span>
                <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsp-label">第4支路</span>
                <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsp-label">第5支路</span>
                <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsp-label">第6支路</span>
                <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsp-label">第7支路</span>
                <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
            <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                <span className="c-gcs-lsp-label">第8支路</span>
                <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" />
            </Card>
        </div>
    );
}