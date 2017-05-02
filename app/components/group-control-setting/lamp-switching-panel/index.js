import React, { Component } from 'react';

import { Card, Switch } from 'antd';

import './index.css';

export default class LampSwitchingPanel extends Component {

    handleSwitchChange(index, value) {
        const { switchingStatusGroup } = this.props;
        switchingStatusGroup[index] = value;
        this.props.updateViewData({ switchingStatusGroup });
    }

    render() {
        const [branch1, branch2, branch3, branch4, branch5, branch6, branch7, branch8] = this.props.switchingStatusGroup;

        return (
            <div className="c-gcs-lsp-container">
                <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                    <span className="c-gcs-lsp-label">第1支路</span>
                    <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" checked={branch1} onChange={this.handleSwitchChange.bind(this, '0')} />
                </Card>
                <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                    <span className="c-gcs-lsp-label">第2支路</span>
                    <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" checked={branch2} onChange={this.handleSwitchChange.bind(this, '1')} />
                </Card>
                <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                    <span className="c-gcs-lsp-label">第3支路</span>
                    <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" checked={branch3} onChange={this.handleSwitchChange.bind(this, '2')} />
                </Card>
                <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                    <span className="c-gcs-lsp-label">第4支路</span>
                    <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" checked={branch4} onChange={this.handleSwitchChange.bind(this, '3')} />
                </Card>
                <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                    <span className="c-gcs-lsp-label">第5支路</span>
                    <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" checked={branch5} onChange={this.handleSwitchChange.bind(this, '4')} />
                </Card>
                <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                    <span className="c-gcs-lsp-label">第6支路</span>
                    <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" checked={branch6} onChange={this.handleSwitchChange.bind(this, '5')} />
                </Card>
                <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                    <span className="c-gcs-lsp-label">第7支路</span>
                    <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" checked={branch7} onChange={this.handleSwitchChange.bind(this, '6')} />
                </Card>
                <Card className="c-gcs-lsp-config-wrapper" style={{ width: 150 }}>
                    <span className="c-gcs-lsp-label">第8支路</span>
                    <Switch className="c-gcs-lsp-switch" unCheckedChildren="关" checkedChildren="开" checked={branch8} onChange={this.handleSwitchChange.bind(this, '7')} />
                </Card>
            </div>
        );
    }

    
}